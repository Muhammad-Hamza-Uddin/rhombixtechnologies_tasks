import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
    },
    {
      name: "ASP.NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Bootstrap 5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      name: "Git & GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  const projects = [
    {
      title: "Learning Hub",
      description:
        "An e-learning platform where students can access courses, watch educational videos, track their learning progress, and complete learning activities.",
      tech: "PHP • MySQL • HTML • CSS • JavaScript",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Student Registration Form",
      description:
        "A responsive student registration form developed using ReactJS with controlled components, useState, event handling, and modal output.",
      tech: "ReactJS • JavaScript • CSS",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Smart Counter App",
      description:
        "A ReactJS counter application with increment, decrement, reset, random number, even/odd status, and dynamic background functionality.",
      tech: "ReactJS • useState • CSS",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "College Event Management",
      description:
        "A web-based project designed to manage and organize college events with a simple and user-friendly interface.",
      tech: "HTML • CSS • JavaScript • PHP",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Tour Management System",
      description:
        "A tourism management project that helps users explore and manage tour-related information through an interactive website.",
      tech: "HTML • CSS • JavaScript • PHP • MySQL",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Student Admission System",
      description:
        "A student admission management system created to collect and manage student admission information.",
      tech: "ASP.NET Core • C# • MySQL",
      image:
        "https://cdn.targetx.in/fetch/2/01/100/blobid1625822780971.jpg",
      link: "#",
    },
  ];

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Hamza<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>

            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm{" "}
              <span>
                Muhammad
                <br />
                Hamza Uddin
              </span>
            </h1>

            <h2>Software Engineering Student & Web Developer</h2>

            <p className="hero-description">
              I am a passionate software engineering student and aspiring
              full-stack web developer. I enjoy building modern, responsive,
              and user-friendly web applications while continuously improving
              my programming and development skills.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View My Projects
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Muhammad-Hamza-Uddin"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-hamza-uddin-30b76a383/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* PROFILE */}
          <div className="hero-image-section">
            <div className="profile-card">
              <img
                src="/profile.png"
                alt="Muhammad Hamza Uddin"
                className="profile-image"
              />

              

              

              
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <div className="section-container">
          <p className="section-subtitle">GET TO KNOW ME</p>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <div className="about-content">
            <div className="about-text">
              <h3>Software Engineering Student & Web Developer</h3>

              <p>
                My name is Muhammad Hamza Uddin. I am a Software Engineering
                student with a strong interest in web development and
                programming.
              </p>

              <p>
                I enjoy creating modern and responsive websites and web
                applications. I have experience working with frontend
                technologies, backend development, databases, and modern
                development tools.
              </p>

              <p>
                I am continuously learning new technologies and improving my
                problem-solving skills to become a professional full-stack
                developer.
              </p>
            </div>

            <div className="about-info">
              <div className="info-box">
                <h4>Education</h4>
                <p>Software Engineering</p>
              </div>

              <div className="info-box">
                <h4>Role</h4>
                <p>Web Developer</p>
              </div>

              <div className="info-box">
                <h4>Location</h4>
                <p>Karachi, Pakistan</p>
              </div>

              <div className="info-box">
                <h4>Focus</h4>
                <p>Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <p className="section-subtitle">MY TECHNICAL ABILITIES</p>

          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                />

                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <div className="section-container">
          <p className="section-subtitle">MY RECENT WORK</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech}
                </div>

                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="experience" className="section">
  <h2 className="section-title">Experience</h2>

  <div className="experience-card">
    <h3>Fresher</h3>

    <p>
      I am a passionate Software Engineering student and aspiring Web
      Developer. I currently do not have professional work experience,
      but I have developed several academic and personal projects to
      gain practical experience in software and web development.
    </p>

    <p>
      I am continuously learning new technologies and looking for
      opportunities to apply my skills in a professional environment.
    </p>
  </div>
</section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="section">
        <div className="section-container">
          <p className="section-subtitle">MY JOURNEY</p>

          <h2 className="section-title">Achievements</h2>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>

              <h3>Tech Competitions</h3>

              <p>
                Participated in technology exhibitions and competitions to
                showcase software development projects.
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">💻</div>

              <h3>Project Development</h3>

              <p>
                Developed multiple academic and personal projects using
                frontend, backend, and database technologies.
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">📚</div>

              <h3>Continuous Learning</h3>

              <p>
                Continuously learning modern technologies and improving
                programming and software development skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <p className="section-subtitle">LET'S CONNECT</p>

          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>

          <p className="contact-description">
            Have a project idea or want to connect? Feel free to contact me.
            I would be happy to discuss new opportunities and projects.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">✉</div>

              <h3>Email</h3>

              <a href="mailto:uddinhamza19@gmail.com">
                uddinhamza19@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🔗</div>

              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/muhammad-hamza-uddin-30b76a383/"
                target="_blank"
                rel="noreferrer"
              >
                View My LinkedIn
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💻</div>

              <h3>GitHub</h3>

              <a
                href="https://github.com/Muhammad-Hamza-Uddin"
                target="_blank"
                rel="noreferrer"
              >
                View My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>
          © 2026 Muhammad Hamza Uddin. All Rights Reserved.
        </p>

        <p>Built with ReactJS</p>
      </footer>
    </div>
  );
}

export default App;