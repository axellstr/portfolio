import styles from './Projects.module.css';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  className?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Lihua - XRP",
    description: "Astro-built landing page for the LIHUA token. Fast, SEO-friendly, responsive, with OG/Twitter meta and analytics.",
    tech: ["Astro", "TypeScript", "SEO", "SSG", "Responsive"],
    link: "https://getlihua.com",
  },
  {
    title: "Parisa Jewellery - Ecommerce",
    description: "Jewellery ecommerce built with Astro, CSS, and a modular database. Optimized for performance using Astro's image handler.",
    tech: ["Astro", "CSS", "Modular DB", "Astro Images", "Performance"],
    link: "https://parisajewellery.com/",
  },
  {
    title: "Pongo -XRP",
    description: "Astro-built landing page for the PONGO token. Sub-second loads, strong SEO, responsive UI, rich social meta.",
    tech: ["Astro", "TypeScript", "SEO", "SSG", "Responsive"],
    link: "https://pongoxrp.com",
  },
  {
    title: "E-Compvenience - Frontend",
    description: "Landing page and base API connection for ECV — a digital twin company focused on AR/VR map navigation. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    link: "https://www.ecvpresale.com/",
    github: "https://github.com/username/coin-project"
  },
  {
    title: "McQueen's Detailing - Fullstack",
    description: "Full e‑commerce car garage built with Astro, Express/Node.js and Stripe for secure checkout, products, and orders.",
    tech: ["Astro", "Express", "Node.js", "Stripe", "TypeScript"],
    link: "https://www.mcqueensdetailing.eu/",
    github: "https://github.com/username/javascript-advanced"
  },
  {
    title: "The Spirit Lab - Frontend",
    description: "Landing page for a retreat center built with plain HTML, CSS, and lightweight JS handlers for animations and interactions.",
    tech: ["HTML", "CSS", "JavaScript", "Animations", "Responsive"],
    link: "https://thespiritlab.org/"
  },
  {
    title: "Slotsplanet - Fullstack",
    description: "Full affiliate-link ecosystem with analytics and CMS. High SEO performance, built with Next.js.",
    tech: ["Next.js", "TypeScript", "CMS", "Analytics", "SEO"],
    link: "https://slotsplanet.net"
  }
];

export default function Projects({ className }: ProjectsProps) {
  const ArrowIcon = () => (
    <svg 
      className={styles.buttonIcon} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
    </svg>
  );

  return (
    <section className={`${styles.projects} ${className || ''}`} id="work">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Selected Work & Contributions</h1>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
                <div className={styles.metaRow}>
                  <div className={styles.tech}>
                    {project.tech.map((technology, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className={styles.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span>View Project</span>
                        <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 