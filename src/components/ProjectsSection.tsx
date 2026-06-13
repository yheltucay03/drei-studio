'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    category: 'Real Estate',
    name: 'One Lancaster Park',
    url: 'https://onelancasterpark.com',
    accentColor: '#A855F7',
    images: {
      topLeft: '/portfolio/olp-1.png',
      bottomLeft: '/portfolio/olp-2.png',
      right: '/portfolio/olp-3.png',
    },
  },
  {
    num: '02',
    category: 'Property Platform',
    name: 'Housellect',
    url: 'https://housellect.vercel.app',
    accentColor: '#00D4FF',
    images: {
      topLeft: '/portfolio/housellect-1.png',
      bottomLeft: '/portfolio/housellect-2.png',
      right: '/portfolio/housellect-3.png',
    },
  },
];

const TOTAL = PROJECTS.length;

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] relative" ref={cardRef}>
      <motion.div
        style={{
          scale,
          position: 'sticky',
          top: `${96 + index * 28}px`,
          transformOrigin: 'top center',
          border: '2px solid #D7E2EA',
          background: '#09090F',
        }}
        className="rounded-[40px] sm:rounded-[44px] md:rounded-[50px] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(2rem, 6vw, 70px)' }}
          >
            {project.num}
          </span>
          <div className="flex-1 px-3 sm:px-5">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </p>
            <p
              className="font-bold uppercase leading-tight"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', color: '#D7E2EA' }}
            >
              {project.name}
            </p>
          </div>
          <LiveProjectButton
            label="View Site ↗"
            onClick={() => window.open(project.url, '_blank')}
          />
        </div>

        {/* Image grid */}
        <div className="grid gap-3" style={{ gridTemplateColumns: '40% 60%' }}>
          <div className="flex flex-col gap-3">
            <div
              className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden"
              style={{
                height: 'clamp(90px, 14vw, 200px)',
                background: 'linear-gradient(135deg, #1A0E2E, #2D1B69)',
                border: '1px solid rgba(109,40,217,0.2)',
              }}
            >
              <img src={project.images.topLeft!} alt="" className="w-full h-full object-cover" />
            </div>
            <div
              className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden"
              style={{
                height: 'clamp(110px, 18vw, 260px)',
                background: 'linear-gradient(135deg, #1A0E2E, #2D1B69)',
                border: '1px solid rgba(109,40,217,0.2)',
              }}
            >
              <img src={project.images.bottomLeft!} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div
            className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden"
            style={{
              minHeight: 'clamp(200px, 32vw, 470px)',
              background: 'linear-gradient(135deg, #1A0E2E, #2D1B69)',
              border: '1px solid rgba(109,40,217,0.2)',
            }}
          >
            <img src={project.images.right!} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10"
      style={{ background: '#09090F' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)', marginBottom: 'clamp(3rem, 6vw, 7rem)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
