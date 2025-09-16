import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import heroImage from '@/assets/hero-voice-recording-new.jpg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Logo className="text-2xl" />
              <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                <span className="relative">
                  Connected tools for
                  <span className="block bg-parachute-yellow px-2 py-1 mt-2 inline-block">connected thought</span>
                </span>
              </h1>
            </div>
            <Button variant="parachute" size="lg" className="px-8 py-4 text-base rounded-full" onClick={() => document.querySelector('#about-section')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Learn More
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={heroImage} alt="Person using voice recording device in car" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;