let currentScreen = null;
let currentLevelDetail = null;
let currentModuleDetail = null;

function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        const size = Math.random();
        if (size > 0.9) {
            star.className = 'star large';
        } else if (size > 0.7) {
            star.className = 'star';
        } else {
            star.className = 'star small';
        }
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function initMouseReactiveBackground() {
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let currentMouseX = 0, currentMouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        currentMouseX = (e.clientX / window.innerWidth - 0.5) * 30;
        currentMouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    });
    
    function animate() {
        targetX += (currentMouseX - targetX) * 0.03;
        targetY += (currentMouseY - targetY) * 0.03;
        
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.8;
            shape.style.transform = `translate(${targetX * speed}px, ${targetY * speed}px)`;
        });
        
        const stars = document.querySelectorAll('.star');
        stars.forEach((star) => {
            const depth = parseFloat(star.style.top) / 100 || 0.5;
            star.style.transform = `translate(${targetX * depth * 3}px, ${targetY * depth * 3}px)`;
        });
        
        const bodyBefore = document.querySelector('body::before');
        if (bodyBefore) {
            document.body.style.setProperty('--mouse-x', `${targetX}px`);
            document.body.style.setProperty('--mouse-y', `${targetY}px`);
        }
        
        const nebula = document.querySelector('#app::before');
        
        document.querySelectorAll('.screen.active').forEach(screen => {
            const bg = screen.querySelector('[class*="background"]');
        });
        
        requestAnimationFrame(animate);
    }
    animate();
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded');
    createStars();
    initMouseReactiveBackground();
    try {
        await initializeApp();
    } catch (e) {
        console.error('Init error:', e);
    }
});

async function initializeApp() {
    showLoading();
    
    try {
        await db.init();
        await auth.init();
        
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        hideLoadingScreen();
        
        if (auth.isLoggedIn()) {
            showDashboard();
        } else {
            showLogin();
        }
    } catch (error) {
        console.error('Error initializing app:', error);
        showToast('Error al inicializar la aplicación', 'error');
        hideLoadingScreen();
        showLogin();
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

function showLoading() {
    document.getElementById('loading-screen').style.display = 'flex';
    document.getElementById('loading-screen').style.opacity = '1';
}

function hideLoading() {
    setTimeout(() => {
        hideLoadingScreen();
    }, 500);
}

function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });
    
    const authScreens = document.querySelectorAll('.auth-screen');
    authScreens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });
}

function showScreen(screenId) {
    const screen = document.getElementById(screenId);
    if (!screen) return;
    
    document.getElementById('auth-container')?.classList.add('hidden');
    document.querySelectorAll('.auth-screen').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    
    screen.classList.remove('hidden');
    screen.classList.add('active');
    currentScreen = screenId;
}

function addAnimationToScreen(screenId) {
    const screen = document.getElementById(screenId);
    const animatedElements = screen.querySelectorAll('.fade-in, .fade-in-up, .fade-in-down, .slide-in-up');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
}

async function showDashboard() {
    updateUserUI();
    await renderLevels();
    await updateDashboardStats();
    initTipsCarousel();
    showScreen('dashboard');
    addAnimationToScreen('dashboard');
}

const tipsData = [
    {
        icon: '🎯',
        title: 'Practica diariamente',
        content: 'Dedica al menos 15 minutos diarios al inglés. La consistencia es más efectiva que estudiar horas largas una vez por semana.'
    },
    {
        icon: '👂',
        title: 'Escucha activamente',
        content: 'Escucha canciones, podcasts o viendo películas en inglés con subtítulos. Esto mejora tu comprensión auditiva y pronunciación.'
    },
    {
        icon: '🗣️',
        title: 'Habla en voz alta',
        content: 'No tengas miedo de speak aloud. Practica explicando temas en voz alta, incluso si estás solo. Puedes grabarte y escucharte.'
    },
    {
        icon: '📝',
        title: 'Escribe cada día',
        content: 'Mantén un diario en inglés. Escribir te ayuda a consolidar vocabulario y gramática de manera práctica y personal.'
    },
    {
        icon: '🔄',
        title: 'Repasa con espaciado',
        content: 'Usa la técnica de repetición espaciada. Revisa lo aprendido en intervalos: 1 día, 3 días, 1 semana, 2 semanas.'
    },
    {
        icon: '💡',
        title: 'Aprende frases, no palabras',
        content: 'En lugar de memorizar palabras sueltas, aprende frases completas. "How are you?" es más útil que solo "How".'
    },
    {
        icon: '🎬',
        title: 'Contenido que te guste',
        content: 'Mira series o películas sobre temas que te apasionen. El interés hace que el aprendizaje sea más natural y divertido.'
    },
    {
        icon: '🤝',
        title: 'No temas equivocarte',
        content: 'Los errores son parte del aprendizaje. No te avergüences de hablar con.acento o cometer errores. ¡Es normal!'
    }
];

let currentTipIndex = 0;

function initTipsCarousel() {
    const carousel = document.getElementById('tips-carousel');
    if (!carousel) return;
    
    const shuffled = [...tipsData].sort(() => Math.random() - 0.5);
    
    carousel.innerHTML = shuffled.map(tip => `
        <div class="tip-card">
            <span class="tip-icon">${tip.icon}</span>
            <h4 class="tip-title">${tip.title}</h4>
            <p class="tip-content">${tip.content}</p>
        </div>
    `).join('');
    
    let currentCard = 0;
    const cards = carousel.querySelectorAll('.tip-card');
    
    if (cards.length > 1) {
        setInterval(() => {
            currentCard = (currentCard + 1) % cards.length;
            cards.forEach((card, index) => {
                if (index === currentCard) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0.5';
                    card.style.transform = 'scale(0.95)';
                }
            });
        }, 4000);
    }
}

async function updateDashboardStats() {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const results = await db.getResults(user.email);
    const exercisesCompleted = results.filter(r => r.type === 'exercise').length;
    const testsPassed = results.filter(r => r.passed && r.type === 'test').length;
    
    const totalExercises = Object.keys(window.exercisesData || {}).length || 50;
    const overallProgress = Math.round((exercisesCompleted / totalExercises) * 100);
    
    document.getElementById('exercises-completed').textContent = exercisesCompleted;
    document.getElementById('tests-passed').textContent = testsPassed;
    document.getElementById('current-level').textContent = user.level || 'A1';
    document.getElementById('overall-progress').textContent = `${Math.min(overallProgress, 100)}%`;
    
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (Math.min(overallProgress, 100) / 100) * circumference;
    document.getElementById('overall-progress-ring').style.strokeDashoffset = offset;
}

function updateUserUI() {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const name = user.name || 'Usuario';
    const initial = name.charAt(0).toUpperCase();
    
    document.getElementById('user-avatar').textContent = initial;
    document.getElementById('user-name').textContent = name;
    document.getElementById('user-level').textContent = `Nivel: ${user.level || 'A1'}`;
    document.getElementById('welcome-name').textContent = name.split(' ')[0];
    document.getElementById('profile-avatar-text').textContent = initial;
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-email').textContent = user.email;
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
    
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) {
        overlay.classList.toggle('active');
    }
}

function goBack() {
    if (currentScreen === 'module-detail') {
        showLevelDetail(currentLevelDetail);
    } else if (currentScreen === 'level-detail' || currentScreen === 'results-screen') {
        showDashboard();
    } else if (currentScreen === 'exercise-screen') {
        exitExercise();
    } else {
        showDashboard();
    }
}

function showProfile() {
    updateProfileScreen();
    showScreen('profile-screen');
}

async function updateProfileScreen() {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const results = await db.getResults(user.email);
    
    document.getElementById('profile-exercises').textContent = results.length;
    document.getElementById('profile-tests').textContent = results.filter(r => r.passed).length;
    
    const avgScore = results.length > 0 
        ? Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length) 
        : 0;
    document.getElementById('profile-avg').textContent = `${avgScore}%`;
    document.getElementById('profile-streak').textContent = user.streak || 0;
}

function showSettings() {
    loadSettings();
    showScreen('settings-screen');
}

async function loadSettings() {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const settings = await db.getSettings(user.email);
    
    if (settings.difficulty) {
        document.getElementById('difficulty-setting').value = settings.difficulty;
    }
    if (settings.hints !== undefined) {
        document.getElementById('hints-setting').checked = settings.hints;
    }
    if (settings.sounds !== undefined) {
        document.getElementById('sounds-setting').checked = settings.sounds;
    }
}

async function saveSetting(key, value) {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const currentSettings = await db.getSettings(user.email);
    await db.saveSettings(user.email, { ...currentSettings, [key]: value });
    
    showToast('Configuración guardada', 'success');
}

function showSupport() {
    showScreen('support-screen');
}

function showChangePasswordForm() {
    showChangePasswordScreen();
}

function showExportData() {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    db.getAllUserData(user.email).then(data => {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `talkentai-data-${user.email}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        showToast('Datos exportados exitosamente', 'success');
    });
}

function confirmDeleteAccount() {
    const confirmed = confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.');
    
    if (confirmed) {
        const doubleConfirm = confirm('¿REALMENTE quieres eliminar tu cuenta? Todos tus datos se perderán.');
        
        if (doubleConfirm) {
            auth.deleteAccount().then(() => {
                showToast('Cuenta eliminada', 'info');
                showLogin();
            }).catch(error => {
                showToast(error.message, 'error');
            });
        }
    }
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toast-appear 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

document.addEventListener('click', (event) => {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.getElementById('user-dropdown');
    
    if (userMenu && !userMenu.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

document.querySelector('.user-avatar')?.addEventListener('click', (event) => {
    event.stopPropagation();
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('active');
});

document.getElementById('login-form')?.addEventListener('submit', handleLogin);
document.getElementById('register-form')?.addEventListener('submit', handleRegister);
document.getElementById('forgot-form')?.addEventListener('submit', handleForgotPassword);
document.getElementById('change-password-form')?.addEventListener('submit', handleChangePassword);

if (typeof window !== 'undefined') {
    window.showDashboard = showDashboard;
    window.toggleMenu = toggleMenu;
    window.goBack = goBack;
    window.showProfile = showProfile;
    window.showSettings = showSettings;
    window.showSupport = showSupport;
    window.showChangePasswordForm = showChangePasswordForm;
    window.showExportData = showExportData;
    window.confirmDeleteAccount = confirmDeleteAccount;
    window.toggleFAQ = toggleFAQ;
    window.showToast = showToast;
    window.showScreen = showScreen;
}