"use client";

import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from "react";

/** Fades/slides children in when they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Types and deletes each word in turn. */
export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 35 : 75
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="type" aria-label={words.join(", ")}>
      <span className="grad">{text}</span>
      <span className="caret" aria-hidden />
    </span>
  );
}

/** Card with a soft light that follows the pointer. */
export function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div className={`glow-card ${className}`} onPointerMove={onMove}>
      {children}
    </div>
  );
}

/** Floating pill navigation that highlights the section in view. */
export function Nav({ initials, links, toggle }: { initials: string; links: { id: string; label: string }[]; toggle: ReactNode }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const ids = links.map((l) => l.id).join(",");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [ids]);

  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="logo" aria-label="Back to top">{initials}</a>
      <nav className="pill">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
            {l.label}
          </a>
        ))}
      </nav>
      {toggle}
    </header>
  );
}

/** Button that copies the email address. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="btn ghost"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {}
      }}
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
