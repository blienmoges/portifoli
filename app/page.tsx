import { Header, Hero, About, Projects, ExperienceSection, Certificates, Skills, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceSection />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
