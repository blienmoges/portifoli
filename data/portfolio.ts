// ─────────────────────────────────────────────────────────────
//  Edit this file to make the portfolio yours.
//  Everything on the site is generated from the data below.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Blien Moges",
  role: "Software Engineer",
  location: "Addis Ababa, Ethiopia",
  // One or two sentences shown big in the hero.
  tagline:
    "Backend-focused software engineer building secure APIs, AI-enabled systems and data pipelines, from real-time platforms to computer-vision services in production.",
  // Longer intro for the About section. Each string is a paragraph.
  about: [
    "I'm a Software Engineering graduate from Addis Ababa Science and Technology University (AASTU). I enjoy building the backend of things: REST APIs, databases, authentication and the services that tie apps together. Lately I've been adding AI to those systems.",
    "I've built backends with Node.js/Express and Python/FastAPI, integrated YOLO and PaddleOCR for license-plate recognition, and deployed services on Linux with Nginx. I sharpened my problem-solving at A2SV (backed by Google) and completed the Kifiya AI Mastery program with distinction, working on data engineering, ML and MLOps.",
  ],
  facts: [
    { k: "Degree", v: "B.Sc. Software Engineering, AASTU (2026)" },
    { k: "Training", v: "A2SV · Kifiya AI Mastery (with distinction)" },
    { k: "Focus", v: "Backend, AI-enabled systems, data" },
    { k: "Based in", v: "Addis Ababa, Ethiopia" },
  ],
  email: "Blienmoges92@gmail.com",
  resumeUrl: "/resume.pdf", // file lives in /public. Leave empty to hide.
  available: true, // shows an "Open to work" badge
  // Words typed out in the hero headline: "I build ___"
  focus: ["backend APIs.", "AI-powered systems.", "data pipelines.", "real-time platforms."],
  // Shown in the hero code card
  stack: ["Node.js", "FastAPI", "PostgreSQL", "Python"],
  learning: "Data Analytics & ML",
};

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/blienmoges" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/blien-moges/" },
  { label: "Email", href: "mailto:Blienmoges92@gmail.com" },
];

export const githubUrl = "https://github.com/blienmoges";

export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tech: string[];
  repo?: string;
  live?: string;
  demo?: string; // e.g. a demo video or document link
  image?: { src: string; caption: string }; // screenshot in /public
  featured?: boolean;
  status?: string; // optional small label
};

export const projects: Project[] = [
  {
    title: "StartupConnect Ethiopia",
    description:
      "A web and mobile platform that connects Ethiopian startups with verified investors and mentors, with role-based dashboards for startups, investors, mentors and admins. I was the backend developer.",
    highlights: [
      "Built the Node.js/Express REST APIs for registration, auth, profiles, startup listings and platform interactions",
      "PostgreSQL data layer with input validation, error handling and role-based access control",
      "JWT with refresh-token rotation, Google OAuth, 2FA, Socket.IO real-time chat and Chapa payments",
      "One backend serving both the Next.js web app and the Flutter mobile app",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Socket.IO", "Next.js", "Flutter", "Docker"],
    repo: "https://github.com/blienmoges/startuopconnect",
    live: "https://startuopconnect.vercel.app",
    image: {
      src: "/projects/startupconnect.jpg",
      caption:
        "Landing page: \"Connecting Ethiopian Startups with Investors and Mentors\". Visitors can browse startups, register as a startup, investor or mentor, and log in to their role-based dashboard.",
    },
    featured: true,
  },
  {
    title: "CIKETTECH Website",
    description:
      "A multilingual corporate website for Ciket Technologies with product showcases, quote requests, an admin dashboard and an AI customer assistant.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    repo: "https://github.com/blienmoges/cikettech",
    live: "https://www.cikettech.com/",
    image: {
      src: "/projects/cikettech.jpg",
      caption:
        "Home page of cikettech.com: smart electronic products designed and made in Ethiopia, with a language switcher, product pages, quote requests and the AI assistant (bottom right).",
    },
  },
  {
    title: "NewsBrief",
    description:
      "An AI-powered news summarizer for Ethiopia. It pulls articles from 20+ Ethiopian and global RSS feeds and serves short summaries through a bilingual Amharic/English chatbot with audio replies.",
    highlights: [
      "Text and audio responses using i18n and ElevenLabs text-to-speech",
      "Near-real-time rendering and instant audio playback for low-literacy users",
    ],
    tech: ["RSS", "LLM summarization", "i18n", "ElevenLabs TTS"],
    live: "https://news-brief-frontend.vercel.app/news",
  },
  {
    title: "Smart AI Parking Gate",
    description:
      "An automatic license-plate recognition backend built for Ciket Technologies. It accepts vehicle images and returns structured JSON results that a smart parking gate uses.",
    highlights: [
      "YOLO object detection + PaddleOCR to locate plates and extract their text",
      "Python/FastAPI service with API-key authorization, request validation, error handling and logging",
      "Deployed on Linux with systemd process management behind an Nginx reverse proxy",
    ],
    tech: ["Python", "FastAPI", "YOLO", "PaddleOCR", "Linux", "Nginx"],
    repo: "https://github.com/blienmoges/smart-parking-gate",
    featured: true,
  },
  {
    title: "Medical Telegram Warehouse",
    description:
      "A Kifiya AI Mastery project: an analytics platform for Ethiopian pharmacy and cosmetics Telegram channels. It scrapes posts and images, models them in a star-schema warehouse and runs YOLOv8 on marketing images.",
    highlights: [
      "Telethon scraper → PostgreSQL → dbt staging and marts with data-quality tests",
      "FastAPI analytics endpoints, orchestrated with Dagster",
    ],
    tech: ["Python", "PostgreSQL", "dbt", "YOLOv8", "FastAPI", "Dagster"],
    repo: "https://github.com/blienmoges/kifiya-week8",
  },
  {
    title: "Customer Service Chat System",
    description:
      "A UDP-based client-server messaging platform with unicast, broadcast and multicast chat and file transfer for 5–10 concurrent clients.",
    highlights: [
      "Reliable packet handling, buffering, segmentation and reassembly",
      "Low-latency messaging (<100 ms) and file transfers up to 5 MB",
    ],
    tech: ["UDP", "Socket programming", "Networking"],
    demo: "https://drive.google.com/file/d/14YV6o74XGAGx8FyxGZftvavmCXEAOSRY/view?usp=sharing",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Web Developer",
    company: "Ciket Technologies · CIKETTECH Web App",
    period: "Sep 1 — Sep 30, 2026",
    points: [
      "Built the multilingual company web app (cikettech.com) with Next.js, React and Tailwind CSS.",
      "Developed product showcases, quote requests and an admin dashboard backed by Node.js and PostgreSQL.",
      "Integrated an AI customer assistant to answer visitor questions.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Ciket Technologies · Smart AI Parking Gate",
    period: "May 2026 — Jul 2026",
    points: [
      "Built a FastAPI backend for automatic license-plate recognition using YOLO and PaddleOCR.",
      "Added API-key authorization, validation, exception handling and logging.",
      "Deployed to Linux with systemd and Nginx as a reverse proxy.",
    ],
  },
  {
    role: "Backend Developer",
    company: "StartupConnect Ethiopia",
    period: "Feb 2026 — Jun 2026",
    points: [
      "Developed Node.js/Express services and REST APIs for a startup networking platform.",
      "Integrated PostgreSQL and implemented authentication and role-based access control.",
      "Connected the APIs to the Next.js web app and the Flutter mobile app.",
    ],
  },
];

export const education: Experience[] = [
  {
    role: "Kifiya AI Mastery (KAIM): with distinction",
    company: "10 Academy × Kifiya · Mastercard Foundation",
    period: "Mar 2026",
    points: [
      "12-week project-based program: data engineering, ML engineering, time series, deep learning, MLOps, generative AI.",
    ],
  },
  {
    role: "Competitive Programming & Coding Academy",
    company: "A2SV: Africa to Silicon Valley (backed by Google)",
    period: "Jan 2025 — Jan 2026",
    points: ["30+ hours/week of data structures, algorithms, contests and mock interviews (LeetCode, Codeforces)."],
  },
  {
    role: "B.Sc. Software Engineering",
    company: "Addis Ababa Science and Technology University",
    period: "Jan 2021 — Jun 2026",
    points: ["Coursework: DSA, Database Systems, AI, Machine Learning, Probability & Statistics, OOP."],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++"] },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs", "Socket.IO", "JWT / OAuth"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Flutter"] },
  { group: "AI & Data", items: ["YOLO", "PaddleOCR", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "dbt", "Dagster"] },
  { group: "Databases & DevOps", items: ["PostgreSQL", "SQLite", "Supabase", "Docker", "Linux", "Nginx", "Git"] },
];

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  note: string;
  image: string; // preview image in /public
  href: string; // full certificate or verification link
  linkLabel: string;
};

export const certificates: Certificate[] = [
  {
    title: "Cybersecurity Programme",
    issuer: "ALX Africa",
    date: "Sep 2026",
    note: "Completed a 13-week ALX programme in Cybersecurity.",
    image: "/certificates/alx-cybersecurity.png",
    href: "https://savanna.alxafrica.com/certificates/XhYRTxHF39",
    linkLabel: "Verify",
  },
  {
    title: "Kifiya AI Mastery Training Program (with distinction)",
    issuer: "Mastercard Foundation · Kifiya · 10 Academy",
    date: "Mar 2026",
    note: "3-month intensive program: Machine Learning Engineering, Data Engineering and Financial Analysis for fintech.",
    image: "/certificates/kaim.png",
    href: "/certificates/kaim.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "National Competitive Programming Hackathon",
    issuer: "ALX Ethiopia · Code League Ethiopia",
    date: "Dec 2025",
    note: "Competed in Ethiopia's National Competitive Programming Challenge at the CapStone ALX Tech Hub, Addis Ababa.",
    image: "/certificates/ncpc-hackathon.jpg",
    href: "/certificates/ncpc-hackathon.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "Beginner Track Mentor",
    issuer: "Google Developer Group · AASTU",
    note: "Certificate of appreciation for mentoring beginners and contributing to the GDG AASTU community.",
    image: "/certificates/gdg.png",
    href: "/certificates/gdg.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "Web Development Internship",
    issuer: "Prodigy InfoTech",
    date: "Jul 2024",
    note: "Completed a 1-month Web Development internship with outstanding remarks.",
    image: "/certificates/prodigy.jpg",
    href: "/certificates/prodigy.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "Frontend Development Internship",
    issuer: "CodeAlpha",
    date: "Jul 2024",
    note: "Active participant in the CodeAlpha virtual internship program in frontend development.",
    image: "/certificates/codealpha.jpg",
    href: "/certificates/codealpha.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "React.js Track: Certificate of Recognition",
    issuer: "Google Developer Student Clubs · AASTU",
    date: "Jun 2024",
    note: "Completed the 6-month React.js study program and its capstone project with perfect attendance.",
    image: "/certificates/gdsc-react.jpg",
    href: "/certificates/gdsc-react.jpg",
    linkLabel: "View certificate",
  },
  {
    title: "Hackathon Participation",
    issuer: "Google Developer Student Clubs · AASTU",
    date: "Jun 2024",
    note: "Recognized for active participation in the hackathon organized by GDSC AASTU.",
    image: "/certificates/gdsc-hackathon.jpg",
    href: "/certificates/gdsc-hackathon.jpg",
    linkLabel: "View certificate",
  },
];
