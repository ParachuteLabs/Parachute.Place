import React from 'react';

const NewsletterSection = () => {

  return (
    <section className="py-20 bg-parachute-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            Find your place with
            <span className="block bg-parachute-yellow px-2 py-1 mt-2 inline-block">
              Parachute◌
            </span>
          </h2>
          
          <div className="flex justify-center">
            <iframe 
              src="https://parachutelabs.substack.com/embed" 
              width="480" 
              height="320" 
              style={{border: '1px solid #EEE', background: 'white'}} 
              frameBorder="0" 
              scrolling="no"
              className="max-w-full"
            />
          </div>
          
          <div className="text-sm text-parachute-gray space-y-1">
            <p>© Parachute◌ Labs, A Public Benefit Corp.</p>
            <p>All Rights Reserved.</p>
            <p className="mt-4">
              Reach out, say <a href="mailto:hello@parachute.place" className="underline decoration-1 border-b border-black hover:text-[#868686] transition-colors">hello@parachute.place</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;