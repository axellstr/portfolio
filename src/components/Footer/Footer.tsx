import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Portfolio</span>
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
                  <li><a href="#about" className={styles.link}>About</a></li>
                  <li><a href="#work" className={styles.link}>Work</a></li>
                  <li><a href="#contact" className={styles.link}>Contact</a></li>
                </ul>
              </div>
              
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Connect</h4>
                <ul className={styles.linkList}>
                  <li>
                    <a href="https://github.com" className={styles.link} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" className={styles.link} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" className={styles.link} target="_blank" rel="noopener noreferrer">
                      Twitter
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