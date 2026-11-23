import React, { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Layers3, Trophy, GraduationCap, ExternalLink, FileText,
  Sparkles, MapPin, CheckCircle2
} from "lucide-react";

const profile = {
  name: "Vinotha G",
  role: "Aspiring Software Engineer",
  tagline: "I build practical, user-focused software with Java, Spring Boot and React.",
  college: "Karpagam Institute of Technology",
  degree: "B.E. Computer Science and Engineering",
  period: "September 2024 – August 2028",
  cgpa: "9.04",
  github: "https://github.com/vinotha-ganesan",
  linkedin: "https://www.linkedin.com/in/vinotha-g-ab217a412",
  leetcode: "https://leetcode.com/u/vinotha_G/"
};

const skills = [
  { title: "Programming", items: ["Java", "C++", "JavaScript"] },
  { title: "Backend", items: ["Spring Boot", "REST APIs", "JWT Authentication"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "Vite"] },
  { title: "Database & Core", items: ["MySQL", "SQL", "DBMS", "OOP", "Data Structures & Algorithms"] }
];

const projects = [
  {
    number: "01",
    name: "Digital Asset Management System",
    category: "Full-stack web application",
    description: "A centralized platform for managing company digital assets, including documents, images and videos, with role-based access and secure authentication.",
    stack: ["Java 17", "Spring Boot 3", "React", "MySQL", "JWT"],
    points: ["Admin and user workflows", "Asset upload and management", "Secure JWT-based authentication"],
    link: "https://github.com/vinotha-ganesan/dams-3.0",
    label: "View repository",
    icon: <Layers3 size={21} />
  },
  {
    number: "02",
    name: "CJACK – CPR Simulation",
    category: "Healthcare technology · IoT",
    description: "A CPR training and simulation concept that combines a React interface with sensor-based feedback to support practical CPR learning.",
    stack: ["React", "IoT", "MAX30102", "FSR"],
    points: ["Sensor-assisted feedback concept", "Interactive CPR simulation interface"],
    link: "https://github.com/vinotha-ganesan",
    label: "Explore GitHub",
    icon: <Code2 size={21} />
  },
  {
    number: "03",
    name: "EcoClean – Smart Waste Management",
    category: "AI · Sustainability",
    description: "A smart waste-management concept using AI and computer vision with GIS and a React interface to support more effective waste handling.",
    stack: ["AI", "Computer Vision", "GIS", "React"],
    points: ["AI-assisted waste identification concept", "Location-aware waste management approach"],
    link: "https://github.com/vinotha-ganesan",
    label: "Explore GitHub",
    icon: <Database size={21} />
  }
];

const achievements = [
  { title: "2nd Prize – Best Social Impact", event: "TSM TECHNOVA 2026 · National AI Innovation Challenge", detail: "Thiagarajar School of Management, Madurai · ₹30,000" },
  { title: "1st Prize", event: "Vision to Venture 2.0", detail: "IEEE SSN · Chennai · August 2026" },
  { title: "1st Prize", event: "Technomind 2026", detail: "Karpagam Institute of Technology" },
  { title: "2nd Prize", event: "QUEENATHON 2026", detail: "Dhaanish ITech · March 2026" },
  { title: "Semi-Finalist", event: "G. D. Naidu Innovation Challenge 2026", detail: "Innovation and problem-solving competition" },
  { title: "Academic Excellence", event: "Department of Computer Science and Engineering", detail: "1st Rank – 3rd semester · 2nd Rank – 2nd semester" }
];

const navItems = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Achievements", "#achievements"], ["Contact", "#contact"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">V.</span><span>Vinotha<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            <h1>Building useful<br /><span>things with code.</span></h1>
            <p className="hero-intro">Hi, I'm <strong>{profile.name}</strong> — a Computer Science Engineering student and aspiring software engineer focused on building reliable, user-friendly applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowDown size={16} /></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="profile-card">
              <div className="card-topline"><span>DEVELOPER PROFILE</span><span className="card-live"><span /> AVAILABLE</span></div>
              <div className="avatar">VG</div>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
              <div className="profile-divider" />
              <div className="profile-fact"><GraduationCap size={17} /><span>{profile.college}</span></div>
              <div className="profile-fact"><MapPin size={17} /><span>Coimbatore, Tamil Nadu, India</span></div>
              <div className="profile-fact"><Sparkles size={17} /><span>Java · Full-stack development · DSA</span></div>
              <div className="cgpa-block"><div><small>ACADEMIC CGPA</small><strong>{profile.cgpa}<span> / 10</span></strong></div><span className="cgpa-star">✳</span></div>
            </div>
            <div className="floating-note"><span className="note-icon"><Trophy size={16} /></span><span><strong>National recognition</strong><small>TSM TECHNOVA 2026 · 2nd Prize</small></span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading"><span className="section-kicker">01 / ABOUT</span><h2>A little about <em>me.</em></h2></div>
          <div className="about-grid">
            <div className="about-lead"><p className="large-copy">Curious by nature. <span>Builder by choice.</span></p></div>
            <div className="about-body">
              <p>I'm pursuing a {profile.degree} at {profile.college}. I enjoy turning ideas into working applications and strengthening my fundamentals through problem-solving and hands-on development.</p>
              <p>My current focus is Java-based backend development, React interfaces, database design and writing clean, maintainable code. I like learning by building projects that solve practical problems.</p>
              <div className="education-card"><div className="education-icon"><GraduationCap size={20} /></div><div><strong>{profile.degree}</strong><span>{profile.college}</span><small>{profile.period} · CGPA {profile.cgpa}/10</small></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading"><span className="section-kicker">02 / TOOLKIT</span><h2>Tools I work <em>with.</em></h2><p className="section-description">Technologies and fundamentals I use to design, develop and improve software.</p></div>
            <div className="skills-grid">
              {skills.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-number">0{i + 1}</div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading heading-inline"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects with <em>purpose.</em></h2></div><span className="project-count">03 PROJECTS</span></div>
          <div className="projects-list">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-index">{project.number}</div>
              <div className="project-main"><div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><ul>{project.points.map(point => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <div className="project-side"><div className="project-icon">{project.icon}</div><a href={project.link} target="_blank" rel="noreferrer">{project.label} <ArrowUpRight size={16} /></a></div>
            </article>)}
          </div>
        </section>

        <section className="achievements-section" id="achievements">
          <div className="section-wrap">
            <div className="section-heading"><span className="section-kicker">04 / MILESTONES</span><h2>Progress worth <em>sharing.</em></h2><p className="section-description">A few milestones from competitions, innovation events and academics.</p></div>
            <div className="achievement-grid">
              {achievements.map((item, i) => <article className="achievement-card" key={item.title + item.event}><div className="achievement-top"><span>0{i + 1}</span><Trophy size={18} /></div><h3>{item.title}</h3><strong>{item.event}</strong><p>{item.detail}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div><span className="section-kicker">05 / CONTACT</span><h2>Have an opportunity<br />or an idea? <em>Let's talk.</em></h2><p>I'm interested in software development internships, collaborative projects and opportunities to learn by building.</p></div>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={19} /></span><div><small>CONNECT ON LINKEDIN</small><strong>LinkedIn profile</strong></div><ArrowUpRight size={17} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={19} /></span><div><small>VIEW MY CODE</small><strong>GitHub profile</strong></div><ArrowUpRight size={17} /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><span><Code2 size={19} /></span><div><small>PROBLEM SOLVING</small><strong>LeetCode profile</strong></div><ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">V.</span><span>Vinotha<span className="brand-dot">.</span></span></a><span>Designed & built by Vinotha G</span><span>© {new Date().getFullYear()} · All rights reserved</span></footer>
    </div>
  );
}

export default App;