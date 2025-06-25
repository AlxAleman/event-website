import { useRef, useEffect } from "react";

function EventsMarquee() {
  // Pausa animación en hover (opcional)
  const marqueeRef = useRef(null);
  useEffect(() => {
    const marquee = marqueeRef.current;
    function pause() { marquee.style.animationPlayState = "paused"; }
    function play() { marquee.style.animationPlayState = "running"; }
    marquee.addEventListener("mouseenter", pause);
    marquee.addEventListener("mouseleave", play);
    return () => {
      marquee.removeEventListener("mouseenter", pause);
      marquee.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden pt-12 pb-6 select-none" style={{ minHeight: 250 }}>
      {/* Label Overview */}
      <div className="absolute left-8 top-4 z-30">
        <span className="bg-yellow-400 text-[#181d43] font-bold py-1 px-4 rounded-md text-xs shadow">OVERVIEW</span>
      </div>
      {/* FONDO - Marquee de EVO EVENTS más pequeño y translúcido */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div
          ref={marqueeRef}
          className="flex animate-marquee-30s whitespace-nowrap"
          style={{ opacity: 0.15, filter: "blur(2px)" }}
        >
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="mx-10 text-[4vw] font-extrabold uppercase text-white/70"
              style={{
                textShadow: "0 0 8px #60aaff, 0 0 2px #fff",
                letterSpacing: "-0.04em",
                fontStyle: "italic"
              }}
            >
              EVO EVENTS
            </span>
          ))}
        </div>
      </div>
      {/* TEXTO GRANDE, centrado, estático y con glow fuerte */}
      <div className="relative z-20 flex items-center justify-center py-10">
        <span
          className="text-[6vw] md:text-[4vw] font-extrabold uppercase text-white text-center"
          style={{
            textShadow: "0 0 20px #fff, 0 2px 30px #60aaff, 0 0 12px #fff",
            letterSpacing: "-0.03em",
            filter: "brightness(0.79)",
            fontStyle: "italic"
          }}
        >
          EVO EVENTS
        </span>
      </div>
      {/* Descripción centrada abajo */}
      <div className="relative z-30 flex flex-col items-center max-w-2xl mx-auto px-6 -mt-2">
        <p className="text-white/90 text-lg md:text-xl mb-4 text-center font-medium">
          From its humble beginnings in California, the Evolution Championship Series (Evo)
          has grown to encompass a year-round portfolio of premier fighting game events around the world.
        </p>
        <p className="text-white/60 text-base md:text-lg text-center">
          Learn more about our upcoming events:
        </p>
      </div>
    </div>
  );
}

export default EventsMarquee;