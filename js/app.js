/**
 * App.js
 * Main application entry point.
 * Initializes all components.
 */

// Initialize components
let windowManager;
let desktop;
let taskbar;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize in correct order
    windowManager = new WindowManager();
    desktop = new Desktop();
    taskbar = new Taskbar();
    
    // Prevent default context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});