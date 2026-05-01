import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`${styles.hero} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Imagination, <span className={styles.accent}>structured.</span>
          </h1>
          
          <p className={styles.description}>
            From concept to code — crafting digital experiences that are clean, scalable, and expressive.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              View My Work
            </button>
            <button className={styles.secondaryButton}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Spinning Y2K SVG */}
      <div className={styles.spinningIcon}>
        <Image
          src="/y2k.svg"
          alt="Y2K decorative element"
          width={100}
          height={100}
          className={styles.iconImage}
          priority={false}
        />
      </div>

      {/* Spinning Globe SVG */}
      <div className={styles.spinningGlobe}>
        <Image
          src="/globe.svg"
          alt="Globe decorative element"
          width={150}
          height={150}
          className={styles.globeImage}
          priority={false}
        />
      </div>
    </section>
  );
} 