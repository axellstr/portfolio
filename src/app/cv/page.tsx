import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Preview and download Alexandros Soteriou CV.',
};

export default function CVPage() {
  // Assets in /public
  const pdfPath = '/SoteriouCV.pdf';
  const svgPath = '/SoteriouCV.svg';

  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', flexDirection: 'column' }}>
        <h1 style={{ margin: 0, fontSize: '1.25rem', textAlign: 'center' }}>Curriculum Vitae</h1>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 8,
              border: '1px solid var(--color-border, #333)',
              color: 'var(--color-text, #fff)',
              textDecoration: 'none'
            }}
            aria-label="Open CV PDF in a new tab"
            title="Open PDF"
          >
            {/* External/open icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <path d="M15 3h6v6"/>
              <path d="M10 14 21 3"/>
            </svg>
          </a>
          <a
            href={pdfPath}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 8,
              border: '1px solid var(--color-border, #333)',
              color: 'var(--color-text, #fff)',
              textDecoration: 'none'
            }}
            aria-label="Download CV as PDF"
            title="Download PDF"
          >
            {/* Download icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, overflow: 'hidden', background: 'var(--color-bg, #000)', display: 'flex', justifyContent: 'center' }}>
        <img src={svgPath} alt="CV preview (SVG)" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent, #fe7f2d)', textDecoration: 'none' }}>
          {/* Home icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12L12 3l9 9"/>
            <path d="M9 21V12h6v9"/>
          </svg>
          Home
        </Link>
      </div>
    </main>
  );
}


