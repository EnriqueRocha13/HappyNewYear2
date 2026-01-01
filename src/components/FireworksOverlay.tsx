import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const FireworksOverlay: React.FC = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval:  any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ... defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 text-center animate-bounce">
        <h2 className="text-5xl md:text-7xl font-cinzel text-yellow-400 font-bold drop-shadow-lg">
          ¡FELIZ 2026!
        </h2>
      </div>
    </div>
  );
};

export default FireworksOverlay;