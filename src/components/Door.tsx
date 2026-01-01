import React, { ReactNode } from 'react';

interface DoorProps {
  isOpen: boolean;
  onOpen:  () => void;
  children: ReactNode;
}

const Door: React.FC<DoorProps> = ({ isOpen, onOpen, children }) => {
  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onClick={onOpen}
    >
      {/* Contenido detrás de las puertas - SOLO SE VE CUANDO ESTÁN ABIERTAS */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden rounded-lg">
        {children}
      </div>

      {/* Puerta Izquierda */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 border-r border-yellow-900/50 transition-all duration-1000 ease-in-out origin-left rounded-l-lg shadow-2xl ${
          isOpen ? '' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          zIndex: 50,
          transform: isOpen ? 'perspective(1200px) rotateY(-120deg)' : 'perspective(1200px) rotateY(0deg)',
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 relative">
          {/* Marco exterior decorativo */}
          <div className="absolute inset-3 border-2 border-yellow-600/40 rounded"></div>
          
          {/* Vitral superior - forma de arco */}
          <div className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 w-16 h-20 sm:w-20 sm:h-24">
            <div className="w-full h-full rounded-t-full border-2 border-yellow-600/60 bg-gradient-to-br from-yellow-500/20 via-amber-600/30 to-red-700/20 backdrop-blur-sm relative overflow-hidden">
              {/* Divisiones del vitral */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-700/40"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-yellow-700/40"></div>
              <div className="absolute inset-2 rounded-t-full border border-yellow-500/30"></div>
              {/* Brillo del vitral */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-300/40 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Textura de madera */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)',
          }}></div>

          {/* Vetas de madera */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(139,69,19,0.3) 40px, rgba(139,69,19,0.3) 43px)',
          }}></div>

          {/* Manija derecha */}
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="w-3 h-8 sm:h-12 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full shadow-lg border border-yellow-600"></div>
            <div className="w-4 h-3 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Puerta Derecha */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-900 via-amber-800 to-amber-950 border-l border-yellow-900/50 transition-all duration-1000 ease-in-out origin-right rounded-r-lg shadow-2xl ${
          isOpen ? '' : ''
        }`}
        style={{
          transformStyle:  'preserve-3d',
          backfaceVisibility: 'hidden',
          zIndex:  50,
          transform: isOpen ? 'perspective(1200px) rotateY(120deg)' : 'perspective(1200px) rotateY(0deg)',
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6 relative">
          {/* Marco exterior decorativo */}
          <div className="absolute inset-3 border-2 border-yellow-600/40 rounded"></div>
          
          {/* Vitral superior - forma de arco */}
          <div className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 w-16 h-20 sm:w-20 sm:h-24">
            <div className="w-full h-full rounded-t-full border-2 border-yellow-600/60 bg-gradient-to-bl from-yellow-500/20 via-amber-600/30 to-red-700/20 backdrop-blur-sm relative overflow-hidden">
              {/* Divisiones del vitral */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-700/40"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-yellow-700/40"></div>
              <div className="absolute inset-2 rounded-t-full border border-yellow-500/30"></div>
              {/* Brillo del vitral */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-300/40 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Textura de madera */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)',
          }}></div>

          {/* Vetas de madera */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(139,69,19,0.3) 40px, rgba(139,69,19,0.3) 43px)',
          }}></div>

          {/* Manija izquierda */}
          <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="w-3 h-8 sm:h-12 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full shadow-lg border border-yellow-600"></div>
            <div className="w-4 h-3 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Bisagra central cuando las puertas están cerradas */}
      {! isOpen && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-900 via-yellow-800 to-yellow-900 shadow-lg" style={{ zIndex: 51 }}>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-6 bg-yellow-700 rounded-sm shadow-md"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-6 bg-yellow-700 rounded-sm shadow-md"></div>
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-6 bg-yellow-700 rounded-sm shadow-md"></div>
        </div>
      )}

      {/* Texto de instrucción - SOLO cuando las puertas están cerradas */}
      {!isOpen && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none" style={{ zIndex: 60 }}>
          <p className="text-yellow-400 text-xs sm:text-sm font-cinzel tracking-widest animate-pulse drop-shadow-lg">
            Haz clic para abrir
          </p>
        </div>
      )}
    </div>
  );
};

export default Door;