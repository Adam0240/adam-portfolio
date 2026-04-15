import './App.css'
import fpsLobbyImage from './assets/fps_lobby_image.png'
import fpsGameplayImage from './assets/fps_gameplay_image.png'
import fpsRecording from './assets/FPSGame_Recording.mp4'

function App() {
    return (
        <div className="site-shell">
            <nav className="site-nav">
                <div className="nav-name">Adam Abbadusky</div>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <header className="hero">
                <p className="eyebrow">Software Engineer • STEAM Specialist • Interactive 3D Developer</p>

                <h1>Adam Abbadusky</h1>

                <p className="intro">
                    I build scalable software systems, CI/CD pipelines, and advanced
                    STEAM technology solutions that connect software engineering with
                    real-world innovation.
                </p>
            </header>

            <main className="content-sections">
                <section id="about" className="content-section">
                    <h2>About</h2>
                    <p>
                        I am a software developer and STEAM Specialist with experience
                        building technical projects that span software engineering,
                        interactive systems, automation, and hands-on lab technology.
                    </p>
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
                                Unity • C# • LAN Multiplayer • Real-Time Sync • Windows Build Deployment
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
                            <h3>HoloMat Interactive STEAM Interface</h3>
                            <p>
                                An experimental Python-based interactive control surface
                                that connected a projector, webcam touch input,
                                networking, and OctoPrint-based 3D printer control into
                                one physical interface.
                            </p>
                            <p>
                                This project focused on real-world hardware and software
                                integration, rapid prototyping, and interactive technical
                                problem solving.
                            </p>
                            <p className="project-stack">
                                Python • Networking • OctoPrint • Webcam Input • Projection System
                            </p>
                        </article>

                        <article className="project-card">
                            <h3>Pokémon C++ Zork Adventure</h3>
                            <p>
                                A text-based adventure game built in C++ that reimagined
                                the Zork-style formula with a Pokémon theme, room
                                navigation, game logic, and custom interactive systems.
                            </p>
                            <p>
                                This project reflects both my early C++ foundation and
                                the software design lessons I later strengthened through
                                refactoring and systems work.
                            </p>
                            <p className="project-stack">
                                C++ • Game Logic • Object-Oriented Design • Console Application
                            </p>
                        </article>
                    </div>
                </section>

                <section id="skills" className="content-section">
                    <h2>Skills</h2>
                    <p>
                        This section will highlight languages, tools, frameworks, and
                        platforms.
                    </p>
                </section>

                <section id="contact" className="content-section">
                    <h2>Contact</h2>
                    <p>
                        This section will include GitHub, LinkedIn, email, and other
                        professional links.
                    </p>
                    <p>abbaduskya@gmail.com</p>
                </section>
            </main>
        </div>
    )
}

export default App