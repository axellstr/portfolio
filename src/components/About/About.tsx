'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './About.module.css';
import CountUp from '@/components/CountUp';
import FunFactGlobe, { FUN_FACT_GLOBE_PLACE_COUNT } from './FunFactGlobe';

const FRANKFURT_TZ = 'Europe/Berlin';

function formatFrankfurtTime(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    timeZone: FRANKFURT_TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
}

function frankfurtTimeZoneShort(date: Date) {
  return (
    new Intl.DateTimeFormat('en-US', {
      timeZone: FRANKFURT_TZ,
      timeZoneName: 'short',
    })
      .formatToParts(date)
      .find((p) => p.type === 'timeZoneName')?.value ?? ''
  );
}

/** e.g. GMT+2 — shown beside local time */
function frankfurtGmtOffset(date: Date) {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: FRANKFURT_TZ,
      timeZoneName: 'shortOffset',
    }).formatToParts(date);
    const v = parts.find((p) => p.type === 'timeZoneName')?.value;
    if (v) return v;
  } catch {
    /* runtime without shortOffset */
  }
  return frankfurtTimeZoneShort(date);
}

function frankfurtMachineLocal(date: Date) {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: FRANKFURT_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
    .format(date)
    .replace(' ', 'T');
}

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  const [frankfurtNow, setFrankfurtNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setFrankfurtNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const startDate = new Date('2025-01-01T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
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
                        src="/ppf.jpeg"
                        alt="Alexandros Soteriou"
                        fill
                        sizes="(max-width: 480px) 50px, (max-width: 768px) 60px, 100px"
                        className={styles.profileAvatarImage}
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
                    <a
                      href="/CV_Alexandros_Soteriou.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cvButton}
                      aria-label="Open CV PDF in a new tab"
                    >
                      CV
                      <svg
                        className={styles.cvIcon}
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                      </svg>
                    </a>
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
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                <div className={styles.learningCarouselTrack}>
                  {/* First set */}
                  <div className={styles.learningItem}>
                    <Image src="/icons/threejs.svg" alt="Three.js" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Three.js</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/webgl.svg" alt="WebGL" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>WebGL</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/after-effects.svg" alt="After Effects" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>After Effects</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/blender.svg" alt="Blender" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Blender</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/unreal-engine.svg" alt="Unreal Engine" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Unreal Engine</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/raspberry-pi.svg" alt="Raspberry Pi" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Raspberry Pi</span>
                  </div>
                  {/* Duplicate set for seamless infinite scroll */}
                  <div className={styles.learningItem}>
                    <Image src="/icons/threejs.svg" alt="Three.js" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Three.js</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/webgl.svg" alt="WebGL" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>WebGL</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/after-effects.svg" alt="After Effects" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>After Effects</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/blender.svg" alt="Blender" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Blender</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/unreal-engine.svg" alt="Unreal Engine" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Unreal Engine</span>
                  </div>
                  <div className={styles.learningItem}>
                    <Image src="/icons/raspberry-pi.svg" alt="Raspberry Pi" width={24} height={24} className={styles.learningIcon} />
                    <span className={styles.learningName}>Raspberry Pi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Globe card */}
          <div
            className={styles.funFactCard}
            role="region"
            aria-label="Current location and rotating globe with cities visited"
          >
            <div className={styles.funFactInner}>
              <div className={styles.funFactLocation}>
                <p className={styles.funFactLocationEyebrow}>Current location</p>
                <p className={styles.funFactLocationCity} id="fun-fact-city">
                  Frankfurt, Germany
                </p>
                <div className={styles.funFactLocationTimeRow}>
                  <span className={styles.funFactLocationTimeLabel}>Local time</span>
                  <time
                    className={styles.funFactLocationTime}
                    dateTime={frankfurtMachineLocal(frankfurtNow)}
                    suppressHydrationWarning
                  >
                    {formatFrankfurtTime(frankfurtNow)}
                    <span className={styles.funFactLocationTz}>
                      {' '}
                      {frankfurtGmtOffset(frankfurtNow)}
                    </span>
                  </time>
                </div>
                <p className={styles.funFactLocationFoot}>
                  {FUN_FACT_GLOBE_PLACE_COUNT} cities on the globe — places I&apos;ve been so far.
                </p>
              </div>
              <div className={styles.funFactGlobeWrap}>
                <FunFactGlobe className={styles.funFactGlobeCanvas} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 