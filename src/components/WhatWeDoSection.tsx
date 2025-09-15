import React from 'react';
import { Button } from '@/components/ui/button';
import speakImage from '@/assets/speak-feature.jpg';
import annotateImage from '@/assets/annotate-feature.jpg';
import simplifyImage from '@/assets/simplify-feature.jpg';

const WhatWeDoSection = () => {
  const features = [
    {
      title: "Speak",
      subtitle: "Locally.",
      description: "Tap to start recording.",
      image: speakImage,
      buttonText: "Find Your Voice"
    },
    {
      title: "Annotate",
      subtitle: "Anytime.",
      description: "Funnel to-do's, now.",
      image: annotateImage,
      buttonText: "Organize Your Story"
    },
    {
      title: "Simplify",
      subtitle: "Life.",
      description: "Slow down. Catch up.",
      image: simplifyImage,
      buttonText: "Own Your Path"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4">
            What <span className="bg-parachute-yellow px-2 py-1">Parachute</span> does for you.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-light">{feature.title}</h3>
                  <p className="text-lg text-parachute-gray">{feature.subtitle}</p>
                  <p className="text-base text-parachute-gray">{feature.description}</p>
                </div>
                
                <Button variant="parachute" size="sm" className="rounded-full">
                  {feature.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;