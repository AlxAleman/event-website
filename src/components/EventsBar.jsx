import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const events = [
  { 
    name: "EVO Japan", 
    status: "ENDED", 
    date: "Tokyo • Nov 22-24", 
    link: "/events/japan" 
  },
  { 
    name: "EVO USA", 
    status: "UPCOMING", 
    date: "Las Vegas • Aug 15-17", 
    link: "/events/usa" 
  },
  { 
    name: "EVO France", 
    status: "UPCOMING", 
    date: "Nice • Oct 10-12", 
    link: "/events/france" 
  },
  { 
    name: "EVO Singapore", 
    status: "TBA", 
    date: "Singapore • TBA", 
    link: "/events/singapore" 
  },
];

function badgeStyle(status, stuck) {
  if (status === "ENDED")
    return stuck
      ? "bg-gray-800 text-white border border-gray-500"
      : "bg-red-600 text-white border border-red-800 shadow-md";
  if (status === "UPCOMING")
    return stuck
      ? "bg-blue-700 text-white border border-blue-400"
      : "bg-green-500 text-white border border-green-800 shadow-md animate-pulse";
  if (status === "TBA")
    return stuck
      ? "bg-gray-300 text-gray-600 border border-gray-400"
      : "bg-gray-500 text-white border border-gray-600";
  return "bg-gray-200 text-gray-700 border-gray-400";
}

function EventsBar() {
  const sentinelRef = useRef(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-1 w-full" />
      <motion.section
        className={`
          sticky top-14 sm:top-16 z-40 w-full transition-all duration-300
          ${stuck
            ? "bg-white/95 shadow-2xl backdrop-blur-md border-gray-200/60 py-1.5 sm:py-2"
            : "bg-gray-950/80 border border-blue-900 py-4 sm:py-6"
          }
        `}
        initial={false}
        animate={stuck ? { scale: 0.98 } : { scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ backdropFilter: stuck ? "blur(8px)" : "none" }}
      >
        {/* Contenedor con scroll horizontal sin scrollbar visible */}
        <div
          className={`
            flex flex-row gap-2 sm:gap-3 lg:gap-4 overflow-x-auto px-2 sm:px-4 lg:px-6
            max-w-7xl mx-auto
            transition-all duration-200
            scrollbar-none
          `}
          style={{ 
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", /* Firefox */
            msOverflowStyle: "none"  /* IE and Edge */
          }}
        >
          {events.map((event, idx) => (
            <Link
              to={event.link}
              key={idx}
              className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] max-w-[85vw] hover:scale-105 transition-transform duration-200"
            >
              <div
                className={`
                  flex flex-col justify-center h-full w-full
                  transition-all duration-300 hover:shadow-lg
                  ${stuck
                    ? "bg-white/90 rounded border border-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 shadow-md"
                    : "bg-gray-900/90 rounded-lg sm:rounded-xl border border-blue-900 px-4 sm:px-6 lg:px-7 py-3 sm:py-4 lg:py-5 shadow-lg"
                  }
                `}
              >
                {/* Nombre del evento */}
                <span
                  className={`font-black italic leading-tight
                    transition-all duration-200
                    ${stuck 
                      ? "text-gray-900 text-sm sm:text-base" 
                      : "text-white text-lg sm:text-xl lg:text-xl mb-0.5 sm:mb-1"
                    }
                  `}
                  style={{ letterSpacing: stuck ? "0.01em" : "0.03em" }}
                >
                  {event.name}
                </span>

                {/* Badge y fecha */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span
                    className={`
                      uppercase font-semibold rounded border tracking-wide
                      ${stuck
                        ? "text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5"
                        : "text-[11px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 drop-shadow-lg"
                      }
                      transition-all duration-200
                      ${badgeStyle(event.status, stuck)}
                    `}
                  >
                    {event.status}
                  </span>
                  <span
                    className={`
                      ${stuck 
                        ? "text-gray-500 text-[11px] sm:text-xs" 
                        : "text-gray-300 text-xs sm:text-sm"
                      }
                      font-medium truncate
                    `}
                  >
                    {event.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Indicador sutil de scroll en móvil */}
        <div className="flex justify-center mt-1 sm:hidden opacity-50">
          <div className="text-xs text-gray-400">← Swipe for more →</div>
        </div>
      </motion.section>
    </>
  );
}

export default EventsBar;