import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ overflowX: 'clip' }}>
      <Nav />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <InquiryForm />
      <Footer />
    </main>
  );
}
