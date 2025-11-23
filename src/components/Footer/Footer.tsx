import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const ArrowIcon = () => (
    <svg 
      className={styles.linkIcon} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
    </svg>
  );

  const XIcon = () => (
    <svg width="13" height="13" fill="none" viewBox="0 0 1200 1227" aria-hidden>
      <path fill="currentColor" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/>
    </svg>
  );

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Image 
                src="/star.svg" 
                alt="Soteriou" 
                width={32} 
                height={32} 
                className={styles.logoImage} 
              />
              <Link href="/" className={styles.logoLink}>
                <span className={styles.logoText}>Portfolio</span>
              </Link>
            </div>
            <p className={styles.tagline}>
              Crafting digital experiences that matter.
            </p>
          </div>
          
          <div className={styles.right}>
            <div className={styles.links}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Navigation</h4>
                <ul className={styles.linkList}>
                  <li>
                    <a href="#about" className={styles.link}>
                      <span>About</span>
                      <ArrowIcon />
                    </a>
                  </li>
                  <li>
                    <a href="#work" className={styles.link}>
                      <span>Work</span>
                      <ArrowIcon />
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className={styles.link}>
                      <span>Contact</span>
                      <ArrowIcon />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Connect</h4>
                <ul className={styles.linkList}>
                  <li>
                    <a href="https://github.com/axellstr" className={styles.link} target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                      <ArrowIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/alexandros-soteriou-4aa690229/" className={styles.link} target="_blank" rel="noopener noreferrer">
                      <span>LinkedIn</span>
                      <ArrowIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/7Afterlife" className={styles.link} target="_blank" rel="noopener noreferrer">
                      <XIcon />
                      <ArrowIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className={styles.meta}>
            <span className={styles.metaText}>Built with Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 