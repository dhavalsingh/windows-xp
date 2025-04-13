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
            <p>This page is a WIP.</p>
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
            name: "About Me - Notepad",
            icon: "img/icons/notepad.png",
            content: `
Hey there!, I'm-
==============

Dhaval Singh.
=============

A self-taught developer with an interest in building using LLMs, Evals and Appsec.
----------------------------------------------------------------------------------

------------------------------------------------------------------------------------

✍🏻The Write Stuff: Why I Do It
------------------------------

These <a href="https://abeoharblog.wordpress.com/2017/07/01/kavita-ki-kahani-kavi-ki-jubani/">lines</a> written by Mr.Piyush Mishra capture the essence of "Why?" for me.
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1698142461041/5ZQeJ7rI5.jpeg" alt="Generated Image" style="width: 50%;">

It loses its beauty when translated but for non-Hindi speakers here it is

> I find peace in pouring words onto paper,
> I scream without making a sound…

------------------------------------------------------------------------------------

⚡About me
---------

I've been close to a computer since an early age, and have been passionate about it ever since.

I really liked to break stuff and explore the internal workings since 2015, and from that, I explored how to code myself, fast-forward to today, I work as a founding engineer at Seezo.io, a startup in the Appsec + AI space. I love working on LLMs, Evals and the intersection of Product & LLMs.

When I am not working, I can be found in the gym or playing Dota and if the weather's good, on a long walk.

------------------------------------------------------------------------------------

📨 Get in Touch
------------

I'm currently open to discussing and learning more about AI, Security and AI + Security :).
Let's get in touch and talk more.
            `
        },
        {
            id: "projects",
            name: "My Blog",
            icon: "img/icons/folder.png",
            content: `
            <h2>My Blog</h2>
            <p>Check out my blog where i write about AI, Evals, Software Development and more.</p>
            <a href="https://dsdev.in/" target="_blank">Dhaval Singh's Blog</a>
            <br>
            <br>
            <p>I also tweet a lot about AI, Evals and at times about my cat.</p>
            <p>Feel free to follow me on twitter!</p>
            <a href="https://x.com/Dhavalsingh7" target="_blank">Twitter</a>
            `
        },
        // {
        //     id: "resume",
        //     name: "Resume",
        //     icon: "img/icons/word.svg",
        //     content: `
        //         <h2>Resume</h2>
        //         <h3>Experience</h3>
        //         <div class="experience">
        //             <h4>Job Title - Company</h4>
        //             <p class="date">January 2020 - Present</p>
        //             <p>Description of responsibilities and achievements...</p>
        //         </div>
        //         <div class="experience">
        //             <h4>Previous Role - Previous Company</h4>
        //             <p class="date">June 2018 - December 2019</p>
        //             <p>Description of responsibilities and achievements...</p>
        //         </div>
        //         <h3>Education</h3>
        //         <div class="education">
        //             <h4>Degree Name - Institution</h4>
        //             <p class="date">2014 - 2018</p>
        //             <p>Details about your education...</p>
        //         </div>
        //     `
        // },
        {
            id: "contact",
            name: "Contact Me",
            icon: "img/icons/email.png",
            content: `
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me through the following channels:</p>
                <p>Best way to reach me is via twitter DMs.</p>
                <ul>
                    <li>Twitter: <a href="https://x.com/Dhavalsingh7" target="_blank">x.com/Dhavalsingh7</a></li>
                    <li>Email: dhavalsingh19@gmail.com</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/dhaval-singh-502b79161/" target="_blank">linkedin.com/in/dhaval-singh-502b79161/</a></li>
                    <li>GitHub: <a href="https://github.com/dhavalsingh" target="_blank">github.com/dhavalsingh</a></li>
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
                    <a href="https://github.com/dhavalsingh" target="_blank" class="browser-link">
                        <img src="img/icons/github.png">
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dhaval-singh-502b79161/" target="_blank" class="browser-link">
                        <img src="img/icons/linkedin.png">
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://x.com/Dhavalsingh7" target="_blank" class="browser-link">
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
                <p>Built with vanilla HTML, CSS, and JavaScript, this site demonstrates my creativity and attention to detail and majority of the code was written by Claude Code.</p>
                <p>Feel free to explore by double-clicking on the desktop icons or using the start menu.</p>
                <br>
                <p>The code for this website is open source and can be found on <a href="https://github.com/dhavalsingh/windows-xp" target="_blank">GitHub</a>.</p>
                <p>© ${new Date().getFullYear()} - Dhaval Singh</p>
            `
        },
        {
            name: "AI Shiz",
            icon: "img/icons/tools.png",
            id: "skills",
            content: `
                <h2>AI Shiz</h2>
                <div class="ai-tools-container">
                    <div class="tool-category">
                        <h3>Most Used AI Tools</h3>
                        <ul>
                            <li><strong>AI Chat:</strong> ChatGPT</li>
                            <li><strong>AI Code Editor:</strong> Cursor</li>
                            <li><strong>Most Used LLMs in Cursor:</strong> Claude 3.5 & Gemini-2.5-pro</li>
                        </ul>
                        <p>I use these tools daily to get my work done.</p>
                        <li><strong>Experimenting with Claude Code:</strong> This whole website was built by Claude Code.</li>
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
                <p>This Recycle Bin contains all my ideas that are trash :P</p>
            `
        }
    ]
};