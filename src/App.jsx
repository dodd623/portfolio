import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily =
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    document.body.style.background = darkMode
      ? "linear-gradient(180deg, #020617 0%, #0f172a 100%)"
      : "linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)";
    document.body.style.color = darkMode ? "#e2e8f0" : "#0f172a";
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const theme = useMemo(
    () => ({
      pageText: darkMode ? "#e2e8f0" : "#0f172a",
      secondaryText: darkMode ? "#94a3b8" : "#475569",
      cardBg: darkMode ? "rgba(15, 23, 42, 0.72)" : "rgba(255, 255, 255, 0.78)",
      cardBorder: darkMode ? "rgba(148, 163, 184, 0.18)" : "rgba(15, 23, 42, 0.08)",
      navBg: darkMode ? "rgba(2, 6, 23, 0.72)" : "rgba(255, 255, 255, 0.75)",
      accent: "#3b82f6",
      shadow: darkMode
        ? "0 20px 60px rgba(0, 0, 0, 0.35)"
        : "0 20px 60px rgba(15, 23, 42, 0.10)",
      buttonText: "#ffffff",
      buttonSecondaryBg: darkMode ? "rgba(30, 41, 59, 0.72)" : "rgba(255, 255, 255, 0.82)",
      buttonSecondaryText: darkMode ? "#e2e8f0" : "#0f172a",
      tagBg: darkMode ? "rgba(59, 130, 246, 0.14)" : "rgba(59, 130, 246, 0.10)",
      sectionGlow: darkMode
        ? "radial-gradient(circle at top left, rgba(59,130,246,0.22), transparent 35%)"
        : "radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 35%)",
      strongText: darkMode ? "#f8fafc" : "#0f172a",
      panelText: darkMode ? "#e2e8f0" : "#1e293b",
    }),
    [darkMode]
  );

  const resumeLink = "/Devin_Dodd_Resume.pdf";
  const headshot = "/LinkedIn_PFP.png";

  const skills = [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "AI / ML",
      items: ["AI Applications", "NLP", "Workflow Automation", "Audio Processing"],
    },
    {
      title: "Frameworks & Tools",
      items: ["React", "Node.js", "OpenAI Whisper", "Git", "REST APIs", "VS Code"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL"],
    },
  ];

  const projects = [
    {
      title: "LucidScript",
      tag: "Flagship Project",
      image: "/LucidScript.png",
      description:
        "An AI-powered transcription and workflow automation tool built to transform spoken audio into structured, usable text through a practical end-to-end processing pipeline.",
      highlights: [
        "Whisper medium model",
        "Audio-to-text pipeline",
        "Workflow automation focus",
      ],
      featured: true,
      liveLink: "https://lucidscript.fly.dev/",
      codeLink: "https://github.com/dodd623/LucidScript",
    },
    {
  title: "Tile Wars",
  tag: "Playable Demo",
  image: "/TileWars.png",
  description:
    "A turn-based grid strategy game where players battle for territory, expand across the board, and outmaneuver opponents through tactical tile control. Follow the instructions on the home page to play the browser demo and experience the AI opponent in action.",
  highlights: [
    "Grid-based territory control",
    "AI opponent behavior",
    "Playable browser demo",
  ],
  featured: false,
  liveLink: "https://dodd623.itch.io/tile-wars",
  codeLink: "https://github.com/dodd623/tile-wars",
},
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      color: theme.pageText,
      position: "relative",
      overflowX: "hidden",
    },
    bgGlowTop: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: -2,
      background: theme.sectionGlow,
    },
    bgGlowCenter: {
      position: "fixed",
      top: "-140px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "42rem",
      height: "42rem",
      borderRadius: "999px",
      background: "rgba(37, 99, 235, 0.15)",
      filter: "blur(90px)",
      pointerEvents: "none",
      zIndex: -1,
    },
    container: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto",
    },
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      backdropFilter: "blur(18px)",
      background: theme.navBg,
      borderBottom: `1px solid ${theme.cardBorder}`,
    },
    navInner: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      flexDirection: isMobile ? "column" : "row",
      padding: "1rem 0",
      gap: "1rem",
    },
    navLinks: {
      display: "flex",
      gap: isMobile ? "1rem" : "1.25rem",
      flexWrap: "wrap",
      alignItems: "center",
      fontSize: isMobile ? "1rem" : "0.95rem",
    },
    link: {
      color: theme.secondaryText,
      textDecoration: "none",
      fontWeight: 500,
    },
    logo: {
      fontWeight: 800,
      letterSpacing: "0.08em",
      fontSize: "1.05rem",
      color: darkMode ? "#e2e8f0" : "#0f172a",
      textShadow: darkMode
        ? "0 0 18px rgba(59,130,246,0.18)"
        : "0 1px 0 rgba(255,255,255,0.65)",
    },
    toggleBtn: {
      border: `1px solid ${theme.cardBorder}`,
      background: theme.buttonSecondaryBg,
      color: theme.buttonSecondaryText,
      padding: "0.75rem 1rem",
      borderRadius: "16px",
      cursor: "pointer",
      fontWeight: 600,
      backdropFilter: "blur(12px)",
      alignSelf: isMobile ? "flex-start" : "auto",
    },
    hero: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
      gap: "2rem",
      alignItems: "center",
      minHeight: isMobile ? "auto" : "92vh",
      padding: isMobile ? "2rem 0 3rem" : "3rem 0 4rem",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.9rem",
      borderRadius: "999px",
      background: theme.tagBg,
      border: `1px solid ${theme.cardBorder}`,
      color: darkMode ? "#bfdbfe" : "#1d4ed8",
      fontWeight: 600,
      fontSize: "0.9rem",
      marginBottom: "1.5rem",
    },
    headshot: {
      width: isMobile ? "160px" : "180px",
      height: isMobile ? "160px" : "180px",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "center 25%",
      display: "block",
      border: "3px solid rgba(59,130,246,0.5)",
      boxShadow: "0 0 15px rgba(59,130,246,0.4)",
      flexShrink: 0,
    },
    heroTitle: {
      fontSize: isMobile ? "3.2rem" : "clamp(2.75rem, 6vw, 5rem)",
      lineHeight: 1,
      margin: 0,
      letterSpacing: "-0.04em",
      color: darkMode ? "#f8fafc" : "#0f172a",
      textShadow: darkMode
        ? "0 8px 30px rgba(59,130,246,0.12)"
        : "0 1px 0 rgba(255,255,255,0.75)",
    },
    heroSubtitle: {
      fontSize: isMobile ? "1rem" : "clamp(1.2rem, 2vw, 1.7rem)",
      marginTop: "1rem",
      marginBottom: "1rem",
      color: darkMode ? "#cbd5e1" : "#334155",
      fontWeight: 600,
    },
    heroText: {
      fontSize: isMobile ? "1rem" : "1.08rem",
      lineHeight: 1.8,
      maxWidth: "42rem",
      color: theme.secondaryText,
    },
    buttonRow: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginTop: "2rem",
      marginBottom: "1.5rem",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      background: theme.accent,
      color: theme.buttonText,
      textDecoration: "none",
      borderRadius: "18px",
      padding: "0.95rem 1.35rem",
      fontWeight: 700,
      boxShadow: "0 10px 30px rgba(59,130,246,0.25)",
    },
    secondaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.buttonSecondaryBg,
      color: theme.buttonSecondaryText,
      textDecoration: "none",
      borderRadius: "18px",
      padding: "0.95rem 1.35rem",
      fontWeight: 700,
      border: `1px solid ${theme.cardBorder}`,
      backdropFilter: "blur(12px)",
    },
    socialRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.85rem",
      marginTop: "1rem",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    socialLink: {
      color: theme.pageText,
      textDecoration: "none",
      padding: "0.8rem 1rem",
      borderRadius: "16px",
      border: `1px solid ${theme.cardBorder}`,
      background: theme.buttonSecondaryBg,
      backdropFilter: "blur(12px)",
      fontWeight: 500,
    },
    glassCard: {
      background: theme.cardBg,
      border: `1px solid ${theme.cardBorder}`,
      borderRadius: "32px",
      boxShadow: theme.shadow,
      backdropFilter: "blur(18px)",
    },
    sideCard: {
      padding: "2rem",
      position: "relative",
    },
    section: {
      padding: isMobile ? "3.5rem 0" : "5rem 0",
    },
    sectionEyebrow: {
      color: theme.accent,
      textTransform: "uppercase",
      letterSpacing: "0.25em",
      fontWeight: 700,
      fontSize: "0.82rem",
      marginBottom: "0.7rem",
      textAlign: isMobile ? "center" : "left",
    },
    sectionTitle: {
      fontSize: isMobile ? "2.2rem" : "clamp(2rem, 3vw, 3rem)",
      margin: 0,
      letterSpacing: "-0.03em",
      textAlign: isMobile ? "center" : "left",
    },
    sectionText: {
      color: theme.secondaryText,
      lineHeight: 1.8,
      fontSize: "1rem",
      textAlign: isMobile ? "center" : "left",
    },
    projectGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.25fr 0.75fr",
      gap: "1.5rem",
      marginTop: "2rem",
    },
    projectCard: {
      padding: "2rem",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
    },
    featureCard: {
      transform: isMobile ? "none" : "scale(1.03)",
      border: `1px solid ${
        darkMode ? "rgba(59,130,246,0.35)" : "rgba(59,130,246,0.22)"
      }`,
      boxShadow: darkMode
        ? "0 24px 70px rgba(37, 99, 235, 0.20)"
        : "0 24px 70px rgba(37, 99, 235, 0.12)",
    },
    cardTag: {
      display: "inline-block",
      padding: "0.45rem 0.8rem",
      borderRadius: "999px",
      background: theme.tagBg,
      color: darkMode ? "#bfdbfe" : "#1d4ed8",
      fontWeight: 700,
      fontSize: "0.85rem",
      marginBottom: "1rem",
      border: `1px solid ${theme.cardBorder}`,
      alignSelf: isMobile ? "center" : "flex-start",
    },
    cardTitle: {
      fontSize: "1.7rem",
      margin: "0 0 1rem",
      textAlign: isMobile ? "center" : "left",
    },
    highlightRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.7rem",
      marginTop: "1.5rem",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    chip: {
      borderRadius: "999px",
      border: `1px solid ${theme.cardBorder}`,
      padding: "0.5rem 0.8rem",
      fontSize: "0.9rem",
      color: theme.pageText,
      background: darkMode ? "rgba(2, 6, 23, 0.22)" : "rgba(255,255,255,0.65)",
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem",
    },
    skillCard: {
      padding: "1.5rem",
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
      gap: "2rem",
      alignItems: "start",
      marginTop: "1.5rem",
    },
    aboutTextBlock: {
      color: theme.secondaryText,
      lineHeight: 1.9,
      fontSize: "1rem",
      textAlign: isMobile ? "center" : "left",
    },
    aboutLink: {
      color: darkMode ? "#93c5fd" : "#2563eb",
      textDecoration: "none",
      fontWeight: 600,
    },
    sideStack: {
      display: "grid",
      gap: "1rem",
    },
    miniPanel: {
      padding: "1.5rem",
      borderRadius: "24px",
      border: `1px solid ${theme.cardBorder}`,
      background: darkMode ? "rgba(2, 6, 23, 0.24)" : "rgba(255,255,255,0.68)",
      color: theme.panelText,
      textAlign: "center",
    },
    resumeCard: {
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      flexDirection: isMobile ? "column" : "row",
      gap: "1.5rem",
      flexWrap: "wrap",
      textAlign: isMobile ? "center" : "left",
    },
    contactWrap: {
      padding: "2rem",
      borderRadius: "32px",
      border: `1px solid ${theme.cardBorder}`,
      background: darkMode
        ? "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(2,6,23,0.18), rgba(6,182,212,0.08))"
        : "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(255,255,255,0.72), rgba(6,182,212,0.06))",
      boxShadow: theme.shadow,
      backdropFilter: "blur(18px)",
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
      gap: "1rem",
      marginTop: "2rem",
    },
    contactCard: {
      textDecoration: "none",
      color: theme.pageText,
      padding: "1.35rem",
      borderRadius: "24px",
      border: `1px solid ${theme.cardBorder}`,
      background: darkMode ? "rgba(2, 6, 23, 0.26)" : "rgba(255,255,255,0.72)",
      textAlign: "center",
    },
    footerSpace: {
      height: "3rem",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.bgGlowTop} />
      <div style={styles.bgGlowCenter} />

      <header style={styles.nav}>
        <div style={styles.navInner}>
          <a href="#home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/DJD-logo.png"
              alt="DJD Logo"
              style={{
                height: isMobile ? "32px" : "40px",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 6px rgba(59,130,246,0.35))",
              }}
            />
          </a>

          <nav style={styles.navLinks}>
            <a href="#projects" style={styles.link}>Projects</a>
            <a href="#skills" style={styles.link}>Skills</a>
            <a href="#about" style={styles.link}>About</a>
            <a href="#resume" style={styles.link}>Resume</a>
            <a href="#contact" style={styles.link}>Contact</a>
          </nav>

          <button style={styles.toggleBtn} onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main style={styles.container}>
        <section style={styles.hero} id="home">
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <div style={styles.badge}>✦ AI-Focused Builder</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "1rem" : "1rem",
                marginBottom: "1rem",
                textAlign: isMobile ? "center" : "left",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <img src={headshot} alt="Devin J Dodd" style={styles.headshot} />
              <h1 style={styles.heroTitle}>Devin J Dodd</h1>
            </div>

            <div style={styles.heroSubtitle}>
              Software Developer focused on AI, Automation, and Real-World Systems
            </div>
            <p style={styles.heroText}>
              I build AI-powered tools that automate real workflows, reduce manual work, and turn messy processes into clean, usable systems.
              <span style={{ display: "block", marginTop: "0.8rem" }}>
                Built and deployed live AI applications used in real-world workflows.
              </span>
            </p>

            <div style={styles.buttonRow}>
              <a href="#projects" style={styles.primaryButton}>View Projects →</a>
              <a href="#contact" style={styles.secondaryButton}>Contact Me</a>
            </div>

            <div style={styles.socialRow}>
              <a
                href="https://github.com/dodd623/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/devindodd/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                LinkedIn
              </a>
              <a href="mailto:dodd623@gmail.com" style={styles.socialLink}>
                dodd623@gmail.com
              </a>
            </div>
          </div>

          <div style={{ ...styles.glassCard, ...styles.sideCard }}>
            <div
              style={{
                color: theme.secondaryText,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              Portfolio Snapshot
            </div>

            <h2
              style={{
                ...styles.sectionTitle,
                marginTop: 0,
                marginBottom: "1.5rem",
                fontSize: isMobile ? "2rem" : "1.8rem",
                color: theme.strongText,
                textAlign: "center",
              }}
            >
              Focused on practical AI systems
            </h2>

            <div style={styles.sideStack}>
              <div style={styles.miniPanel}>Building usable AI-powered tools</div>
              <div style={styles.miniPanel}>Bridging software engineering and automation</div>
              <div style={styles.miniPanel}>Designing systems with real-world value</div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <div style={styles.miniPanel}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: theme.strongText }}>2</div>
                <div style={{ color: theme.secondaryText }}>Featured projects</div>
              </div>
              <div style={styles.miniPanel}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: theme.strongText }}>2026</div>
                <div style={{ color: theme.secondaryText }}>B.S. expected</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" style={styles.section}>
          <div style={styles.sectionEyebrow}>Featured Projects</div>
          <h2 style={styles.sectionTitle}>Work that reflects how I build</h2>
          <p
            style={{
              ...styles.sectionText,
              maxWidth: "48rem",
              marginTop: "1rem",
              marginInline: isMobile ? "auto" : "0",
            }}
          >
            A growing collection of projects focused on AI, usability, and systems that solve real problems.
          </p>

          <div style={styles.projectGrid}>
            {projects.map((project) => (
              <div
                key={project.title}
                style={{
                  ...styles.glassCard,
                  ...styles.projectCard,
                  ...(project.featured ? styles.featureCard : {}),
                  boxShadow: project.featured
                    ? darkMode
                      ? "0 24px 70px rgba(37, 99, 235, 0.20)"
                      : "0 24px 70px rgba(37, 99, 235, 0.12)"
                    : darkMode
                    ? "0 12px 32px rgba(0,0,0,0.22)"
                    : "0 12px 32px rgba(15,23,42,0.08)",
                }}
              >

                {/* ✅ IMAGE GOES HERE */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: isMobile ? "140px" : "180px",
                      objectFit: "contain",
                      background: "rgba(255,255,255,0.03)",
                      padding: "1rem",
                      borderRadius: "12px",
                      marginBottom: "1rem",
                    }}
                  />
                )}

                <div style={styles.cardTag}>{project.tag}</div>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={{ ...styles.sectionText, textAlign: isMobile ? "center" : "left" }}>
                  {project.description}
                </p>

                <div style={styles.highlightRow}>
                  {project.highlights.map((item) => (
                    <span key={item} style={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>

                {(project.featured || project.liveLink || project.codeLink) && (
                  <div style={{ ...styles.buttonRow, marginTop: "1.5rem" }}>
  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      style={styles.primaryButton}
    >
      {project.title === "Tile Wars" ? "Play Game →" : "View Project →"}
    </a>
  )}

  {project.codeLink && (
    <a
      href={project.codeLink}
      target="_blank"
      rel="noreferrer"
      style={styles.secondaryButton}
    >
      View Code
    </a>
  )}
</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <div style={styles.sectionEyebrow}>Skills</div>
          <h2 style={styles.sectionTitle}>The tools behind the work</h2>

          <div style={styles.skillsGrid}>
            {skills.map((group) => (
              <div key={group.title} style={{ ...styles.glassCard, ...styles.skillCard }}>
                <h3 style={{ marginTop: 0, marginBottom: "1rem", fontSize: "1.6rem", textAlign: "center" }}>
                  {group.title}
                </h3>
                <div style={styles.highlightRow}>
                  {group.items.map((item) => (
                    <span key={item} style={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.sectionEyebrow}>About Me</div>
          <h2 style={styles.sectionTitle}>Why I build what I build</h2>

          <div style={styles.aboutGrid}>
            <div style={styles.aboutTextBlock}>
              <p>
                I’m Devin J Dodd, a software developer focused on AI, automation, and intelligent
                systems. I’m currently pursuing my Bachelor of Science in Computer Science at Full
                Sail University, with an expected graduation date of July 2026. Before that, I
                completed my Associate of Science in Computer Science in 2025.
              </p>

              <p>
                My path into tech started in 2022 when I explored a web development bootcamp
                through Virginia Tech after spending time at Virginia Western Community College
                figuring out what direction I wanted to take. That experience made it clear that
                coding was something I wanted to pursue more seriously.
              </p>

              <p>
                I originally entered school through Game Development, but I switched into Computer
                Science so I could build a broader and more flexible technical foundation. Along the
                way, I also built the website for{" "}
                <a
                  href="https://www.framilysupportnetwork.org/"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.aboutLink}
                >
                  Framily Support Network
                </a>
                , which gave me hands-on experience creating something for real users with real
                expectations.
              </p>

              <p>
                My interest in AI goes back to seeing Iron Man in 2008 and becoming fascinated with
                the idea of having a system like J.A.R.V.I.S. What started as a dream eventually
                became a real technical goal. Now, I want to build AI that handles the small,
                tedious, time-consuming tasks that pull people away from the things that make life
                meaningful.
              </p>
            </div>

            <div style={{ ...styles.glassCard, padding: "1.5rem" }}>
              <div style={styles.sideStack}>
                <div style={styles.miniPanel}>
                  <div
                    style={{
                      color: theme.secondaryText,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: "0.75rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    Current Focus
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1.08rem", color: theme.strongText }}>
                    AI-powered software that improves real-world workflows
                  </div>
                </div>

                <div style={styles.miniPanel}>
                  <div
                    style={{
                      color: theme.secondaryText,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: "0.75rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    Education
                  </div>
                  <div style={{ fontWeight: 700, color: theme.strongText }}>
                    B.S. Computer Science — Full Sail University
                  </div>
                  <div style={{ color: theme.secondaryText, marginTop: "0.25rem" }}>Expected July 2026</div>
                  <div style={{ fontWeight: 700, marginTop: "1rem", color: theme.strongText }}>
                    A.S. Computer Science
                  </div>
                  <div style={{ color: theme.secondaryText, marginTop: "0.25rem" }}>Completed 2025</div>
                </div>

                <div style={styles.miniPanel}>
                  <div
                    style={{
                      color: theme.secondaryText,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: "0.75rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    What drives me
                  </div>
                  <div style={{ color: theme.secondaryText, lineHeight: 1.8 }}>
                    I want to create technology that gives people back time, energy, and mental
                    space so they can focus more on creativity, learning, connection, and the
                    things that matter most.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" style={styles.section}>
          <div style={{ ...styles.glassCard, ...styles.resumeCard }}>
            <div>
              <div style={styles.sectionEyebrow}>Resume</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? "2rem" : "2.2rem" }}>
                Education and project-ready experience
              </h2>
              <p
                style={{
                  ...styles.sectionText,
                  maxWidth: "40rem",
                  marginTop: "1rem",
                  marginInline: isMobile ? "auto" : "0",
                }}
              >
                Download my current resume for a fuller look at my education, technical skills,
                project work, and professional experience.
              </p>
            </div>

            <a href={resumeLink} style={styles.primaryButton} download>
              View Resume
            </a>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.contactWrap}>
            <div style={styles.sectionEyebrow}>Contact</div>
            <h2 style={styles.sectionTitle}>Let’s build something meaningful</h2>
            <p
              style={{
                ...styles.sectionText,
                maxWidth: "44rem",
                marginTop: "1rem",
                marginInline: "auto",
              }}
            >
              Whether it’s AI, automation, developer tooling, or a strong software idea, I’m always
              interested in opportunities to create something useful.
            </p>

            <div style={styles.contactGrid}>
              <a href="mailto:dodd623@gmail.com" style={styles.contactCard}>
                <div style={{ fontWeight: 700, marginBottom: "0.45rem" }}>Email</div>
                <div style={{ color: theme.secondaryText }}>dodd623@gmail.com</div>
              </a>

              <a
                href="https://github.com/dodd623/"
                target="_blank"
                rel="noreferrer"
                style={styles.contactCard}
              >
                <div style={{ fontWeight: 700, marginBottom: "0.45rem" }}>GitHub</div>
                <div style={{ color: theme.secondaryText }}>github.com/dodd623</div>
              </a>

              <a
                href="https://www.linkedin.com/in/devindodd/"
                target="_blank"
                rel="noreferrer"
                style={styles.contactCard}
              >
                <div style={{ fontWeight: 700, marginBottom: "0.45rem" }}>LinkedIn</div>
                <div style={{ color: theme.secondaryText }}>linkedin.com/in/devindodd</div>
              </a>
            </div>
          </div>
        </section>

        <div style={styles.footerSpace} />
      </main>
    </div>
  );
}