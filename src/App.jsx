import './App.css'
import fpsLobbyImage from './assets/fps_lobby_image.png'
import fpsGameplayImage from './assets/fps_gameplay_image.png'
import fpsRecording from './assets/FPSGame_Recording.mp4'
import mobileAppDockerImage from './assets/MA_Docker.png'
import mobileAppHomeImage from './assets/MobileApp_Home.png'
import mobileAppSwaggerImage from './assets/MA_SwaggerConnection.png'
import cppScreenshot1 from './assets/C++ Screenshot1.png'
import cppScreenshot2 from './assets/C++ Screenshot2.png'
import cppGameExe from './assets/AdamAC++Final_Arcadia.exe?url'

function App() {
    const experienceItems = [
        {
            title: 'STEAM Specialist',
            company: 'Aiken Technical College',
            dates: 'August 2021 - Present',
            location: 'Aiken, SC',
            achievements: [
                'Designed and implemented hands-on STEAM projects including 3D printing workflows, laser engraving systems, and interactive technology demonstrations.',
                'Developed and maintained technical systems used by students, including 3D printers, lab machines, and software tools.',
                'Built custom software solutions, including a Python-based interactive assistant capable of retrieving and displaying 3D models.',
                'Assisted students and faculty with troubleshooting hardware and software issues across a wide range of technologies.',
                'Managed and maintained over 100+ student laptops and lab systems.',
                'Led STEM outreach demonstrations, showcasing interactive projects and producing custom 3D-printed items for events.',
            ],
            technologies: [
                'Python',
                'OpenCV',
                'MediaPipe',
                'OctoPrint',
                '3D Printing',
                'Laser Engraving',
                'Windows Systems',
            ],
        },
        {
            title: 'Software Development Projects',
            company: 'Independent / Academic Projects',
            dates: 'June 2024 - Present',
            location: 'Aiken, SC',
            achievements: [
                'Developed a full-stack mobile application using Flutter with a .NET backend API and database integration.',
                'Built RESTful APIs using ASP.NET Core with Swagger documentation and Docker-based deployment.',
                'Implemented a multiplayer system for a text-based game, including networking, save-state logic, and real-time interaction.',
                'Created CI/CD pipelines using Jenkins to automate testing and deployment workflows.',
                'Refactored legacy codebases to improve stability, maintainability, and performance.',
            ],
            technologies: [
                'C#',
                'ASP.NET Core',
                'Flutter',
                'Docker',
                'PostgreSQL',
                'Jenkins',
                'GitHub',
            ],
        },
    ]

    const skillGroups = [
        {
            title: 'Languages',
            accentClass: 'skill-card-primary',
            tagClass: 'skill-tag-primary',
            skills: ['C++', 'C#', 'JavaScript', 'Python', 'Dart', 'SQL'],
        },
        {
            title: 'Frontend & Mobile',
            accentClass: 'skill-card-secondary',
            tagClass: 'skill-tag-secondary',
            skills: ['React', 'Vite', 'Flutter', 'Mobile UI', 'Cross-Platform Apps'],
        },
        {
            title: 'Backend & APIs',
            accentClass: 'skill-card-primary',
            tagClass: 'skill-tag-primary',
            skills: [
                'ASP.NET Core',
                'REST APIs',
                'Swagger',
                'Service Integration',
                'Authentication',
            ],
        },
        {
            title: 'Infrastructure & Data',
            accentClass: 'skill-card-accent',
            tagClass: 'skill-tag-accent',
            skills: ['Docker', 'PostgreSQL', 'MongoDB', 'GitHub', 'Vercel', 'CI/CD'],
        },
        {
            title: 'Game & Interactive Systems',
            accentClass: 'skill-card-secondary',
            tagClass: 'skill-tag-secondary',
            skills: [
                'Unreal Engine',
                'Unity',
                'Multiplayer Networking',
                'Game Logic',
                'Real-Time Systems',
            ],
        },
        {
            title: 'Technical Strengths',
            accentClass: 'skill-card-primary',
            tagClass: 'skill-tag-primary',
            skills: [
                'Full-Stack Development',
                'Refactoring Legacy Code',
                'Unit Testing',
                'Deployment Workflows',
                'STEAM Lab Tech',
            ],
        },
    ]

    return (
        <div className="site-shell">
            <nav className="site-nav">
                <div className="nav-inner">
                    <div className="nav-name">AA</div>

                     <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            <header className="hero">
                <p className="eyebrow">
                    Software Engineer | STEAM Specialist | Interactive 3D Developer
                </p>

                <h1>Adam Abbadusky</h1>

                <p className="intro">
                    I build real systems, including backend APIs, interactive
                    applications, and projects that connect software with physical
                    tech.
                </p>
            </header>

            <main className="content-sections">
                <section id="about" className="content-section">
                    <h2>About</h2>
                    <p>
                        I am a software developer and STEAM Specialist with
                        experience building full-stack applications, APIs, and
                        interactive systems that extend beyond traditional
                        software. My work focuses on creating complete,
                        functional systems that connect software with real-world
                        technology.
                    </p>
                    <p>
                        My experience includes developing backend APIs with
                        ASP.NET Core, building mobile applications with Flutter,
                        and creating real-time and multiplayer systems. I have
                        also worked on interactive projects involving computer
                        vision, automation, and 3D printing integration,
                        combining software engineering with hands-on technical
                        environments.
                    </p>
                    <p>
                        I graduated from Aiken Technical College with an
                        Associate degree in Computer Science with an emphasis in
                        Programming, and I am currently completing my
                        Bachelor&apos;s degree in Computer Engineering, expected
                        December 2026.
                    </p>
                </section>

                <section id="experience" className="content-section">
                    <h2>Experience</h2>

                    <div className="experience-list">
                        {experienceItems.map((item) => (
                            <article key={item.title} className="experience-card">
                                <div className="experience-header">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p className="experience-company">
                                            {item.company}
                                        </p>
                                    </div>

                                    <div className="experience-meta">
                                        <p>{item.dates}</p>
                                        <p>{item.location}</p>
                                    </div>
                                </div>

                                <div className="experience-body">
                                    <div>
                                        <h4>Key Achievements</h4>
                                        <ul className="experience-achievements">
                                            {item.achievements.map((achievement) => (
                                                <li key={achievement}>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Technologies Used</h4>
                                        <div className="experience-tech-list">
                                            {item.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="skill-tag skill-tag-primary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="projects" className="content-section">
                    <h2>Projects</h2>

                    <div className="project-grid">
                        <article className="project-card">
                            <img
                                src={fpsGameplayImage}
                                alt="Gameplay view of two connected players in the multiplayer FPS prototype"
                                className="project-image"
                            />

                            <h3>Multiplayer FPS Prototype</h3>

                            <p>
                                A Unity-based first-person shooter prototype featuring a
                                functional LAN multiplayer lobby, real-time player
                                synchronization, shared world state, custom map design,
                                and deployable Windows builds.
                            </p>

                            <p>
                                I built the core map, multiplayer functionality, player
                                systems, lobby flow, and major gameplay integration in a
                                3-person team project. The project was recently reopened
                                and revalidated to confirm multiplayer sessions still run
                                across connected clients.
                            </p>

                            <p className="project-stack">
                                Unity | C# | LAN Multiplayer | Real-Time Sync | Windows
                                Build Deployment
                            </p>

                            <div className="project-links">
                                <a
                                    href={fpsLobbyImage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Lobby Screenshot
                                </a>

                                <a
                                    href={fpsRecording}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    Watch Gameplay Demo
                                </a>

                                <a
                                    href="https://github.com/Adam0240/unity-multiplayer-fps-prototype"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Source Code
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <img
                                src={mobileAppHomeImage}
                                alt="Home screen of the WVUP mobile application"
                                className="project-image"
                            />

                            <h3>WVUP Mobile Application</h3>

                            <p>
                                A full-stack mobile application for West Virginia
                                University at Parkersburg that displays campus
                                information, news, events, cafeteria details, and
                                student-facing resources in one unified mobile
                                experience.
                            </p>

                            <p>
                                Built as a 3-person team project, this app was designed
                                to give WVUP students a practical mobile campus tool
                                backed by real data and services. My main contributions
                                included creating the core UI pages, setting up the
                                app&apos;s navigation structure, handling the backend and
                                database connection work, getting Swagger running for
                                endpoint testing, and connecting the Flutter frontend
                                to the API services.
                            </p>

                            <p className="project-stack">
                                Flutter | Dart | Mobile UI | REST API Integration |
                                ASP.NET Core | Swagger | Docker | PostgreSQL | Campus
                                Services
                            </p>

                            <div className="project-links">
                                <a
                                    href={mobileAppDockerImage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Docker Screenshot
                                </a>

                                <a
                                    href={mobileAppSwaggerImage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Swagger Screenshot
                                </a>

                                <a
                                    href="https://github.com/Adam0240/CS321"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Source Code
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <img
                                src={cppScreenshot1}
                                alt="Primary screenshot from the Pokemon C++ Zork Adventure game"
                                className="project-image project-image-large"
                            />

                            <h3>Pokemon C++ Zork Adventure</h3>
                            <p>
                                A text-based adventure game built in C++ that reimagined
                                the Zork-style formula with a Pokemon theme, room
                                navigation, game logic, and custom interactive systems.
                            </p>
                            <p>
                                This project reflects both my early C++ foundation and
                                the software design lessons I later strengthened through
                                refactoring and systems work.
                            </p>
                            <p className="project-stack">
                                C++ | Game Logic | Object-Oriented Design | Console
                                Application
                            </p>

                            <div className="project-links">
                                <a
                                    href={cppScreenshot2}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Code Screenshot
                                </a>

                                <a
                                    href={cppGameExe}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                    download
                                >
                                    Download Game EXE
                                </a>

                                <a
                                    href="https://github.com/Adam0240/Poke_Text_Adventure"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link-button"
                                >
                                    View Source Code
                                </a>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="skills" className="content-section">
                    <h2>Skills</h2>

                    <div className="skills-grid">
                        {skillGroups.map((group) => (
                            <article
                                key={group.title}
                                className={`skill-card ${group.accentClass}`}
                            >
                                <h3>{group.title}</h3>

                                <div className="skill-tag-list">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`skill-tag ${group.tagClass}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    <article className="skills-summary-card">
                        <h3>Professional Focus</h3>
                        <p>
                            My work combines software development with hands-on
                            technical support and education. As a STEAM
                            Specialist, I help students learn and apply new
                            technologies while also managing lab systems,
                            producing 3D prints and laser engravings, and
                            maintaining technical resources. Alongside this, I
                            build software projects that focus on real-world
                            functionality and complete system design.
                        </p>
                    </article>
                </section>

                <section id="contact" className="content-section">
                    <h2>Contact</h2>

                    <div className="contact-grid">
                        <article className="contact-card">
                            <h3>Email</h3>
                            <p>
                                Reach me directly for project opportunities,
                                collaboration, or technical roles.
                            </p>
                            <a
                                href="mailto:abbaduskya@gmail.com"
                                className="project-link-button"
                            >
                                abbaduskya@gmail.com
                            </a>
                        </article>

                        <article className="contact-card">
                            <h3>GitHub</h3>
                            <p>
                                Browse my repositories, project history, and code
                                samples.
                            </p>
                            <a
                                href="https://github.com/Adam0240"
                                target="_blank"
                                rel="noreferrer"
                                className="project-link-button"
                            >
                                github.com/Adam0240
                            </a>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
