import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
