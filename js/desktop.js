/**
 * Desktop.js
 * Handles all desktop-related functionality:
 * - Loading desktop icons
 * - Handling icon clicks
 */

class Desktop {
    constructor() {
        this.desktopElement = document.getElementById('desktop');
        this.selectedIcon = null;
        this.init();
    }

    init() {
        this.loadIcons();
        this.setupEventListeners();
    }

    loadIcons() {
        // Load regular desktop icons
        CONFIG.desktopIcons.forEach(icon => {
            const iconElement = document.createElement('div');
            iconElement.className = 'desktop-icon';
            iconElement.dataset.id = icon.id;
            
            iconElement.innerHTML = `
                <img src="${icon.icon}" alt="${icon.name}">
                <div class="desktop-icon-name">${icon.name}</div>
            `;
            
            this.desktopElement.appendChild(iconElement);
        });
        
        // Load special icons (if any)
        if (CONFIG.specialIcons) {
            CONFIG.specialIcons.forEach(icon => {
                const iconElement = document.createElement('div');
                iconElement.className = 'desktop-icon';
                iconElement.dataset.id = icon.id;
                
                // Add position-based class
                if (icon.position) {
                    iconElement.classList.add(`position-${icon.position}`);
                }
                
                iconElement.innerHTML = `
                    <img src="${icon.icon}" alt="${icon.name}">
                    <div class="desktop-icon-name">${icon.name}</div>
                `;
                
                this.desktopElement.appendChild(iconElement);
            });
        }
    }

    setupEventListeners() {
        // Handle icon click (selection)
        this.desktopElement.addEventListener('click', (e) => {
            const iconElement = e.target.closest('.desktop-icon');
            if (!iconElement) {
                this.clearSelection();
                return;
            }
            
            this.selectIcon(iconElement);
        });

        // Handle double click on icons
        this.desktopElement.addEventListener('dblclick', (e) => {
            const iconElement = e.target.closest('.desktop-icon');
            if (!iconElement) return;
            
            const iconId = iconElement.dataset.id;
            this.openWindow(iconId);
        });

        // Clear selection when clicking on desktop
        document.addEventListener('click', (e) => {
            if (e.target === this.desktopElement) {
                this.clearSelection();
            }
        });
    }

    selectIcon(iconElement) {
        if (this.selectedIcon) {
            this.selectedIcon.classList.remove('selected');
        }
        iconElement.classList.add('selected');
        this.selectedIcon = iconElement;
    }

    clearSelection() {
        if (this.selectedIcon) {
            this.selectedIcon.classList.remove('selected');
            this.selectedIcon = null;
        }
    }

    openWindow(iconId) {
        // First check regular desktop icons
        let icon = CONFIG.desktopIcons.find(icon => icon.id === iconId);
        
        // If not found, check special icons
        if (!icon && CONFIG.specialIcons) {
            icon = CONFIG.specialIcons.find(icon => icon.id === iconId);
        }
        
        if (!icon) return;

        // Check if window is already open
        let existingWindow = document.querySelector(`.window[data-id="${iconId}"]`);
        if (existingWindow) {
            windowManager.activateWindow(existingWindow);
            return;
        }

        // Create new window
        windowManager.createWindow(icon.id, icon.name, icon.content, icon.icon);
    }
}