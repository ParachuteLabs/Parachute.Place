import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import deviceImage from '@/assets/device-image.jpg';

const NewsletterSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would integrate with your newsletter service
    toast({
      title: "Thank you for subscribing!",
      description: "We'll keep you updated on our journey.",
    });
    
    setName('');
    setEmail('');
  };

  return (
    <section className="py-20 bg-parachute-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Find your place
              <span className="block bg-parachute-yellow px-2 py-1 mt-2 inline-block">
                Parachute
              </span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-parachute-gray/30 rounded-none h-12"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-parachute-gray/30 rounded-none h-12"
              />
              <Button 
                type="submit" 
                variant="parachute" 
                size="lg" 
                className="w-full h-12"
              >
                Let's Begin.
              </Button>
            </form>
            
            <div className="text-sm text-parachute-gray space-y-1">
              <p>© Parachute Labs, A Public Benefit Corp.</p>
              <p>All Rights Reserved.</p>
              <p className="mt-4">
                Reach out at <a href="mailto:hello@parachute.place" className="underline">hello@parachute.place</a>
              </p>
            </div>
          </div>
          
          {/* Right Device Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={deviceImage}
                alt="Parachute voice recording device"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;