import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <span className="text-xl font-medium text-parachute-black">Parachute</span>
        <div className="absolute -top-1 -right-3 w-3 h-3 border-2 border-parachute-black rounded-full border-dashed"></div>
      </div>
    </div>
  );
};

export default Logo;