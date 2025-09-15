import Hero from '@/components/Hero';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import AboutSection from '@/components/AboutSection';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatWeDoSection />
      <AboutSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
