import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
};

// Sets the theme before first paint (no flash) and marks JS as available for animations.
const themeScript = `
(function () {
  var d = document.documentElement;
  d.classList.add("js");
  try {
    var saved = localStorage.getItem("theme");
    var dark = saved ? saved === "dark" : true;
    d.dataset.theme = dark ? "dark" : "light";
  } catch (e) { d.dataset.theme = "dark"; }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
