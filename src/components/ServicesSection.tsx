'use client';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Landing Pages',
    desc: 'Single-page, conversion-focused sites built to capture leads and drive inquiries — designed to make your offer impossible to ignore.',
  },
  {
    num: '02',
    name: 'Real Estate Funnels',
    desc: 'Presale and property sites with unit galleries, mortgage calculators, and lead capture — built for developers and agents.',
  },
  {
    num: '03',
    name: 'Full Websites',
    desc: 'Multi-page sites with blog, contact, and service pages. Clean architecture, SEO-ready, and fast on mobile.',
  },
  {
    num: '04',
    name: 'Brand + Web Design',
    desc: 'Visual identity and web presence together — logo direction, typography, color system, and a site that reflects your brand.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#FFFFFF', color: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)', color: '#0C0C0C', marginBottom: 'clamp(3rem, 6vw, 7rem)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-4 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12,12,12,0.15)' }}
            >
              <span
                className="font-black leading-none flex-shrink-0 w-[80px] sm:w-[110px] md:w-[140px] text-right"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', color: '#0C0C0C' }}
              >
                {service.num}
              </span>
              <div className="pt-1 sm:pt-2">
                <p
                  className="font-medium uppercase leading-none mb-2"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 1.8rem)', color: '#0C0C0C' }}
                >
                  {service.name}
                </p>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', color: 'rgba(12,12,12,0.6)' }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
