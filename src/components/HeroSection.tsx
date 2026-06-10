'use client';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import LaptopMockup from './LaptopMockup';
import ContactButton from './ContactButton';

export default function HeroSection() {
  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-10 lg:px-16 py-16 lg:py-0 gap-12 lg:gap-0"
      style={{ overflowX: 'clip', position: 'relative' }}
    >
      {/* Background effects */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 70% at 65% 50%, rgba(45,27,105,0.2), transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.045) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        style={{
          position: 'absolute', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)',
          animation: 'scan 8s linear infinite',
          pointerEvents: 'none',
        }}
      />

      {/* LEFT: Text */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Badge */}
        <FadeIn delay={0} y={20}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest w-fit"
            style={{
              borderColor: '#7C3AED',
              color: '#C4B5FD',
              animation: 'badgePulse 3s ease-in-out infinite',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#A855F7', animation: 'badgePulse 1.8s ease-in-out infinite' }}
            />
            PH-Based Web Studio
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.15} y={40}>
          <h1
            className="font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 72px)' }}
          >
            <span className="hero-heading block">Websites That Convert.</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #6D28D9 10%, #A855F7 40%, #E9D5FF 60%, #A855F7 80%, #6D28D9 100%)',
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}
            >
              Built for PH Businesses.
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.3} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-relaxed max-w-sm"
            style={{ color: '#D7E2EA', opacity: 0.65, fontSize: 'clamp(0.75rem, 1.4vw, 1rem)' }}
          >
            Conversion-focused landing pages and funnels built for PH businesses — delivered in 1–2 weeks.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.45} y={20}>
          <div className="flex gap-4 items-center flex-wrap">
            <ContactButton label="Get a Free Quote" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} />
            <button
              onClick={scrollToProjects}
              className="px-7 py-3 rounded-full border font-medium uppercase tracking-widest text-sm transition-colors duration-200 hover:bg-[#1A0E2E] hover:text-white"
              style={{ borderColor: 'rgba(109,40,217,0.5)', color: '#C4B5FD', background: 'transparent' }}
            >
              View Projects ↓
            </button>
          </div>
        </FadeIn>
      </div>

      {/* RIGHT: Magnetic floating laptop */}
      <FadeIn delay={0.6} y={30} className="relative z-10 flex justify-center items-center">
        <Magnet padding={140} strength={3}>
          <LaptopMockup />
        </Magnet>
      </FadeIn>
    </section>
  );
}
