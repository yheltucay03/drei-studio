import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main style={{ overflowX: 'clip' }}>
      <Nav />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
    </main>
  );
}
