class Auth {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    async init() {
        const storedUser = localStorage.getItem('talkentai_user');
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser);
            await this.refreshUserData();
        }
    }

    async refreshUserData() {
        if (this.currentUser && this.currentUser.email) {
            const userData = await db.getUser(this.currentUser.email);
            if (userData) {
                this.currentUser = { ...this.currentUser, ...userData };
                localStorage.setItem('talkentai_user', JSON.stringify(this.currentUser));
            }
        }
    }

    async register(name, email, password) {
        const existingUser = await db.getUser(email);
        
        if (existingUser) {
            throw new Error('El correo electrónico ya está registrado');
        }

        const hashedPassword = this.hashPassword(password);
        
        const userData = {
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            level: 'A1',
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            streak: 0,
            lastActivity: null
        };

        await db.createUser(userData);
        
        this.currentUser = userData;
        localStorage.setItem('talkentai_user', JSON.stringify(userData));
        
        return userData;
    }

    async login(email, password) {
        const user = await db.getUser(email.toLowerCase().trim());
        
        if (!user) {
            throw new Error('Correo electrónico o contraseña incorrectos');
        }

        const hashedInput = this.hashPassword(password);
        
        if (user.password !== hashedInput) {
            throw new Error('Correo electrónico o contraseña incorrectos');
        }

        const streak = this.calculateStreak(user.lastActivity);
        
        const updates = {
            lastLogin: new Date().toISOString(),
            streak: streak,
            lastActivity: new Date().toISOString()
        };

        await db.updateUser(email.toLowerCase().trim(), updates);
        
        this.currentUser = { ...user, ...updates };
        localStorage.setItem('talkentai_user', JSON.stringify(this.currentUser));
        
        return this.currentUser;
    }

    async changePassword(currentPassword, newPassword) {
        if (!this.currentUser) {
            throw new Error('No hay usuario logueado');
        }

        const user = await db.getUser(this.currentUser.email);
        
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const hashedCurrent = this.hashPassword(currentPassword);
        
        if (user.password !== hashedCurrent) {
            throw new Error('La contraseña actual es incorrecta');
        }

        const hashedNew = this.hashPassword(newPassword);
        
        await db.updateUser(this.currentUser.email, { password: hashedNew });
        
        this.currentUser.password = hashedNew;
        localStorage.setItem('talkentai_user', JSON.stringify(this.currentUser));
        
        return true;
    }

    async resetPassword(email, newPassword) {
        const user = await db.getUser(email.toLowerCase().trim());
        
        if (!user) {
            throw new Error('El correo electrónico no está registrado');
        }

        const hashedPassword = this.hashPassword(newPassword);
        
        await db.updateUser(email.toLowerCase().trim(), { password: hashedPassword });
        
        return true;
    }

    async updateProfile(updates) {
        if (!this.currentUser) {
            throw new Error('No hay usuario logueado');
        }

        const allowedUpdates = ['name'];
        const filteredUpdates = {};
        
        for (const key of allowedUpdates) {
            if (updates[key] !== undefined) {
                filteredUpdates[key] = updates[key];
            }
        }

        await db.updateUser(this.currentUser.email, filteredUpdates);
        
        this.currentUser = { ...this.currentUser, ...filteredUpdates };
        localStorage.setItem('talkentai_user', JSON.stringify(this.currentUser));
        
        return this.currentUser;
    }

    async updateLevel(newLevel) {
        if (!this.currentUser) {
            throw new Error('No hay usuario logueado');
        }

        const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1'];
        
        if (!validLevels.includes(newLevel)) {
            throw new Error('Nivel no válido');
        }

        const currentIndex = validLevels.indexOf(this.currentUser.level);
        const newIndex = validLevels.indexOf(newLevel);
        
        if (newIndex < currentIndex) {
            throw new Error('No puedes volver a un nivel inferior');
        }

        await db.updateUser(this.currentUser.email, { level: newLevel });
        
        this.currentUser.level = newLevel;
        localStorage.setItem('talkentai_user', JSON.stringify(this.currentUser));
        
        return this.currentUser;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('talkentai_user');
        showScreen('login-screen');
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'hash_' + Math.abs(hash).toString(16) + '_' + password.length;
    }

    calculateStreak(lastActivity) {
        if (!lastActivity) return 1;
        
        const lastDate = new Date(lastActivity);
        const today = new Date();
        const diffTime = today - lastDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            return this.currentUser?.streak || 1;
        } else if (diffDays === 1) {
            return (this.currentUser?.streak || 0) + 1;
        } else {
            return 1;
        }
    }

    async deleteAccount() {
        if (!this.currentUser) {
            throw new Error('No hay usuario logueado');
        }

        await db.deleteUser(this.currentUser.email);
        
        this.logout();
        
        return true;
    }
}

const auth = new Auth();

async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;

    if (!name || !email || !password || !confirm) {
        showToast('Por favor completa todos los campos', 'error');
        return;
    }

    if (password !== confirm) {
        showToast('Las contraseñas no coinciden', 'error');
        return;
    }

    if (password.length < 8) {
        showToast('La contraseña debe tener al menos 8 caracteres', 'error');
        return;
    }

    try {
        showLoading();
        await auth.register(name, email, password);
        showToast('¡Cuenta creada exitosamente!', 'success');
        showDashboard();
    } catch (error) {
        showToast(error.message, 'error');
    } finally {
        hideLoading();
    }
}

async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showToast('Por favor completa todos los campos', 'error');
        return;
    }

    try {
        showLoading();
        await auth.login(email, password);
        showToast('¡Bienvenido de nuevo!', 'success');
        showDashboard();
    } catch (error) {
        showToast(error.message, 'error');
    } finally {
        hideLoading();
    }
}

async function handleForgotPassword(event) {
    event.preventDefault();
    
    const email = document.getElementById('forgot-email').value;

    if (!email) {
        showToast('Por favor ingresa tu correo electrónico', 'error');
        return;
    }

    try {
        showLoading();
        
        const user = await db.getUser(email.toLowerCase().trim());
        
        if (!user) {
            showToast('El correo electrónico no está registrado', 'error');
            return;
        }

        showToast('Código de recuperación enviado (simulado)', 'success');
        showChangePasswordScreen();
    } catch (error) {
        showToast(error.message, 'error');
    } finally {
        hideLoading();
    }
}

async function handleChangePassword(event) {
    event.preventDefault();
    
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-new-password').value;

    if (!newPassword || !confirmPassword) {
        showToast('Por favor completa todos los campos', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showToast('Las contraseñas no coinciden', 'error');
        return;
    }

    if (newPassword.length < 8) {
        showToast('La contraseña debe tener al menos 8 caracteres', 'error');
        return;
    }

    try {
        showLoading();
        
        const email = document.getElementById('forgot-email').value;
        await auth.resetPassword(email, newPassword);
        
        showToast('Contraseña cambiada exitosamente', 'success');
        showLogin();
    } catch (error) {
        showToast(error.message, 'error');
    } finally {
        hideLoading();
    }
}

async function handleProfileUpdate(event) {
    event.preventDefault();
    
    const name = document.getElementById('profile-name-input')?.value;

    try {
        showLoading();
        await auth.updateProfile({ name });
        showToast('Perfil actualizado', 'success');
        updateUserUI();
    } catch (error) {
        showToast(error.message, 'error');
    } finally {
        hideLoading();
    }
}

function logout() {
    auth.logout();
    showToast('Sesión cerrada', 'info');
}

function showLogin() {
    hideAllScreens();
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('login-screen').classList.add('active');
    addAnimationToScreen('login-screen');
}

function showRegister() {
    hideAllScreens();
    document.getElementById('register-screen').classList.remove('hidden');
    document.getElementById('register-screen').classList.add('active');
    addAnimationToScreen('register-screen');
}

function showForgotPassword() {
    hideAllScreens();
    document.getElementById('forgot-screen').classList.remove('hidden');
    document.getElementById('forgot-screen').classList.add('active');
    addAnimationToScreen('forgot-screen');
}

function showChangePasswordScreen() {
    hideAllScreens();
    document.getElementById('change-password-screen').classList.remove('hidden');
    document.getElementById('change-password-screen').classList.add('active');
    addAnimationToScreen('change-password-screen');
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
}

if (typeof window !== 'undefined') {
    window.auth = auth;
    window.handleRegister = handleRegister;
    window.handleLogin = handleLogin;
    window.handleForgotPassword = handleForgotPassword;
    window.handleChangePassword = handleChangePassword;
    window.handleProfileUpdate = handleProfileUpdate;
    window.logout = logout;
    window.showLogin = showLogin;
    window.showRegister = showRegister;
    window.showForgotPassword = showForgotPassword;
    window.showChangePasswordScreen = showChangePasswordScreen;
    window.togglePassword = togglePassword;
}