'use client';

import Image from 'next/image';
import styles from './About.module.css';
import { useRouter } from 'next/navigation';
import CountUp from '@/components/CountUp';

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {

  const router = useRouter();

  const handleOpenCV = () => {
    router.push('/cv');
  };

  // Calculate dynamic coffee count that increases by 1 each day
  // Start counting from today with base count of 777
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Get today's date as YYYY-MM-DD string for the start date
  const todayStr = today.toISOString().split('T')[0];
  const startDate = new Date(todayStr);
  startDate.setHours(0, 0, 0, 0);
  
  // Calculate difference in days (0 today, 1 tomorrow, etc.)
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Start at 777, increase by 1 each day
  const coffeeCount = 777 + diffDays;

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
                    <div className={styles.profileTitleWrapper}>
                      <h2 className={styles.profileTitle}>Alexandros Soteriou</h2>
                      <p className={styles.profileSubtitle}>Full-Stack Developer & UI/UX Designer</p>
                    </div>
                  </div>
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
                      src="/icons/adobe.svg" 
                      alt="Adobe" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Adobe</span>
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
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/vercel.svg" 
                      alt="Vercel" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Vercel</span>
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
                      src="/icons/adobe.svg" 
                      alt="Adobe" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Adobe</span>
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
                  <div className={styles.skillItem}>
                    <Image 
                      src="/icons/vercel.svg" 
                      alt="Vercel" 
                      width={32} 
                      height={32} 
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>Vercel</span>
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
                <span className={styles.experienceNumber}>
                  <CountUp
                    from={0}
                    to={4}
                    separator=","
                    direction="up"
                    duration={3}
                  />
                </span>
                <span className={styles.experienceLabel}>Years Coding</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>
                  <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={1}
                  />
                </span>
                <span className={styles.experienceLabel}>Projects</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>
                  <CountUp
                    from={0}
                    to={coffeeCount}
                    separator=","
                    direction="up"
                    duration={1}
                  />
                </span>
                <span className={styles.experienceLabel}>Coffees</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>
                  <CountUp
                    from={0}
                    to={6}
                    separator=","
                    direction="up"
                    duration={1}
                  />
                </span>
                <span className={styles.experienceLabel}>Certifications</span>
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
              <div className={styles.learningItem}>
                <Image 
                  src="/icons/threejs.svg" 
                  alt="Three.js" 
                  width={24} 
                  height={24} 
                  className={styles.learningIcon}
                />
                <span className={styles.learningName}>Three.js</span>
              </div>
              <div className={styles.learningItem}>
                <Image 
                  src="/icons/webgl.svg" 
                  alt="WebGL" 
                  width={24} 
                  height={24} 
                  className={styles.learningIcon}
                />
                <span className={styles.learningName}>WebGL</span>
              </div>
              <div className={styles.learningItem}>
                <Image 
                  src="/icons/after-effects.svg" 
                  alt="After Effects" 
                  width={24} 
                  height={24} 
                  className={styles.learningIcon}
                />
                <span className={styles.learningName}>After Effects</span>
              </div>
              <div className={styles.learningItem}>
                <Image 
                  src="/icons/blender.svg" 
                  alt="Blender" 
                  width={24} 
                  height={24} 
                  className={styles.learningIcon}
                />
                <span className={styles.learningName}>Blender</span>
              </div>
              <div className={styles.learningItem}>
                <Image 
                  src="/icons/unreal-engine.svg" 
                  alt="Unreal Engine" 
                  width={24} 
                  height={24} 
                  className={styles.learningIcon}
                />
                <span className={styles.learningName}>Unreal Engine</span>
              </div>
              <div className={styles.learningItem}>
                <Image 
                  src="/icons/raspberry-pi.svg" 
                  alt="Raspberry Pi" 
                  width={24} 
                  height={24} 
                  className={styles.learningIcon}
                />
                <span className={styles.learningName}>Raspberry Pi</span>
              </div>
            </div>
          </div>

          {/* Fun Fact Card */}
          <div className={styles.funFactCard}>
          </div>
        </div>
      </div>
    </section>
  );
} 