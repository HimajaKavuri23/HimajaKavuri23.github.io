import { useState, useEffect, useRef } from "react";
import "./App.css";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS = [
  { category: "Programming & Analytics", items: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "PyTorch", "SQL", "Statistics", "ML", "Forecasting"] },
  { category: "Data Engineering & BI", items: ["Snowflake", "dbt", "ELT", "Dimensional Modeling", "Power BI", "Tableau", "Data Validation"] },
  { category: "Business & Finance", items: ["Advanced Excel", "Financial Modeling", "Portfolio Analysis", "Risk Reporting", "KPI Analysis", "Credit Risk"] },
];

const EXPERIENCE = [
  {
    role: "Financial & Operations Analyst",
    level: "Scale-1 Officer · Bank of India",
    period: "Aug 2021 – Dec 2024",
    story: "Three years inside one of India's largest public banks taught me something no classroom could: data doesn't fix broken systems — people who understand both the data and the system do. I was that person across 67 branches.",
    bullets: [
      "Unified HR data across 67 branches — a reconciliation task that was entirely manual, entirely error-prone, and entirely fixable with the right logic",
      "Analyzed 610 Women Self-Help Groups using repayment trends and disbursement timing — translating community lending behavior into a 25% portfolio growth story",
      "Built credit-risk dashboards that turned NPA monitoring from a monthly panic into a daily early-warning system, recovering $60K in stressed assets",
      "Redesigned payroll intake from scratch — structured templates and validation logic that cut errors by 12–15% without adding headcount",
    ],
  },
];

const PROJECTS = [
  {
    title: "Analytics Warehouse",
    subtitle: "Consulting Firm · End-to-End Data Modeling",
    tools: ["Snowflake", "dbt", "SQL", "Dimensional Modeling"],
    period: "Jan – Apr 2026",
    description: "Designed a full analytics warehouse from scratch — fact tables, conformed dimensions, star schemas — for project delivery, HR, and finance. Built source-to-target mappings and SQL validation to ensure every number a stakeholder sees is traceable back to its source.",
    tag: "Data Engineering",
    number: "01",
  },
  {
    title: "Length-of-Stay Prediction",
    subtitle: "Clinical ML · Multimodal Data",
    tools: ["Python", "XGBoost", "PyTorch", "MIMIC-IV"],
    period: "Jan – Apr 2026",
    description: "Processed over half a million hospital admissions and 377K chest X-ray records into a leakage-free prediction dataset. Engineered 161 clinical features to predict patient length of stay — a metric that directly drives hospital resource planning and cost.",
    tag: "Machine Learning",
    number: "02",
  },
  {
    title: "Stroke Risk Prediction",
    subtitle: "Predictive Analytics · ICU Clinical Data",
    tools: ["Python", "XGBoost", "CatBoost", "SHAP"],
    period: "Aug – Dec 2025",
    description: "Built a postoperative stroke risk classifier across 7,129 ICU records. Doubled positive-case precision versus the published baseline (0.24 → 0.50) and achieved AUROC 0.91 — using SHAP to make model decisions explainable to clinical teams, not just data scientists.",
    tag: "Predictive Analytics",
    number: "03",
  },
];

function useInView(ref, threshold = 0.12) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section id={id} ref={ref} className={`section ${inView ? "visible" : ""} ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="bg-orbs">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
      </div>

      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__logo" onClick={() => scrollTo("About")}>HK</div>
        <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <button key={l} className={`nav__link ${activeNav === l ? "nav__link--active" : ""}`} onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>
        <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Hero */}
      <header className="hero" id="about">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          Available for full-time roles · Los Angeles, CA · Open to relocation
        </div>
        <h1 className="hero__name">
          Himaja<br /><em>Kavuri</em>
        </h1>
        <div className="hero__tagline">
          I turn financial complexity into tools people can actually use.
        </div>
        <p className="hero__bio">
          I spent three years inside Bank of India watching smart people waste hours reconciling data that computers should have handled. That frustration became a direction: get the technical skills to build what was missing. Now, as an MS Analytics candidate at USC, I'm doing exactly that — bridging the world of institutional finance with the tools of modern data engineering, with a long-term goal of running my own financial analytics consultancy.
        </p>
        <div className="hero__passions">
          <span className="passion-tag">Financial inclusion</span>
          <span className="passion-tag">Accessible analytics</span>
          <span className="passion-tag">FinTech infrastructure</span>
        </div>
        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => scrollTo("Projects")}>See my work</button>
          <a className="btn btn--ghost" href="https://www.linkedin.com/in/himaja-kavuri" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn btn--ghost" href="https://github.com/HimajaKavuri23" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <div className="hero__stats">
          <div className="stat"><span className="stat__num">3+</span><span className="stat__label">Years in banking</span></div>
          <div className="stat__div" />
          <div className="stat"><span className="stat__num">67</span><span className="stat__label">Branches unified</span></div>
          <div className="stat__div" />
          <div className="stat"><span className="stat__num">3.75</span><span className="stat__label">GPA at USC</span></div>
          <div className="stat__div" />
          <div className="stat"><span className="stat__num">$60K</span><span className="stat__label">Assets recovered</span></div>
        </div>
      </header>

      {/* Education */}
      <div className="edu-strip">
        <div className="edu-item">
          <span className="edu-item__school">University of Southern California</span>
          <span className="edu-item__degree">MS Analytics · GPA 3.75 · 2025–2026</span>
          <span className="edu-item__courses">Predictive Analytics · Data Engineering · Optimization · Analytics Consulting</span>
        </div>
        <div className="edu-divider">+</div>
        <div class="edu-item">
          <span className="edu-item__school">IIT BHU, Varanasi</span>
          <span className="edu-item__degree">Integrated M.Tech Industrial Chemistry · 2012–2017</span>
          <span className="edu-item__courses">One of India's premier technical institutes</span>
        </div>
      </div>

      {/* Experience */}
      <Section id="experience">
        <div className="section__label">Where I've been</div>
        {EXPERIENCE.map((e, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-card__header">
              <div>
                <h2 className="exp-card__role">{e.role}</h2>
                <p className="exp-card__meta">{e.level} · {e.period}</p>
              </div>
            </div>
            <p className="exp-card__story">{e.story}</p>
            <ul className="exp-card__bullets">
              {e.bullets.map((b, j) => (
                <li key={j}><span className="bullet-marker" />{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section id="projects">
        <div className="section__label">What I've built</div>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-card__num">{p.number}</div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="project-card__tag">{p.tag}</span>
                  <span className="project-card__period">{p.period}</span>
                </div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__subtitle">{p.subtitle}</p>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tools">
                  {p.tools.map((t) => <span key={t} className="tool-chip">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects__coming">
          <span className="coming-dot" />
          Next up: DCF valuation dashboard · Financial model template marketplace · Credit risk API
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <div className="section__label">How I work</div>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div className="skill-group" key={i}>
              <h3 className="skill-group__title">{s.category}</h3>
              <div className="skill-group__chips">
                {s.items.map((item) => <span key={item} className="skill-chip">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="contact-section">
        <div className="contact__inner">
          <div className="section__label" style={{justifyContent:"center"}}>What's next</div>
          <h2 className="contact__heading">Let's build something that matters.</h2>
          <p className="contact__sub">
            I'm looking for roles where financial domain knowledge and technical skill aren't separate job descriptions — where I can do both. Whether that's at a FinTech, a bank's analytics team, or a consulting firm, I want to be in the room where the models meet the money.
          </p>
          <p className="contact__availability">
            📍 Los Angeles · Open to relocation · Available via OPT/CPT
          </p>
          <div className="contact__links">
            <a href="mailto:hkavuri@usc.edu" className="contact__link">hkavuri@usc.edu</a>
            <a href="https://www.linkedin.com/in/himaja-kavuri" className="contact__link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/HimajaKavuri23" className="contact__link" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <span>© 2026 Himaja Kavuri</span>
        <span>Built with React · Hosted on GitHub Pages</span>
      </footer>
    </div>
  );
}
