"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    title: "Events & experiences",
    kind: "events",
    color: "purple",
    copy: "Summits, conferences, concerts, festivals, destination events and private experiences.",
  },
  {
    title: "Media",
    kind: "media",
    color: "orange",
    copy: "Film, content, production, photography, digital stories and immersive experiences.",
  },
  {
    title: "Talent & management",
    kind: "talent",
    color: "cyan",
    copy: "Talent representation, creator management, artist management and partnerships.",
  },
  {
    title: "Image & PR",
    kind: "image",
    color: "lime",
    copy: "Personal branding, PR, publicity, media relations and strategic communications.",
  },
  {
    title: "Creative industries",
    kind: "creative",
    color: "pink",
    copy: "Film, animation, VFX, AI, gaming, XR, design and emerging creative technologies.",
  },
];

const experienceSteps = [
  ["Imagine", "Every great experience begins with a bold imagination.", "bulb", "gold"],
  ["Curate", "We shape ideas into concepts with purpose and intent.", "clipboard", "orange"],
  ["Hybridize", "We connect creativity, technology and strategy to unlock possibilities.", "hybrid", "pink"],
  ["Create", "We craft every detail with precision and passion.", "gear", "purple"],
  ["Experience", "We deliver moments that move people and create impact.", "people", "cyan"],
  ["Remember", "We build memories that last far beyond the experience.", "star", "gold"],
];

const projects = [
  {
    className: "project-a",
    title: "Cinematica Expo",
    tagline: "Where cinema met the future.",
    detail: "A groundbreaking celebration of cinema and technology that brought visionaries, creators and audiences into the future of storytelling.",
  },
  {
    className: "project-b",
    title: "CINICATHON",
    tagline: "Where creativity meets innovation.",
    detail: "A creative marathon where ideas collide, teams build, and bold concepts turn into unforgettable experiences.",
  },
  {
    className: "project-c",
    title: "Frames of Founders",
    tagline: "Where entrepreneurship becomes storytelling.",
    detail: "An exclusive storytelling platform that brings founders’ journeys, insights and lessons to inspire the next generation of dreamers.",
  },
  {
    className: "project-d",
    title: "Cinematica Expo 2026",
    tagline: "The next chapter is coming.",
    detail: "Bigger. Bolder. Beyond imagination. Get ready for a new era of cinematic experiences that will redefine the future once again.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="HRIPOP Media home">
      <img className="brand-logo" src="/assets/hripop-logo.png" alt="HRIPOP" />
    </a>
  );
}

function ServiceIcon({ kind }) {
  if (kind === "events") return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 24h44v30H10zM10 24l44-12 3 9-47 12zM18 19l7 7m11-10 7 7m-20 17 15 9-15 9z" /></svg>;
  if (kind === "media") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="12" width="48" height="36" rx="3" /><path d="m27 22 15 9-15 9zM18 55h28" /></svg>;
  if (kind === "talent") return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="28" cy="19" r="9" /><path d="M9 50c1-13 8-21 19-21 8 0 14 4 18 10" /><path d="m48 31 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" /></svg>;
  if (kind === "image") return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 35h12l25 12V17L21 29H9zM21 35v15h-8V35m38-13 6-5m-6 25 6 5M51 32h9" /></svg>;
  return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="24" width="34" height="25" rx="3" /><path d="m42 31 14-8v27l-14-8z" /><circle cx="18" cy="16" r="7" /><circle cx="34" cy="14" r="9" /></svg>;
}

function StepIcon({ kind }) {
  if (kind === "spark") return <svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="3" /><path d="M30 5v12m0 26v12M5 30h12m26 0h12M12 12l9 9m18 18 9 9m0-36-9 9M21 39l-9 9" /></svg>;
  if (kind === "bulb") return <svg viewBox="0 0 60 60" aria-hidden="true"><path d="M20 29a12 12 0 1 1 20 9c-3 3-4 5-4 8H24c0-3-1-5-4-8a12 12 0 0 1 0-9zM24 51h12M27 56h6M30 6v5M11 14l4 4m34-4-4 4M6 31h6m36 0h6" /></svg>;
  if (kind === "clipboard") return <svg viewBox="0 0 60 60" aria-hidden="true"><rect x="14" y="10" width="32" height="43" rx="3" /><path d="M23 10V6h14v4M21 24h18M21 32h18M21 40h12" /></svg>;
  if (kind === "hybrid") return <svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="23" cy="30" r="13" /><circle cx="37" cy="30" r="13" /></svg>;
  if (kind === "gear") return <svg viewBox="0 0 60 60" aria-hidden="true"><path d="m30 7 5 5 7-2 3 7 7 2v8l-6 4 2 7-6 5-7-2-5 6-6-6-7 2-5-5 2-7-6-4v-8l7-2 3-7 7 2z" /><circle cx="30" cy="27" r="8" /></svg>;
  if (kind === "people") return <svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="18" r="7" /><circle cx="15" cy="25" r="5" /><circle cx="45" cy="25" r="5" /><path d="M20 48V39c0-7 4-12 10-12s10 5 10 12v9M5 48v-8c0-5 4-9 9-9 3 0 5 1 7 3m34 14v-8c0-5-4-9-9-9-3 0-5 1-7 3" /></svg>;
  return <svg viewBox="0 0 60 60" aria-hidden="true"><path d="m30 7 7 15 17 2-12 12 3 17-15-8-15 8 3-17L6 24l17-2z" /></svg>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.03, rootMargin: "0px 0px 10% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const requiredFields = [...form.querySelectorAll("[required]")];
    let firstInvalid = null;

    requiredFields.forEach((field) => {
      const invalid = !field.checkValidity();
      field.setAttribute("aria-invalid", String(invalid));
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      setFormStatus("Please complete the highlighted fields.");
      firstInvalid.focus();
      return;
    }

    setSubmitted(true);
    setFormStatus("Thank you. Your idea is ready for the HRIPOP team.");
    form.reset();
    requiredFields.forEach((field) => field.removeAttribute("aria-invalid"));
    window.setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" aria-label="Primary navigation">
        <Brand />
        <nav className="desktop-nav" aria-label="Main menu">
          <a href="#home">Home</a><a href="#about">About</a><a href="#what-we-do">What we do</a>
          <a href="#worlds">Our worlds</a><a href="#projects">Projects</a><a href="#insights">Insights</a><a href="#contact">Contact</a>
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-panel"
          onClick={() => setMenuOpen((open) => !open)}
        ><span /><span /><span /></button>
      </header>

      <div className={`menu-panel${menuOpen ? " is-open" : ""}`} id="menu-panel" aria-hidden={!menuOpen}>
        <div className="menu-panel-inner">
          <p>Explore HRIPOP</p>
          <nav aria-label="Expanded menu">
            <a href="#home" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About HRIPOP</a>
            <a href="#what-we-do" onClick={closeMenu}>What we do</a><a href="#worlds" onClick={closeMenu}>Our five worlds</a>
            <a href="#projects" onClick={closeMenu}>Signature projects</a><a href="#insights" onClick={closeMenu}>Insights</a>
            <a href="#contact" onClick={closeMenu}>Start an experience</a>
          </nav>
          <div className="menu-foot">IMAGINE · CURATE · HYBRIDIZE · EXPERIENCE · REMEMBER</div>
        </div>
      </div>

      <main id="main">
        <section className="hero-stage" id="home" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-content reveal">
            <h1 id="hero-title"><span>What if your</span><strong>imagination</strong><span className="could-line">could become an</span><span className="experience-line">experience?</span></h1>
            <p className="hero-kicker">We make it real.</p>
            <p className="hero-copy">HRIPOP Media creates extraordinary experiences across creative industries, entertainment, events, media and image management. From creative-industry summits and concerts to destination weddings, film publicity, business matchmaking, private celebrations and public image management — we bring imagination into the real world.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Imagine with us <span>⟶</span></a><a className="button button-secondary" href="#experience">Plan an experience</a></div>
          </div>
          <div className="journey" aria-label="The HRIPOP journey"><span className="journey-a">Imagination</span><b>⟶</b><span className="journey-b">Transformation</span><b>⟶</b><span className="journey-c">Reality</span><b>⟶</b><span>From what you imagine to what you experience</span></div>
        </section>

        <section className="story-section section" id="about">
          <div className="story-main">
            <div className="story-visual reveal">
              <div className="story-doorway" role="img" aria-label="A visionary walking toward a luminous doorway and future city" />
              <div className="story-signal signal-imagination" aria-hidden="true"><StepIcon kind="spark" /><span>Imagination</span><i /></div>
              <div className="story-signal signal-possibility" aria-hidden="true"><StepIcon kind="hybrid" /><span>Possibility</span><i /></div>
              <div className="story-signal signal-reality" aria-hidden="true"><StepIcon kind="star" /><span>Reality</span><i /></div>
            </div>
            <div className="story-copy reveal">
              <div className="eyebrow">Built around one belief</div>
              <h2 className="section-title">Imagination should not have to stay <em>imagination.</em></h2>
              <i className="story-rule" aria-hidden="true" />
              <p>HRIPOP Media exists to bridge the gap between what people imagine and what they experience. From a spark of an idea to a global-scale experience, we design, build and deliver moments that live far beyond the moment.</p>
              <a className="story-button" href="#what-we-do">Discover our story <span>⟶</span></a>
            </div>
          </div>
          <div className="story-pillars reveal">
            <article className="story-pillar pillar-imagination"><div className="pillar-icon"><StepIcon kind="spark" /></div><div><h3>Imagination</h3><i /><p>Every great experience begins with a spark of imagination.</p></div></article>
            <article className="story-pillar pillar-possibility"><div className="pillar-icon"><StepIcon kind="hybrid" /></div><div><h3>Possibility</h3><i /><p>We unlock potential by connecting ideas, people and technology.</p></div></article>
            <article className="story-pillar pillar-reality"><div className="pillar-icon"><StepIcon kind="star" /></div><div><h3>Reality</h3><i /><p>We turn possibility into real-world experiences that make an impact.</p></div></article>
          </div>
        </section>

        <section className="capabilities section compact-section" id="what-we-do">
          <div className="section-head compact-head">
            <div><div className="eyebrow">What we do</div><h2 className="section-title reveal">We build where <em>creativity</em> meets opportunity.</h2></div>
            <p className="section-lead reveal">We bring together ideas, people, technology and strategy to build extraordinary experiences that create impact and open doors.</p>
          </div>
          <div className="service-grid" id="worlds">
            {capabilities.map((item) => <article className={`service-card service-${item.color} reveal`} key={item.title}><ServiceIcon kind={item.kind} /><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </section>

        <section className="experience-flow section" id="experience">
          <div className="experience-heading reveal"><div className="eyebrow">The HRIPOP experience</div><h2 className="section-title">We manage the entire experience.</h2></div>
          <div className="experience-track">
            {experienceSteps.map(([title, copy, kind, color]) => <article className={`experience-step step-${color} reveal`} key={title}><div className="step-orb"><StepIcon kind={kind} /></div><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="projects-intro">
            <div className="projects-heading"><div className="eyebrow">The HRIPOP experience</div><h2 className="section-title reveal">We don’t just talk about experience. <em>We build them.</em></h2><a className="projects-button reveal" href="#contact">View all projects <span>⟶</span></a></div>
            <div className="projects-lead reveal"><p>From concept to execution, from intimate gatherings to global spectacles, we design and deliver experiences that leave a lasting impact.</p><i /></div>
          </div>
          <div className="project-list">
            {projects.map((project, index) => <article className={`project-strip ${project.className} reveal`} key={project.title}>
              <div className="project-info"><span className="project-number">{String(index + 1).padStart(2, "0")}</span><h3>{project.title}</h3><p className="project-tagline">{project.tagline}</p><i /><p className="project-detail">{project.detail}</p></div>
              <div className="project-media" role="img" aria-label={`${project.title} project scene`} />
            </article>)}
          </div>
        </section>

        <section className="insights section" id="insights">
          <div className="section-head compact-head"><div><div className="eyebrow">The world of experiences, in focus</div><h2 className="section-title reveal">Ideas that move culture, business and people.</h2></div><a className="section-action reveal" href="#contact">View all insights <span>⟶</span></a></div>
          <div className="insight-row">
            <article className="reveal"><span>Creative economy</span><h3>Why the best events become platforms people want to return to.</h3><a href="#contact">Read article <b>⟶</b></a></article>
            <article className="reveal"><span>Experience design</span><h3>From arrival to memory: designing every moment with intention.</h3><a href="#experience">Read article <b>⟶</b></a></article>
            <article className="reveal"><span>Media &amp; image</span><h3>Every experience deserves a story that lives beyond the event.</h3><a href="#what-we-do">Read article <b>⟶</b></a></article>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-copy reveal"><div className="eyebrow">The HRIPOP Experience Lab</div><h2 className="section-title">Have an idea that doesn’t exist yet?</h2><p>Tell us what you’re imagining. We’ll help you bring it to life.</p><strong>Your imagination. Our ecosystem.<br />One experience.</strong></div>
          <form className="enquiry-form reveal" id="enquiry-form" noValidate onSubmit={handleSubmit} onInput={(event) => { if (event.target.matches('[aria-invalid="true"]') && event.target.checkValidity()) event.target.removeAttribute("aria-invalid"); }}>
            <div className="field-row"><label className="field-box"><span className="sr-only">Your name</span><input type="text" name="name" autoComplete="name" placeholder="Your Name" required /></label><label className="field-box"><span className="sr-only">Organization</span><input type="text" name="organization" autoComplete="organization" placeholder="Organization" /></label></div>
            <div className="field-row"><label className="field-box"><span className="sr-only">Email address</span><input type="email" name="email" autoComplete="email" placeholder="Email Address" required /></label><label className="field-box"><span className="sr-only">Phone number</span><input type="tel" name="phone" autoComplete="tel" placeholder="Phone Number" /></label></div>
            <label className="field-box field-wide"><span className="sr-only">Tell us about your idea</span><textarea name="idea" rows="3" required placeholder="Tell us about your idea" /></label>
            <label className="field-box field-wide"><span className="sr-only">What are you looking for?</span><select name="interest" required defaultValue=""><option value="">What are you looking for?</option><option>Creative Industry Event</option><option>Summit or Conference</option><option>Concert or Festival</option><option>Film Event or Publicity</option><option>Business Matchmaking</option><option>Destination Celebration</option><option>Private Experience</option><option>Image Management</option><option>Talent or Casting</option><option>Something else</option></select></label>
            <div className="form-bottom"><p className="form-status" aria-live="polite">{formStatus}</p><button className="button button-primary" type="submit" disabled={submitted}>{submitted ? "Imagination received ✓" : <><span className="button-label">Submit your imagination</span><span>⟶</span></>}</button></div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-identity"><Brand /><p>Imagination, hybridized into reality.</p></div>
          <nav className="footer-group" aria-label="About links"><h3>About</h3><a href="#about">About Us</a><a href="#about">Our Team</a><a href="#contact">Careers</a></nav>
          <nav className="footer-group" aria-label="Services links"><h3>What we do</h3><a href="#what-we-do">Events</a><a href="#what-we-do">Media</a><a href="#what-we-do">Talent</a><a href="#worlds">Image &amp; PR</a><a href="#worlds">Creative Industries</a></nav>
          <nav className="footer-group" aria-label="World links"><h3>Our worlds</h3><a href="#experience">The Experience</a><a href="#experience">Lab</a><a href="#projects">Projects</a><a href="#insights">Insights</a></nav>
          <nav className="footer-group" aria-label="Contact links"><h3>Connect</h3><a href="#contact">Contact Us</a><a href="#contact">Partner With Us</a><a href="#contact">Experience Lab</a></nav>
          <div className="footer-group"><h3>Follow us</h3><div className="social-row" aria-label="Social channels"><span aria-label="Instagram">◎</span><span aria-label="LinkedIn">in</span><span aria-label="YouTube">▶</span><span aria-label="Email">✉</span></div></div>
        </div>
        <div className="footer-bottom"><small>© 2026 HRIPOP Media. All Rights Reserved.</small><p>Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms of Use</p></div>
      </footer>
    </>
  );
}
