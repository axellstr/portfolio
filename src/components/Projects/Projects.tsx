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
    title: "E-Compvenience - Frontend",
    description: "A comprehensive cryptocurrency project focusing on frontend development. Built with modern web technologies to provide an intuitive user experience for crypto enthusiasts and traders.",
    tech: ["React.js", "Next.js", "TypeScript", "CSS3", "JavaScript"],
    link: "https://example.com",
    github: "https://github.com/username/coin-project"
  },
  {
    title: "McQueen's Detailing - Fullstack",
    description: "Advanced JavaScript project demonstrating mastery of complex concepts including async/await, closures, prototypes, and modern ES6+ features. Showcases deep understanding of JavaScript fundamentals.",
    tech: ["JavaScript", "ES6+", "Node.js", "HTML5", "CSS3"],
    github: "https://github.com/username/javascript-advanced"
  },
  {
    title: "The Spirit Lab - Frontend",
    description: "Collection of projects completed during Coursera Front-End Developer certification. Demonstrates proficiency in responsive design, modern frameworks, and best practices.",
    tech: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://example.com"
  },
  {
    title: "Slotsplanet - Fullstack",
    description: "Internal dashboard for managing customer technical support tickets with real-time updates, analytics, and reporting capabilities. Built for B2B gaming platform environments.",
    tech: ["React", "TypeScript", "Node.js", "REST APIs"],
    link: "https://example.com"
  }
];

export default function Projects({ className }: ProjectsProps) {
  return (
    <section className={`${styles.projects} ${className || ''}`} id="work">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.subtitle}>
            A collection of projects showcasing my development skills and technical expertise
          </p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
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
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className={styles.linkSecondary}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 