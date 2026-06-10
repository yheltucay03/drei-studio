'use client';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const ABOUT_TEXT = "We build high-performance, conversion-focused websites for PH businesses — from presale real estate sites to brand landing pages. Fast delivery, mobile-first, and designed to turn visitors into leads.";

const DECO_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none',
    fadeX: -80,
    fadeDelay: 0.1,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none',
    fadeX: 80,
    fadeDelay: 0.15,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[80px] sm:w-[110px] md:w-[150px] pointer-events-none',
    fadeX: -80,
    fadeDelay: 0.25,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[90px] sm:w-[130px] md:w-[170px] pointer-events-none',
    fadeX: 80,
    fadeDelay: 0.3,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden"
      style={{ background: '#09090F' }}
    >
      {/* Decorative corner images */}
      {DECO_IMAGES.map((img, i) => (
        <FadeIn key={i} delay={img.fadeDelay} x={img.fadeX} y={0} duration={0.9} className={img.className}>
          <img src={img.src} alt="" className="w-full" />
        </FadeIn>
      ))}

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
        >
          About Us
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <div className="mt-10 sm:mt-14 md:mt-16 mb-16 sm:mb-20 md:mb-24 max-w-[540px] text-center">
        <AnimatedText
          text={ABOUT_TEXT}
          className="font-medium leading-relaxed text-center"
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        />
      </div>

      <ContactButton />
    </section>
  );
}
