import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center">
        <span className="text-xl font-medium text-parachute-black">Parachute</span>
        <span className="ml-1 text-xl text-parachute-black">◌</span>
      </div>
    </div>
  );
};

export default Logo;