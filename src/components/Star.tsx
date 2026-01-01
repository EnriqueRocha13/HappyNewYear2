import React from 'react';

const Star: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-spin-slow"
      >
        <polygon
          points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
          fill="url(#starGradient)"
          stroke="#fbbf24"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse"></div>
    </div>
  );
};

export default Star;