/**
 * Taskbar.js
 * Handles taskbar-related functionality:
 * - Clock display
 * - Start menu
 * - Window taskbar items
 */

class Taskbar {
    constructor() {
        this.taskbarElement = document.getElementById('taskbar');
        this.startButtonElement = document.getElementById('start-button');
        this.timeDisplayElement = document.getElementById('time-display');
        this.startMenuElement = document.getElementById('start-menu');
        this.trayElement = document.querySelector('.taskbar-tray');
        this.taskbarItems = [];
        this.init();
    }

    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
        this.setupStartMenu();
    }

    updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeStr = `${hours}:${minutes}`;
        this.timeDisplayElement.textContent = timeStr;
    }

    setupStartMenu() {
        // Set up start button click event
        this.startButtonElement.addEventListener('click', () => {
            this.toggleStartMenu();
        });

        // Close start menu when clicking elsewhere
        document.addEventListener('click', (e) => {
            if (!this.startMenuElement.contains(e.target) && 
                !this.startButtonElement.contains(e.target)) {
                this.closeStartMenu();
            }
        });
        
        // Load start menu items
        this.loadStartMenuItems();
        
        // Load desktop icons directly into start menu
        this.loadDesktopItems();
    }

    loadStartMenuItems() {
        const startMenuItemsElement = this.startMenuElement.querySelector('.start-menu-items');
        const startMenuLinksElement = this.startMenuElement.querySelector('.start-menu-links');
        
        // Set user name
        this.startMenuElement.querySelector('.user-info span').textContent = CONFIG.user.name;
        
        // Add items to the left side
        CONFIG.startMenuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'start-menu-item';
            menuItem.dataset.id = item.id;
            
            menuItem.innerHTML = `
                <img src="${item.icon}" alt="${item.name}">
                <span>${item.name}</span>
            `;
            
            menuItem.addEventListener('click', () => {
                this.openStartMenuItem(item.id);
                this.closeStartMenu();
            });
            
            startMenuItemsElement.appendChild(menuItem);
        });
        
        // Add links to the right side
        if (CONFIG.startMenuLinks) {
            CONFIG.startMenuLinks.forEach(link => {
                const linkItem = document.createElement('div');
                linkItem.className = 'start-menu-link';
                
                linkItem.innerHTML = `
                    <img src="${link.icon}" alt="${link.name}">
                    <span>${link.name}</span>
                `;
                
                linkItem.addEventListener('click', () => {
                    window.open(link.url, '_blank');
                    this.closeStartMenu();
                });
                
                startMenuLinksElement.appendChild(linkItem);
            });
        }
        
        // Set up logoff and shutdown buttons
        const logoffButton = this.startMenuElement.querySelector('.system-button.logoff');
        const shutdownButton = this.startMenuElement.querySelector('.system-button.shutdown');
        
        logoffButton.addEventListener('click', () => {
            this.closeStartMenu();
            // Redirect to startup screen
            window.location.href = "startup.html";
        });
        
        shutdownButton.addEventListener('click', () => {
            this.closeStartMenu();
            const confirmShutdown = confirm('Are you sure you want to close this page?');
            if (confirmShutdown) {
                document.body.innerHTML = `
                    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'Tahoma', sans-serif;">
                        <div style="font-size: 24px; margin-bottom: 20px;">It is now safe to turn off your computer.</div>
                        <a href="${window.location.href}" style="color: #fff; text-decoration: underline; margin-top: 30px;">Restart</a>
                    </div>
                `;
            }
        });
    }

    toggleStartMenu() {
        this.startMenuElement.classList.toggle('hidden');
        this.startButtonElement.classList.toggle('active');
    }

    closeStartMenu() {
        this.startMenuElement.classList.add('hidden');
        this.startButtonElement.classList.remove('active');
    }
    
    loadDesktopItems() {
        const desktopItemsElement = this.startMenuElement.querySelector('.start-menu-desktop-items');
        
        // Add all desktop icons directly to the start menu
        CONFIG.desktopIcons.forEach(icon => {
            const desktopItem = document.createElement('div');
            desktopItem.className = 'desktop-menu-item';
            desktopItem.dataset.id = icon.id;
            
            desktopItem.innerHTML = `
                <img src="${icon.icon}" alt="${icon.name}">
                <span>${icon.name}</span>
            `;
            
            desktopItem.addEventListener('click', () => {
                this.openStartMenuItem(icon.id);
                this.closeStartMenu();
            });
            
            desktopItemsElement.appendChild(desktopItem);
        });
    }

    openStartMenuItem(id) {
        // First look in start menu items
        let item = CONFIG.startMenuItems.find(item => item.id === id);
        
        // If not found, look in desktop icons
        if (!item) {
            item = CONFIG.desktopIcons.find(icon => icon.id === id);
            if (!item) return;
        }

        // Check if window is already open
        let existingWindow = document.querySelector(`.window[data-id="${id}"]`);
        if (existingWindow) {
            windowManager.activateWindow(existingWindow);
            return;
        }

        // Create new window
        windowManager.createWindow(item.id, item.name, item.content, item.icon);
    }

    addTaskbarItem(id, title, icon) {
        const taskbarItem = document.createElement('div');
        taskbarItem.className = 'taskbar-item';
        taskbarItem.dataset.id = id;
        
        taskbarItem.innerHTML = `
            <img src="${icon}" alt="${title}">
            <span>${title}</span>
        `;
        
        taskbarItem.addEventListener('click', () => {
            const windowElement = windowManager.getWindowById(id);
            if (windowElement.classList.contains('hidden')) {
                windowManager.showWindow(id);
            } else if (windowElement.classList.contains('active')) {
                windowManager.minimizeWindow(windowElement);
            } else {
                windowManager.activateWindow(windowElement);
            }
        });
        
        this.taskbarElement.insertBefore(taskbarItem, this.trayElement);
        this.taskbarItems.push(taskbarItem);
    }

    updateTaskbarItems(activeId) {
        this.taskbarItems.forEach(item => {
            if (item.dataset.id === activeId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    removeTaskbarItem(id) {
        const item = this.taskbarItems.find(item => item.dataset.id === id);
        if (item) {
            item.remove();
            this.taskbarItems = this.taskbarItems.filter(item => item.dataset.id !== id);
        }
    }
}