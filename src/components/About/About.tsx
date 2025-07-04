import Image from 'next/image';
import styles from './About.module.css';

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  return (
    <section className={`${styles.about} ${className || ''}`} id="about">
      <div className={styles.container}>
        <div className={styles.bentoBox}>
          {/* Main Profile Card */}
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <h2 className={styles.profileTitle}>About Me</h2>
              <p className={styles.profileSubtitle}>Full-Stack Developer & Designer</p>
            </div>
            <p className={styles.profileDescription}>
              I&apos;m a passionate developer who loves creating beautiful, functional web experiences. 
              With expertise in modern technologies and a keen eye for design, I bring ideas to life 
              through clean code and intuitive user interfaces.
            </p>
          </div>

          {/* Skills Grid */}
          <div className={styles.skillsCard}>
            <h3 className={styles.cardTitle}>Techstack</h3>
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                <div className={styles.carouselTrack}>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/react.svg" 
                      alt="React" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                      priority
                    />
                    <span className={styles.skillName}>React</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/Nextjs.svg" 
                      alt="Next.js" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                      priority
                    />
                    <span className={styles.skillName}>Next.js</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/typescript (1).svg" 
                      alt="TypeScript" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>TypeScript</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/node.svg" 
                      alt="Node.js" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Node.js</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/css (1).svg" 
                      alt="CSS" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>CSS</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/javascript (1).svg" 
                      alt="JavaScript" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>JavaScript</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/html5.svg" 
                      alt="HTML5" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>HTML5</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/tailwindcss.svg" 
                      alt="Tailwind CSS" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Tailwind</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/git (1).svg" 
                      alt="Git" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Git</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/github_dark.svg" 
                      alt="GitHub" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>GitHub</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/figma (2).svg" 
                      alt="Figma" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Figma</span>
                  </div>
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/supabase.svg" 
                      alt="Supabase" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Supabase</span>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className={styles.experienceCard}>
            <h3 className={styles.cardTitle}>Experience</h3>
            <div className={styles.experienceList}>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>3+</span>
                <span className={styles.experienceLabel}>Years Coding</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>20+</span>
                <span className={styles.experienceLabel}>Projects</span>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className={styles.languagesCard}>
            <h3 className={styles.cardTitle}>Languages</h3>
            <div className={styles.languagesList}>
              <span className={styles.language}>Greek</span>
              <span className={styles.language}>English</span>
              <span className={styles.language}>Russian</span>
              <span className={styles.language}>German</span>
            </div>
          </div>

          {/* Currently Learning Card */}
          <div className={styles.learningCard}>
            <h3 className={styles.cardTitle}>Currently Learning</h3>
            <div className={styles.learningList}>
              <span className={styles.learningItem}>Three.js</span>
              <span className={styles.learningItem}>WebGL</span>
              <span className={styles.learningItem}>Rust</span>
            </div>
          </div>

          {/* Fun Fact Card */}
          <div className={styles.funFactCard}>
            <h3 className={styles.cardTitle}>Fun Fact</h3>
            <p className={styles.funFactText}>
              I love combining creativity with code to build unique digital experiences! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 