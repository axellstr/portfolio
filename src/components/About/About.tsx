'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './About.module.css';
import { useRouter } from 'next/navigation';

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  const { theme } = useTheme();

  const router = useRouter();

  const handleOpenCV = () => {
    router.push('/cv');
  };

  return (
    <section className={`${styles.about} ${className || ''}`} id="about">
      <div className={styles.container}>

        <div className={styles.bentoBox}>
          {/* Main Profile Card - Professional Design */}
          <div className={styles.profileCard}>
            <div className={styles.profileContent}>
              <div className={styles.profileTextColumn}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileTitleRow}>
                    <div className={styles.profileAvatar}>
                      <Image 
                        src="/ppf3.png" 
                        alt="Alexandros Soteriou" 
                        width={100} 
                        height={100} 
                        className={styles.profileAvatar}
                        priority
                      />
                    </div>
                    <h2 className={styles.profileTitle}>Alexandros Soteriou</h2>
                  </div>
                  <p className={styles.profileSubtitle}>Full-Stack Developer & UI/UX Designer</p>
                </div>
                
                <div className={styles.profileBody}>
                  <p className={styles.profileDescription}>
                    Specialized in building scalable web applications with modern technologies. 
                    I combine technical expertise with design thinking to create digital experiences 
                    that are both beautiful and performant.
                    <br></br>
                    <br></br>
                    With a passion for clean code and 
                    innovative solutions, I focus on delivering exceptional user experiences 
                    through thoughtful development and design.
                  </p>
                </div>
                
                <div className={styles.profileFooter}>
                  <div className={styles.profileActions}>
                    <div></div>
                    <button 
                      onClick={handleOpenCV}
                      className={styles.cvButton}
                      aria-label="View CV"
                    >
                      <svg 
                        className={styles.cvIcon} 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={styles.skillsCard}>
            <h3 className={styles.cardTitle}>Techstack</h3>
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                <div className={styles.carouselTrack}>
                  {/* First set of skills */}
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
                  
                  {/* Duplicate set for seamless infinite scroll */}
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
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>10+</span>
                <span className={styles.experienceLabel}>Technologies</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>5+</span>
                <span className={styles.experienceLabel}>Clients</span>
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

          {/* Fun Fact Card with Vinci PNG */}
          <div className={styles.funFactCard}>
            <div className={styles.funFactContent}>
              <h3 className={styles.cardTitle}>Fun Fact</h3>
              <p className={styles.funFactText}>
                I love combining creativity with code to build unique digital experiences! ✨
              </p>
            </div>
            {/* Vinci PNG inside the fun fact card */}
            <div className={styles.vinciInCard}>
              <Image 
                src="/Vinci.png" 
                alt="Da Vinci Vitruvian Man ornament" 
                width={300} 
                height={300} 
                className={`${styles.vinciSvg} ${theme === 'dark' ? styles.vinciDark : styles.vinciLight}`}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 