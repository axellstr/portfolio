'use client';
import React from 'react';
import styles from './Contact.module.css';

interface ContactProps {
  className?: string;
}

// Icon components
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 1200 1227" aria-hidden>
    <path fill="currentColor" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/>
  </svg>
);

export default function Contact({ className }: ContactProps) {
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');
  const [selectedSubject, setSelectedSubject] = React.useState<string>('Job Inquiry');

  const subjectOptions = [
    'Job Inquiry',
    'Collaboration',
    'General Question',
    'Other'
  ];

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      subject: selectedSubject,
      message: String(formData.get('message') || ''),
    };

    try {
      setSubmitStatus('sending');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      await res.json();
      if (!res.ok) {
        setSubmitStatus('idle');
        return; // Keep silent per request
      }
      setSubmitStatus('sent');
      form.reset();
    } catch {
      setSubmitStatus('idle'); // Keep silent per request
    }
  }

  return (
    <section className={`${styles.contact} ${className || ''}`} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let&apos;s talk about it</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.formSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                <label className={styles.label}>Subject</label>
                <div className={styles.subjectTabs}>
                  {subjectOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`${styles.subjectTab} ${selectedSubject === option ? styles.subjectTabActive : ''}`}
                      onClick={() => setSelectedSubject(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
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
              
              <button type="submit" className={styles.submitButton} disabled={submitStatus !== 'idle'}>
                {submitStatus === 'sent' ? 'Sent ✓' : submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
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
                  <a href="mailto:soteriou.dev@gmail.com" className={styles.contactValue}>
                    soteriou.dev@gmail.com
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
                  <span className={styles.contactValue}>
                    <span className={styles.statusDot} />
                    Available for work
                  </span>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4 className={styles.socialTitle}>Connect With Me</h4>
              <div className={styles.socialGrid}>
                <a href="https://github.com/axellstr" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/alexandros-soteriou-4aa690229/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/7Afterlife" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <XIcon />
                
                </a>
                <a href="mailto:soteriou.dev@gmail.com" className={styles.socialLink}>
                  <EmailIcon />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 