// Configuration for the portfolio
const CONFIG = {
    // User details
    user: {
        name: "Your Name",
        title: "Web Developer",
        avatar: "img/user.png"
    },
    
    // Desktop icons - add or remove as needed
    desktopIcons: [
        {
            id: "my-computer",
            name: "My Computer",
            icon: "img/icons/my-computer.png",
            content: `
                <h2>My Computer</h2>
                <div class="computer-info">
                    <div class="system-info">
                        <h3>System Information</h3>
                        <p><strong>OS:</strong> Windows XP Professional</p>
                        <p><strong>Owner:</strong> Dhaval Singh</p>
                        <p><strong>Computer:</strong> WebDev Machine</p>
                        <p><strong>Processor:</strong> Brain CPU @ 4.0 GHz</p>
                        <p><strong>Memory:</strong> Unlimited Ideas</p>
                    </div>
                    <div class="drives">
                        <h3>Drives</h3>
                        <div class="drive-item">
                            <img src="img/icons/drive.png" alt="C Drive">
                            <span>C: [Portfolio]</span>
                        </div>
                        <div class="drive-item">
                            <img src="img/icons/drive.png" alt="D Drive">
                            <span>D: [Projects]</span>
                        </div>
                        <div class="drive-item">
                            <img src="img/icons/drive.png" alt="CD Drive">
                            <span>E: [Skills]</span>
                        </div>
                    </div>
                </div>
                <div class="system-tasks">
                    <h3>System Tasks</h3>
                    <ul>
                        <li>View system information</li>
                        <li>Add or remove programs</li>
                        <li>Change settings</li>
                    </ul>
                </div>
            `
        },
        {
            id: "about-me",
            name: "About Me",
            icon: "img/icons/notepad.png",
            content: `
                <h2>About Me</h2>
                <p>Welcome to my Windows XP portfolio! I am a web developer with expertise in...</p>
                <p>Replace this text with your own introduction.</p>
                <h3>Skills</h3>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <!-- Add more skills here -->
                </ul>
            `
        },
        {
            id: "projects",
            name: "My Projects",
            icon: "img/icons/folder.png",
            content: `
                <h2>My Projects</h2>
                <div class="project">
                    <h3>Project 1</h3>
                    <p>Description of project 1...</p>
                    <a href="https://example.com" target="_blank">View Project</a>
                </div>
                <div class="project">
                    <h3>Project 2</h3>
                    <p>Description of project 2...</p>
                    <a href="https://example.com" target="_blank">View Project</a>
                </div>
                <!-- Add more projects here -->
            `
        },
        {
            id: "resume",
            name: "Resume",
            icon: "img/icons/word.svg",
            content: `
                <h2>Resume</h2>
                <h3>Experience</h3>
                <div class="experience">
                    <h4>Job Title - Company</h4>
                    <p class="date">January 2020 - Present</p>
                    <p>Description of responsibilities and achievements...</p>
                </div>
                <div class="experience">
                    <h4>Previous Role - Previous Company</h4>
                    <p class="date">June 2018 - December 2019</p>
                    <p>Description of responsibilities and achievements...</p>
                </div>
                <h3>Education</h3>
                <div class="education">
                    <h4>Degree Name - Institution</h4>
                    <p class="date">2014 - 2018</p>
                    <p>Details about your education...</p>
                </div>
            `
        },
        {
            id: "contact",
            name: "Contact Me",
            icon: "img/icons/email.png",
            content: `
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me through the following channels:</p>
                <ul>
                    <li>Email: your.email@example.com</li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a></li>
                    <li>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></li>
                    <!-- Add more contact methods here -->
                </ul>
            `
        },
        {
            id: "internet-explorer",
            name: "Internet Explorer",
            icon: "img/icons/ie.png",
            content: `
                <h2>Links</h2>
                <div class="browser-links">
                    <a href="https://github.com/yourusername" target="_blank" class="browser-link">
                        <img src="img/icons/github.png">
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" class="browser-link">
                        <img src="img/icons/linkedin.png">
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" class="browser-link">
                        <img src="img/icons/twitter.png">
                        <span>Twitter</span>
                    </a>
                    <!-- Add more links here -->
                </div>
            `
        }
    ],
    
    // Start menu items - add or remove as needed
    startMenuItems: [
        {
            name: "About This Site",
            icon: "img/icons/info.png",
            id: "about-site",
            content: `
                <h2>About This Website</h2>
                <p>This portfolio website was designed to mimic the classic Windows XP operating system interface.</p>
                <p>Built with vanilla HTML, CSS, and JavaScript, this site demonstrates my creativity and attention to detail.</p>
                <p>Feel free to explore by double-clicking on the desktop icons or using the start menu.</p>
                <p>© ${new Date().getFullYear()} - Your Name</p>
            `
        },
        {
            name: "Skills",
            icon: "img/icons/tools.png",
            id: "skills",
            content: `
                <h2>My Skills</h2>
                <div class="skills-container">
                    <div class="skill-category">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3 & Sass</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Vue.js</li>
                            <!-- Add more skills here -->
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <!-- Add more skills here -->
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Other</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Responsive Design</li>
                            <li>UI/UX Principles</li>
                            <li>Agile Methodology</li>
                            <!-- Add more skills here -->
                        </ul>
                    </div>
                </div>
            `
        }
    ],
    
    // Start menu links for the right side
    startMenuLinks: [
        {
            name: "GitHub",
            icon: "img/icons/github.png",
            url: "https://github.com/yourusername"
        },
        {
            name: "LinkedIn",
            icon: "img/icons/linkedin.png",
            url: "https://linkedin.com/in/yourusername"
        },
        {
            name: "Twitter",
            icon: "img/icons/twitter.png",
            url: "https://twitter.com/yourusername"
        },
    ],
    
    // Special icons
    specialIcons: [
        {
            id: "recycle-bin",
            name: "Recycle Bin",
            icon: "img/icons/recycle-bin.png",
            position: "bottom-right",
            content: `
                <h2>Recycle Bin</h2>
                <div class="recycle-bin-content">
                    <div class="recycle-message">
                        <p>This Recycle Bin contains <strong>3</strong> deleted items (4.2 KB)</p>
                    </div>
                    <div class="recycled-items">
                        <div class="recycled-item">
                            <img src="img/icons/txt.png" alt="Text file">
                            <span>old_resume.txt</span>
                            <span class="item-size">1.2 KB</span>
                            <span class="delete-date">Deleted: Yesterday</span>
                        </div>
                        <div class="recycled-item">
                            <img src="img/icons/html.png" alt="HTML file">
                            <span>unused_code.html</span>
                            <span class="item-size">2.8 KB</span>
                            <span class="delete-date">Deleted: 2 days ago</span>
                        </div>
                        <div class="recycled-item">
                            <img src="img/icons/txt.png" alt="Text file">
                            <span>ideas.txt</span>
                            <span class="item-size">0.2 KB</span>
                            <span class="delete-date">Deleted: 3 days ago</span>
                        </div>
                    </div>
                    <div class="recycle-bin-tasks">
                        <h3>Recycle Bin Tasks</h3>
                        <ul>
                            <li>Empty the Recycle Bin</li>
                            <li>Restore all items</li>
                        </ul>
                    </div>
                </div>
            `
        }
    ]
};