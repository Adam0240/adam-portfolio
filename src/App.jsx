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
                    <p>
                        Featured work will go here, including software engineering,
                        Unreal-based development, CI/CD, multiplayer systems, and technical
                        lab projects.
                    </p>
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
                </section>
            </main>
        </div>
    )
}

export default App