import { useEffect, useState } from "react";

function getTimeLeft(target) {
  const now = new Date();
  const then = new Date(target);
  const diff = then - now;

  // Si ya pasó el evento, regresa ceros
  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function Countdown({ targetDate }) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Si time está vacío, evita renderizar
  if (!time) return null;

  return (
    <div className="flex gap-10 md:gap-12 mt-2 select-none">
      <div className="flex flex-col items-center min-w-[70px]">
        <span className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white drop-shadow-md">
          {time.days}
        </span>
        <span className="text-base font-medium tracking-wider text-white/70 mt-1 uppercase">Days</span>
      </div>
      <div className="flex flex-col items-center min-w-[70px]">
        <span className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white drop-shadow-md">
          {time.hours}
        </span>
        <span className="text-base font-medium tracking-wider text-white/70 mt-1 uppercase">Hours</span>
      </div>
      <div className="flex flex-col items-center min-w-[70px]">
        <span className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white drop-shadow-md">
          {time.minutes}
        </span>
        <span className="text-base font-medium tracking-wider text-white/70 mt-1 uppercase">Min</span>
      </div>
      <div className="flex flex-col items-center min-w-[70px]">
        <span className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white drop-shadow-md">
          {time.seconds}
        </span>
        <span className="text-base font-medium tracking-wider text-white/70 mt-1 uppercase">Sec</span>
      </div>
    </div>
  );
}

export default Countdown;
