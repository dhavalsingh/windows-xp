# Windows XP Portfolio

A personal portfolio website that mimics the Windows XP operating system interface. This project uses pure HTML, CSS, and JavaScript to create a nostalgic and unique way to showcase your work and information.

## Features

- Authentic Windows XP look and feel
- Interactive desktop with draggable windows
- Double-click to open applications
- Working taskbar with start menu
- Responsive design
- Easy to customize with your personal information

## Getting Started

1. Clone or download this repository
2. Customize the content in `js/config.js` with your personal information
3. Add your own icons to the `img/icons` directory
4. Open `index.html` in your browser to see your Windows XP portfolio!

## Customization

### Updating Content

The main content of the portfolio is configured in `js/config.js`. You can easily update:

- Your name and title
- Desktop icons and their content
- Start menu items
- Skills, projects, and other information

### Adding New Windows/Applications

To add a new window/application to your portfolio:

1. Add a new entry in the `desktopIcons` array in `config.js`:

```javascript
{
    id: "unique-id",
    name: "Display Name",
    icon: "path/to/icon.png",
    content: `
        <h2>Title</h2>
        <p>Your content here...</p>
    `
}
```

2. Or add a new entry in the `startMenuItems` array to add it to the Start menu.

### Customizing Appearance

- Modify the CSS files in the `css` directory to change colors, sizes, etc.
- Replace the wallpaper image (`img/xp-wallpaper.jpg`) with your preferred background

## Structure

- `index.html` - Main HTML structure
- `css/` - Stylesheet files
  - `styles.css` - Global styles
  - `desktop.css` - Desktop and icon styles
  - `taskbar.css` - Taskbar and start menu styles
  - `window.css` - Window styles
- `js/` - JavaScript files
  - `config.js` - Configuration and content
  - `app.js` - Main application entry point
  - `desktop.js` - Desktop functionality
  - `window.js` - Window management
  - `taskbar.js` - Taskbar functionality
- `img/` - Images and icons

## Adding More Features

You can extend this portfolio by adding more Windows XP-like features:

- Right-click context menus
- Window resize functionality (already partially implemented)
- Minimize/maximize animations
- More detailed start menu with categories
- Desktop icon grid alignment

## License

This project is open source and available under the MIT License.

## Acknowledgements

- Inspired by the classic Windows XP operating system
- Built with vanilla HTML, CSS, and JavaScript