import React, { useState, useRef, useCallback } from 'react';
import Door from './components/Door';
import Star from './components/Star';
import CountdownTimer from './components/CountdownTimer';
import FireworksOverlay from './components/FireworksOverlay';
import StarryBackground from './components/StarryBackground';
import FloatingSign from './components/FloatingSign';
import { TARGET_DATE, CHRISTMAS_MUSIC_URL, LAB_NAME } from './constants';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.warn("Audio play blocked", e));
    }
  };

  const onCountdownEnd = useCallback(() => {
    setIsFinished(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0c0c0c] overflow-hidden flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-900 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-900 rounded-full blur-[100px]"></div>
      </div>

      <audio ref={audioRef} src={CHRISTMAS_MUSIC_URL} loop />

      <div className="z-20 flex flex-col items-center w-full max-w-lg">
        <div className="door-perspective w-full aspect-[2/3] sm:aspect-[3/4] min-h-[450px] max-h-[85vh] relative">
          
          {! isOpen && (
            <div className="absolute inset-x-0 top-8 sm:top-12 z-50 flex justify-center pointer-events-none">
              <div className="transform scale-90 sm:scale-100 origin-top">
                <FloatingSign />
              </div>
            </div>
          )}

          <Door isOpen={isOpen} onOpen={handleOpenDoors}>
            <div className="relative flex flex-col items-center justify-center h-full w-full p-4 space-y-6 sm:space-y-10 overflow-hidden">
              <StarryBackground />
              
              <div className="relative z-10 flex flex-col items-center transform scale-90 sm:scale-110">
                <Star />
              </div>
              
              <div className="relative z-10 text-center w-full px-2">
                <p className="text-[10px] sm:text-base font-cinzel text-yellow-400 tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  ESTO FALTA PARA EL 2026
                </p>
                <CountdownTimer targetDate={TARGET_DATE} onEnd={onCountdownEnd} />
              </div>

              <div className="relative z-10 text-center px-4">
                <p className="text-[10px] sm:text-sm font-light text-slate-300 italic opacity-80">
                  Feliz año nuevo te desea
                </p>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-100 drop-shadow-[0_4px_8px_rgba(234,179,8,0.5)]">
                  {LAB_NAME}
                </h1>
              </div>
            </div>
          </Door>
        </div>
      </div>

      {isFinished && <FireworksOverlay />}
    </div>
  );
};

export default App;