import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/star.svg" alt="Soteriou" width={24} height={24} className={styles.logoImage} />

          <Link href="/" className={styles.logoLink}>
            Soteriou
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#work" className={styles.navLink}>Work</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </li>
          </ul>
        </nav>
        
        <div className={styles.cta}>
          <ThemeToggle className={styles.themeToggle} />
          <button className={styles.ctaButton}>
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
} 