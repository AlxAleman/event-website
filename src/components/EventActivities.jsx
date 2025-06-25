import { useState, useEffect } from "react";

export default function EventActivities({ activities = [] }) {
  const [centerIdx, setCenterIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Número de cards según el dispositivo
  const getCardsShown = () => {
    if (isMobile) return 1;
    if (isTablet) return 1; 
    return 2; // Desktop
  };

  const CARDS_SHOWN = getCardsShown();

  // Función para rotar el array circularmente
  function getDisplayedActivities() {
    const arr = [];
    for (let i = 0; i < CARDS_SHOWN; i++) {
      arr.push(activities[(centerIdx + i) % activities.length]);
    }
    return arr;
  }

  function handlePrev() {
    setCenterIdx((prev) =>
      prev === 0 ? activities.length - 1 : prev - 1
    );
  }

  function handleNext() {
    setCenterIdx((prev) =>
      (prev + 1) % activities.length
    );
  }

  if (!activities.length) {
    return null;
  }

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Título responsive */}
      <h2
        className="
          text-center font-extrabold tracking-widest uppercase 
          mb-6 sm:mb-8 lg:mb-10 
          select-none pointer-events-none
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        "
        style={{
          WebkitTextStroke: isMobile ? "2px #b6c3f9" : "3px #b6c3f9",
          color: "transparent",
          letterSpacing: "0.07em",
          opacity: 0.7,
        }}
      >
        ACTIVITIES
      </h2>

      {/* Carousel Container */}
      <div className="w-full max-w-7xl flex items-center justify-center relative">
        {/* Botón Prev - Responsive */}
        <button
          onClick={handlePrev}
          className={`
            absolute z-10 
            bg-[#251e55]/80 hover:bg-[#3b317c] 
            text-white rounded-full 
            shadow-lg focus:outline-none transition-all duration-200
            hover:scale-110 active:scale-95
            ${isMobile 
              ? 'left-2 p-3 w-10 h-10' 
              : isTablet 
                ? 'left-4 p-4 w-12 h-12'
                : 'left-[-60px] p-5 w-16 h-16'
            }
          `}
          aria-label="Previous activity"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg 
            width={isMobile ? "16" : isTablet ? "20" : "30"} 
            height={isMobile ? "16" : isTablet ? "20" : "30"} 
            viewBox="0 0 32 32" 
            fill="none"
            className="mx-auto"
          >
            <path 
              d="M20 8L12 16L20 24" 
              stroke="white" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Carousel Content */}
        <div className={`
          flex w-full justify-center 
          transition-all duration-500
          ${isMobile 
            ? 'gap-0' 
            : isTablet 
              ? 'gap-4' 
              : 'gap-10'
          }
        `}>
          {/* Cards */}
          {getDisplayedActivities().map((act, idx) => (
            <div
              key={act.title + idx}
              className={`
                relative rounded-xl sm:rounded-2xl overflow-hidden 
                shadow-lg sm:shadow-xl lg:shadow-2xl 
                bg-black/70
                flex flex-col justify-end
                transition-all duration-300
                hover:scale-[1.02] sm:hover:scale-[1.04]
                cursor-pointer
                group
                ${isMobile 
                  ? 'w-[85vw] max-w-[320px] h-[360px]' 
                  : isTablet 
                    ? 'w-[70vw] max-w-[400px] h-[420px]'
                    : 'w-[38vw] max-w-[540px] min-w-[340px] h-[480px]'
                }
              `}
              style={{
                aspectRatio: isMobile ? "4/5" : "3/4",
                minHeight: isMobile ? 280 : isTablet ? 350 : 340,
                marginLeft: !isMobile && idx === 0 ? "-40px" : "0",
                marginRight: !isMobile && idx === CARDS_SHOWN - 1 ? "-40px" : "0",
                boxShadow: !isMobile && (idx === 0 || idx === CARDS_SHOWN - 1)
                  ? "0 10px 32px 0 #20205a99"
                  : "0 18px 56px 0 #3d54a888",
              }}
            >
              {/* Imagen */}
              <img
                src={act.image}
                alt={act.title}
                className="
                  absolute inset-0 w-full h-full object-cover object-center z-0 
                  group-hover:scale-105 transition duration-700
                "
                loading="lazy"
                draggable={false}
                sizes={isMobile 
                  ? "85vw" 
                  : isTablet 
                    ? "70vw" 
                    : "38vw"
                }
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/90 z-10" />
              
              {/* Contenido */}
              <div className={`
                relative z-20 
                ${isMobile 
                  ? 'p-4' 
                  : isTablet 
                    ? 'p-5' 
                    : 'p-7'
                }
              `}>
                <h3 className={`
                  font-extrabold text-white mb-2 sm:mb-3 drop-shadow-lg
                  ${isMobile 
                    ? 'text-lg' 
                    : isTablet 
                      ? 'text-xl' 
                      : 'text-2xl'
                  }
                `}>
                  {act.title}
                </h3>
                <p className={`
                  text-blue-100/95 font-medium drop-shadow
                  ${isMobile 
                    ? 'text-sm leading-relaxed' 
                    : isTablet 
                      ? 'text-sm' 
                      : 'text-base'
                  }
                `}>
                  {isMobile && act.description.length > 100 
                    ? `${act.description.substring(0, 100)}...` 
                    : act.description
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Next - Responsive */}
        <button
          onClick={handleNext}
          className={`
            absolute z-10 
            bg-[#251e55]/80 hover:bg-[#3b317c] 
            text-white rounded-full 
            shadow-lg focus:outline-none transition-all duration-200
            hover:scale-110 active:scale-95
            ${isMobile 
              ? 'right-2 p-3 w-10 h-10' 
              : isTablet 
                ? 'right-4 p-4 w-12 h-12'
                : 'right-[-60px] p-5 w-16 h-16'
            }
          `}
          aria-label="Next activity"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg 
            width={isMobile ? "16" : isTablet ? "20" : "30"} 
            height={isMobile ? "16" : isTablet ? "20" : "30"} 
            viewBox="0 0 32 32" 
            fill="none"
            className="mx-auto"
          >
            <path 
              d="M12 8L20 16L12 24" 
              stroke="white" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores responsivos */}
      <div className="mt-6 sm:mt-8 flex items-center gap-2">
        {[...Array(activities.length)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCenterIdx(idx)}
            className={`
              rounded-full transition-all duration-200 cursor-pointer
              hover:scale-125 active:scale-95
              ${isMobile 
                ? 'w-2 h-2' 
                : 'w-3 h-3'
              }
              ${centerIdx === idx 
                ? 'bg-[#708fff]' 
                : 'bg-gray-400/20 hover:bg-gray-400/40'
              }
            `}
            aria-label={`Go to activity ${idx + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint para móvil */}
      {isMobile && activities.length > 1 && (
        <p className="
          text-center text-white/60 text-xs mt-4
          animate-pulse
        ">
          ← Swipe or use arrows →
        </p>
      )}
    </section>
  );
}