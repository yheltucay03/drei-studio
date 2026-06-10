'use client';
import ContactButton from './ContactButton';

export default function Nav() {
  function scrollToInquiry() {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 pb-4 sticky top-0 z-50"
      style={{
        background: 'rgba(9,9,15,0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(109,40,217,0.15)',
      }}
    >
      <span
        className="text-base md:text-lg font-black uppercase tracking-widest"
        style={{
          background: 'linear-gradient(90deg, #fff 50%, #A855F7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Drei Studio
      </span>

      <div className="hidden sm:flex gap-8 md:gap-12">
        {['About', 'Services', 'Projects', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm md:text-base font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#D7E2EA' }}
          >
            {link}
          </a>
        ))}
      </div>

      <ContactButton
        label="Get a Quote"
        onClick={scrollToInquiry}
        className="text-xs md:text-sm px-6 py-2.5 md:px-8 md:py-3"
        style={{ animation: 'borderGlow 3s ease-in-out infinite' }}
      />
    </nav>
  );
}
