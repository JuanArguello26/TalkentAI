const DB_PREFIX = 'talkentai_';

class Database {
    constructor() {
        this.dbName = 'TalkentAI_DB';
    }

    async init() {
        console.log('Database initialized successfully (localStorage)');
        return true;
    }

    _getKey(table, email) {
        return `${DB_PREFIX}${table}_${email}`;
    }

    async getUser(email) {
        const key = this._getKey('user', email);
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    async createUser(userData) {
        const key = this._getKey('user', userData.email);
        localStorage.setItem(key, JSON.stringify(userData));
        return userData;
    }

    async updateUser(email, updates) {
        const user = await this.getUser(email);
        if (!user) throw new Error('User not found');
        
        const updatedUser = { ...user, ...updates };
        const key = this._getKey('user', email);
        localStorage.setItem(key, JSON.stringify(updatedUser));
        return updatedUser;
    }

    async deleteUser(email) {
        const prefixes = ['user', 'progress', 'results', 'settings'];
        prefixes.forEach(prefix => {
            localStorage.removeItem(this._getKey(prefix, email));
        });
    }

    async saveProgress(progressData) {
        const key = this._getKey('progress', progressData.userEmail);
        let allProgress = JSON.parse(localStorage.getItem(key) || '[]');
        
        const existingIndex = allProgress.findIndex(p => 
            p.level === progressData.level && p.module === progressData.module
        );
        
        if (existingIndex >= 0) {
            progressData.id = allProgress[existingIndex].id;
            allProgress[existingIndex] = progressData;
        } else {
            progressData.id = Date.now();
            allProgress.push(progressData);
        }
        
        localStorage.setItem(key, JSON.stringify(allProgress));
        return progressData.id;
    }

    async getProgress(userEmail, level = null) {
        const key = this._getKey('progress', userEmail);
        let allProgress = JSON.parse(localStorage.getItem(key) || '[]');
        
        if (level) {
            allProgress = allProgress.filter(p => p.level === level);
        }
        
        return allProgress;
    }

    async saveResult(resultData) {
        const key = this._getKey('results', resultData.userEmail);
        let allResults = JSON.parse(localStorage.getItem(key) || '[]');
        
        resultData.id = Date.now();
        allResults.push(resultData);
        
        localStorage.setItem(key, JSON.stringify(allResults));
        return resultData.id;
    }

    async getResults(userEmail) {
        const key = this._getKey('results', userEmail);
        return JSON.parse(localStorage.getItem(key) || '[]');
    }

    async saveSettings(userEmail, settings) {
        const key = this._getKey('settings', userEmail);
        localStorage.setItem(key, JSON.stringify({ userEmail, ...settings }));
    }

    async getSettings(userEmail) {
        const key = this._getKey('settings', userEmail);
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }

    async getAllUserData(userEmail) {
        const user = await this.getUser(userEmail);
        const progress = await this.getProgress(userEmail);
        const results = await this.getResults(userEmail);
        const settings = await this.getSettings(userEmail);
        
        return { user, progress, results, settings };
    }
}

const db = new Database();

async function initializeDB() {
    await db.init();
}

if (typeof window !== 'undefined') {
    window.db = db;
    window.initializeDB = initializeDB;
}