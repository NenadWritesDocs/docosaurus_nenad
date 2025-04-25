// src/pages/index.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <main className={styles.hero}>
      {/* Hero content boxed for readability */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Nenad Writes Docs</h1>
        <p className={styles.heroSubtitle}>Technical Writer. Documentation Specialist.</p>
        <p className={styles.heroDescription}>
          I create clean, efficient, user-focused documentation for humans.
        </p>

        <div className={styles.buttonContainer}>
          <Link to="/blog" className={styles.button}>
            Read Blog
          </Link>
          <Link to="/docs/Portfolio" className={styles.button}>
            Portfolio and CV
          </Link>
          <a href="mailto:nenadwritesdocs@gmail.com" className={styles.button}>
            Contact Me
          </a>
        </div>
      </div>

      {/* Footer sits above the hero overlay */}
      <footer className={styles.footer}>
        <p>
          <a
            href="https://github.com/nenadpajovic"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt="GitHub"
              className={styles.icon}
            />
            GitHub
          </a>
          {' | '}
          <a
            href="https://www.linkedin.com/in/nenadpajovic"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              alt="LinkedIn"
              className={styles.icon}
            />
            LinkedIn
          </a>
        </p>
        <p>© Nenad Pajović | Powered by Docusaurus</p>
      </footer>
    </main>
  );
}
