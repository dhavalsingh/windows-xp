/**
 * Window.js
 * Handles window management:
 * - Creating windows
 * - Managing active window state
 * - Window controls (minimize, maximize, close)
 * - Dragging windows
 */

class WindowManager {
    constructor() {
        this.windows = [];
        this.template = document.getElementById('window-template');
        this.zIndex = 100;
        this.init();
    }

    init() {
        // Set up global click handler to manage active window
        document.addEventListener('mousedown', (e) => {
            const windowElement = e.target.closest('.window');
            if (windowElement) {
                this.activateWindow(windowElement);
            }
        });
    }

    createWindow(id, title, content, icon) {
        // Clone the template
        const newWindow = this.template.cloneNode(true);
        newWindow.id = `window-${id}`;
        newWindow.dataset.id = id;
        newWindow.classList.remove('hidden');
        
        // Set window title
        const titleElement = newWindow.querySelector('.window-title');
        titleElement.textContent = title;
        
        // Set window content
        const contentElement = newWindow.querySelector('.window-content');
        contentElement.innerHTML = content;
        
        // Position the window
        const offset = this.windows.length * 30;
        newWindow.style.left = `${50 + offset}px`;
        newWindow.style.top = `${50 + offset}px`;
        newWindow.style.width = '600px';
        newWindow.style.height = '400px';
        
        // Add window to the DOM
        document.body.appendChild(newWindow);
        
        // Set up event listeners
        this.setupWindowControls(newWindow);
        this.setupDragging(newWindow);
        
        // Add to taskbar
        taskbar.addTaskbarItem(id, title, icon);
        
        // Activate the window
        this.activateWindow(newWindow);
        
        // Add to our windows array
        this.windows.push(newWindow);
        
        return newWindow;
    }
    
    activateWindow(windowElement) {
        // Deactivate all windows
        document.querySelectorAll('.window').forEach(window => {
            window.classList.remove('active');
            window.style.zIndex = 10;
        });
        
        // Update taskbar
        taskbar.updateTaskbarItems(windowElement.dataset.id);
        
        // Activate this window
        windowElement.classList.add('active');
        windowElement.style.zIndex = ++this.zIndex;
    }
    
    setupWindowControls(windowElement) {
        const closeBtn = windowElement.querySelector('.close');
        const minimizeBtn = windowElement.querySelector('.minimize');
        const maximizeBtn = windowElement.querySelector('.maximize');
        
        closeBtn.addEventListener('click', () => {
            this.closeWindow(windowElement);
        });
        
        minimizeBtn.addEventListener('click', () => {
            this.minimizeWindow(windowElement);
        });
        
        maximizeBtn.addEventListener('click', () => {
            this.maximizeWindow(windowElement);
        });
    }
    
    closeWindow(windowElement) {
        const id = windowElement.dataset.id;
        
        // Remove from DOM
        windowElement.remove();
        
        // Remove from windows array
        this.windows = this.windows.filter(window => window !== windowElement);
        
        // Remove from taskbar
        taskbar.removeTaskbarItem(id);
    }
    
    minimizeWindow(windowElement) {
        windowElement.classList.add('hidden');
    }
    
    maximizeWindow(windowElement) {
        // Toggle between maximized and restored state
        if (windowElement.classList.contains('maximized')) {
            windowElement.classList.remove('maximized');
            windowElement.style.top = windowElement.dataset.prevTop;
            windowElement.style.left = windowElement.dataset.prevLeft;
            windowElement.style.width = windowElement.dataset.prevWidth;
            windowElement.style.height = windowElement.dataset.prevHeight;
        } else {
            // Save previous dimensions
            windowElement.dataset.prevTop = windowElement.style.top;
            windowElement.dataset.prevLeft = windowElement.style.left;
            windowElement.dataset.prevWidth = windowElement.style.width;
            windowElement.dataset.prevHeight = windowElement.style.height;
            
            // Maximize
            windowElement.classList.add('maximized');
            windowElement.style.top = '0';
            windowElement.style.left = '0';
            windowElement.style.width = '100%';
            windowElement.style.height = `calc(100% - 30px)`;
        }
    }
    
    setupDragging(windowElement) {
        const header = windowElement.querySelector('.window-header');
        let isDragging = false;
        let offsetX, offsetY;
        
        header.addEventListener('mousedown', (e) => {
            // Don't drag if clicking on a control button
            if (e.target.closest('.window-controls')) return;
            
            // Don't drag if maximized
            if (windowElement.classList.contains('maximized')) return;
            
            isDragging = true;
            offsetX = e.clientX - windowElement.getBoundingClientRect().left;
            offsetY = e.clientY - windowElement.getBoundingClientRect().top;
            
            // Activate the window
            this.activateWindow(windowElement);
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            
            windowElement.style.left = `${x}px`;
            windowElement.style.top = `${y}px`;
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
    
    getWindowById(id) {
        return document.querySelector(`.window[data-id="${id}"]`);
    }
    
    showWindow(id) {
        const windowElement = this.getWindowById(id);
        if (windowElement) {
            windowElement.classList.remove('hidden');
            this.activateWindow(windowElement);
        }
    }
}