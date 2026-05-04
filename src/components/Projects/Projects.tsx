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
    title: "Lihua",
    description: "Frontend development for LIHUA, a cryptocurrency token created on the XRPL (XRP Ledger) blockchain. Built a fast, SEO-friendly, responsive landing page with Astro, featuring OG/Twitter meta tags and analytics integration.",
    tech: ["Astro", "TypeScript", "SEO", "SSG", "Responsive", "XRPL"],
    link: "https://getlihua.com",
  },
  {
    title: "Parisa Jewellery",
    description: "Full-stack ecommerce platform for luxury jewellery built with Astro, CSS, and a modular database. Integrated Stripe.js for secure payment processing and optimized for performance using Astro's image handler.",
    tech: ["Astro", "CSS", "Stripe.js", "Modular DB", "Astro Images", "Performance"],
    link: "https://parisajewellery.com/",
  },
  {
    title: "E-Compvenience",
    description: "Landing page and base API connection for ECV — a digital twin company specializing in AR/VR 3D navigation and drone LiDAR systems. Built with Next.js and Tailwind CSS for modern, responsive design.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "API Integration"],
    link: "https://www.ecompvenience.com",
    github: "https://github.com/username/coin-project"
  },
  {
    title: "McQueen's Detailing",
    description: "Full e‑commerce car garage platform built with Astro, Express/Node.js and Stripe for secure checkout, product management, and order processing. Features comprehensive admin dashboard and inventory management.",
    tech: ["Astro", "Express", "Node.js", "Stripe", "TypeScript", "MongoDB", "Admin Dashboard"],
    link: "https://www.mcqueensdetailing.eu/",
    github: "https://github.com/username/javascript-advanced"
  }
];

export default function Projects({ className }: ProjectsProps) {
  const arrowPath =
    'M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z';

  const ArrowIcon = () => (
    <span className={styles.buttonIconWrap} aria-hidden>
      <svg
        className={styles.buttonIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={arrowPath} />
      </svg>
      <svg
        className={`${styles.buttonIcon} ${styles.buttonIconCopy}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={arrowPath} />
      </svg>
    </span>
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
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.techCarouselContainer}>
                    <div className={styles.techCarousel}>
                      <div className={styles.techCarouselTrack}>
                        {/* First set of tech tags */}
                        {project.tech.map((technology, techIndex) => (
                          <span key={`${index}-${techIndex}-1`} className={styles.techTag}>
                            {technology}
                          </span>
                        ))}
                        {/* Duplicate set for seamless infinite scroll */}
                        {project.tech.map((technology, techIndex) => (
                          <span key={`${index}-${techIndex}-2`} className={styles.techTag}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className={styles.cardDescription}>{project.description}</p>
                
                <div className={styles.metaRow}>
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
