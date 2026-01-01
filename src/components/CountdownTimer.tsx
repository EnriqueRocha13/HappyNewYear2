import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate:  Date;
  onEnd: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onEnd();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math. floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onEnd]);

  if (!timeLeft) return null;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-0.5 sm:mx-2">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg w-10 h-12 sm:w-20 sm:h-24 flex items-center justify-center border border-white/10 shadow-lg overflow-hidden relative">
        <span className="text-lg sm:text-4xl font-bold font-cinzel text-yellow-500 tabular-nums">
          {value. toString().padStart(2, '0')}
        </span>
        <div className="absolute top-0 w-full h-px bg-white/10"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
      <span className="text-[8px] sm:text-xs uppercase tracking-tighter sm:tracking-widest mt-1 text-slate-500 font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <TimeUnit value={timeLeft.days} label="Días" />
      <TimeUnit value={timeLeft. hours} label="Hrs" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
};

export default CountdownTimer;