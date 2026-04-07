let currentScreen = null;
let currentLevelDetail = null;
let currentModuleDetail = null;

document.addEventListener('DOMContentLoaded', async () => {
    await initializeApp();
});

async function initializeApp() {
    showLoading();
    
    try {
        await db.init();
        
        setTimeout(() => {
            hideLoadingScreen();
            
            if (auth.isLoggedIn()) {
                showDashboard();
            } else {
                showLogin();
            }
        }, 1500);
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
}

function showScreen(screenId) {
    hideAllScreens();
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.remove('hidden');
        screen.classList.add('active');
    }
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
    showScreen('dashboard');
    addAnimationToScreen('dashboard');
}

async function updateDashboardStats() {
    const user = auth.getCurrentUser();
    if (!user) return;
    
    const results = await db.getResults(user.email);
    const exercisesCompleted = results.length;
    const testsPassed = results.filter(r => r.passed).length;
    
    const totalExercises = Object.keys(exercisesData).length;
    const overallProgress = Math.round((exercisesCompleted / totalExercises) * 100);
    
    document.getElementById('exercises-completed').textContent = exercisesCompleted;
    document.getElementById('tests-passed').textContent = testsPassed;
    document.getElementById('current-level').textContent = user.level || 'A1';
    document.getElementById('overall-progress').textContent = `${overallProgress}%`;
    
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (overallProgress / 100) * circumference;
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