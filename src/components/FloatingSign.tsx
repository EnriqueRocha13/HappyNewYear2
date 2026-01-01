import React from 'react';

const FloatingSign: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center animate-bounce">
      {/* Cadena */}
      <div className="w-0.5 h-8 bg-gradient-to-b from-yellow-700 to-yellow-800 mb-1"></div>
      
      {/* Letrero */}
      <div className="bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 px-6 py-3 rounded-lg border-2 border-yellow-600 shadow-2xl relative">
        {/* Detalles de madera */}
        <div className="absolute inset-1 border border-yellow-700/30 rounded"></div>
        
        <p className="font-cinzel text-yellow-300 text-sm sm:text-base md:text-lg font-bold tracking-wider text-center drop-shadow-lg relative z-10">
          ¡Bienvenido! 
        </p>
      </div>
    </div>
  );
};

export default FloatingSign;