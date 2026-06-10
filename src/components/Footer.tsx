export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4"
      style={{ background: '#0D0A1A', borderTop: '1px solid rgba(109,40,217,0.1)' }}
    >
      <span
        className="font-black uppercase tracking-widest text-sm"
        style={{
          background: 'linear-gradient(90deg, #fff 50%, #A855F7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Drei Studio
      </span>
      <p className="text-xs font-light" style={{ color: '#C4B5FD', opacity: 0.5 }}>
        © 2026 Drei Studio. All rights reserved.
      </p>
      <a
        href="mailto:yhel.tucay03@gmail.com"
        className="text-xs font-medium uppercase tracking-widest hover:opacity-80 transition-opacity"
        style={{ color: '#A855F7' }}
      >
        yhel.tucay03@gmail.com
      </a>
    </footer>
  );
}
