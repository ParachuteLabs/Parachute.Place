import React from 'react';
import parachuteLogo from '@/assets/parachute-logo.svg';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={parachuteLogo} 
        alt="Parachute Labs" 
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;