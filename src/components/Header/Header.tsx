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
        
        <div className={styles.cta}>
          <ThemeToggle className={styles.themeToggle} />
        </div>
      </div>
    </header>
  );
} 