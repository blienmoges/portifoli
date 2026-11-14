import { profile, socials, projects, experience, education, skills, certificates, githubUrl, type Experience } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { Reveal, Typewriter, GlowCard, Nav, CopyEmail } from "./Interactive";

const firstName = profile.name.split(" ")[0];
const initials = profile.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <Reveal>
      <div className="sec-head">
        <span className="sec-num">{num}</span>
        <h2>{title}</h2>
        <span className="sec-line" />
      </div>
    </Reveal>
  );
}

export function Header() {
  return (
    <Nav
      initials={initials}
      links={[
        { id: "about", label: "About" },
        { id: "projects", label: "Work" },
        { id: "experience", label: "Journey" },
        { id: "certificates", label: "Certificates" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
      ]}
      toggle={<ThemeToggle />}
    />
  );
}

function CodeCard() {
  const v = firstName.toLowerCase();
  const lines: [string, string][][] = [
    [["k", "const "], ["v", v], ["p", " = {"]],
    [["p", "  role: "], ["s", `"${profile.role}"`], ["p", ","]],
    [["p", "  based: "], ["s", `"${profile.location}"`], ["p", ","]],
    [["p", "  stack: ["], ...profile.stack.flatMap((s, i): [string, string][] => [["s", `"${s}"`], ["p", i < profile.stack.length - 1 ? ", " : ""]]), ["p", "],"]],
    [["p", "  learning: "], ["s", `"${profile.learning}"`], ["p", ","]],
    [["p", "  openToWork: "], ["k", String(profile.available)], ["p", ","]],
    [["p", "};"]],
    [["c", ""]],
    [["v", v], ["p", "."], ["f", "build"], ["p", "("], ["s", '"something great"'], ["p", ");"]],
  ];
  return (
    <GlowCard className="code-card">
      <div className="code-head">
        <span className="dots"><i /><i /><i /></span>
        <em>about.ts</em>
      </div>
      <pre>
        {lines.map((line, i) => (
          <div key={i} className="code-line">
            <span className="ln">{i + 1}</span>
            <code>
              {line.map(([cls, txt], j) => (
                <span key={j} className={`t-${cls}`}>{txt}</span>
              ))}
            </code>
          </div>
        ))}
      </pre>
    </GlowCard>
  );
}

export function Hero() {
  const allSkills = Array.from(new Set(skills.flatMap((s) => s.items)));
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        <div className="grid-bg" />
        <div className="blob b1" />
        <div className="blob b2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            {profile.available && (
              <span className="badge">
                <span className="pulse" /> Open to work · {profile.location}
              </span>
            )}
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Hi, I&apos;m {firstName}.
              <br />I build <Typewriter words={profile.focus} />
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="actions">
              <a className="btn primary" href="#projects">See my work <Arrow /></a>
              <a className="btn ghost" href="#contact">Get in touch</a>
              {profile.resumeUrl && (
                <a className="btn ghost" href={profile.resumeUrl} download="Blien_Moges_CV.pdf">Download CV ↓</a>
              )}
            </div>
          </Reveal>
        </div>
        <Reveal delay={320} className="hero-card">
          <CodeCard />
        </Reveal>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const facts = profile.facts;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead num="01" title="About" />
        <div className="about-grid">
          <Reveal>
            <p className="statement">
              I like building software that solves <span className="grad">real problems close to home</span>, and making it secure, fast and easy to use.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="about-body">
              {profile.about.map((p, i) => <p key={i}>{p}</p>)}
              <dl className="facts">
                {facts.map((f) => (
                  <div key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead num="02" title="Selected work" />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className={p.featured ? "span-all" : ""}>
              <GlowCard className={`project ${p.featured ? "is-featured" : ""}`}>
                {p.image && (
                  <figure className="shot">
                    <a className="shot-frame" href={p.live ?? p.image.src} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                      <span className="shot-bar" aria-hidden>
                        <span className="dots"><i /><i /><i /></span>
                        <em>{p.live ? new URL(p.live).hostname.replace(/^www\./, "") : p.title}</em>
                      </span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image.src} alt={`${p.title} screenshot`} loading="lazy" />
                    </a>
                    <figcaption>{p.image.caption}</figcaption>
                  </figure>
                )}
                <div className="project-main">
                  <div className="project-top">
                    <span className="index">{String(i + 1).padStart(2, "0")}</span>
                    <div className="chips">
                      {p.featured && <span className="chip accent">Featured</span>}
                      {p.status && <span className="chip">{p.status}</span>}
                    </div>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="desc">{p.description}</p>
                  <div className="tags">
                    {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  {(p.live || p.repo || p.demo) && (
                    <div className="links">
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo <Arrow /></a>}
                      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}
                    </div>
                  )}
                </div>
                {p.highlights && p.highlights.length > 0 && (
                  <ul className="highlights">
                    {p.highlights.map((h, j) => (
                      <li key={j}><Check /> <span>{h}</span></li>
                    ))}
                  </ul>
                )}
              </GlowCard>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="more-work">
            <a className="btn ghost" href={githubUrl} target="_blank" rel="noreferrer">
              More on GitHub <Arrow />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="timeline">
      {items.map((e, i) => (
        <li key={e.role + e.company}>
          <Reveal delay={i * 80}>
            <span className="t-dot" />
            <span className="period">{e.period}</span>
            <h3>{e.role}</h3>
            <div className="company">{e.company}</div>
            {e.points.length > 0 && (
              <ul>{e.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead num="03" title="Journey" />
        <div className="journey">
          <div>
            <Reveal><h4 className="col-label">Experience</h4></Reveal>
            <Timeline items={experience} />
          </div>
          {education.length > 0 && (
            <div>
              <Reveal><h4 className="col-label">Education &amp; Training</h4></Reveal>
              <Timeline items={education} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Certificates() {
  if (certificates.length === 0) return null;
  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHead num="04" title="Certificates" />
        <div className="certs">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <GlowCard className="cert">
                <a className="cert-img" href={c.href} target="_blank" rel="noreferrer" aria-label={`${c.title}: ${c.linkLabel}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />
                </a>
                <div className="cert-body">
                  <div className="cert-meta">
                    <span>{c.issuer}</span>
                    {c.date && <span className="cert-date">{c.date}</span>}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.note}</p>
                  <div className="links">
                    <a href={c.href} target="_blank" rel="noreferrer">{c.linkLabel} <Arrow /></a>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead num="05" title="Toolbox" />
        <div className="bento">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 70} className={`bento-item b${i}`}>
              <GlowCard className="bento-card">
                <span className="bento-count">{String(s.items.length).padStart(2, "0")}</span>
                <h3>{s.group}</h3>
                <div className="tags">
                  {s.items.map((it) => <span className="tag" key={it}>{it}</span>)}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-glow" aria-hidden />
            <span className="sec-num">06 · Contact</span>
            <h2>
              Let&apos;s build something <span className="grad">great together.</span>
            </h2>
            <p>
              I&apos;m {profile.available ? "open to new opportunities, internships and collaborations" : "not actively looking, but always happy to chat"}.
              Have a question or an idea? My inbox is open.
            </p>
            <div className="actions center">
              <a className="btn primary" href={`mailto:${profile.email}`}>Say hello <Arrow /></a>
              <CopyEmail email={profile.email} />
            </div>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} <Arrow /></a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} {profile.name}. Designed &amp; built with Next.js.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
