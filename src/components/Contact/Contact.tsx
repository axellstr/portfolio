import styles from './Contact.module.css';

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  return (
    <section className={`${styles.contact} ${className || ''}`} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let&apos;s Work Together</h2>
          <p className={styles.subtitle}>
            Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.formSection}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.input}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className={styles.input}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  className={styles.textarea}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.contactInfo}>
              <h3 className={styles.infoTitle}>Get In Touch</h3>
              <p className={styles.infoText}>
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you&apos;re a company looking for a web developer or an individual with a cool idea, 
                I&apos;d love to hear from you.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:soterioudev@gmail.com" className={styles.contactValue}>
                    soterioudev@gmail.com
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href="tel:+35796302800" className={styles.contactValue}>
                    +357 96302800
                  </a>
                </div>
                
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Cyprus</span>
                </div>
                
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Status</span>
                  <span className={styles.contactValue}>Available for work</span>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4 className={styles.socialTitle}>Connect With Me</h4>
              <div className={styles.socialGrid}>
                <a href="https://github.com/soterioudev" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/alexandros-soteriou" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://soteriou.dev" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
                <a href="mailto:soterioudev@gmail.com" className={styles.socialLink}>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 