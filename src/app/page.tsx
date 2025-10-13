import { Metadata } from "next";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Soteriou | Webfolio",
  description: "Full-Stack Developer & Designer creating beautiful, scalable digital experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Alexandros Soteriou - Full-Stack Developer & Designer",
    description: "Full-Stack Developer & Designer creating beautiful, scalable digital experiences with React, Next.js, and TypeScript.",
    url: "/",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alexandros Soteriou",
            "url": "https://soteriou.dev",
            "image": "https://soteriou.dev/og-image.jpg",
            "sameAs": [
              "https://github.com/soterioudev",
              "https://linkedin.com/in/alexandros-soteriou"
            ],
            "jobTitle": "Full-Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "description": "Full-Stack Developer & Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
            "knowsAbout": [
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "CSS",
              "HTML",
              "Web Development",
              "Frontend Development",
              "Backend Development"
            ],
            "email": "soterioudev@gmail.com",
            "telephone": "+35796302800",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Cyprus"
            }
          })
        }}
      />
      <main>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </main>
    </>
  );
}
