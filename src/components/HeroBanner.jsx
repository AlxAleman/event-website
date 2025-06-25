import Countdown from "./Countdown";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroBanner() {
  const bgImage = "/evo-bg.png";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden select-none">
      {/* Imagen de fondo */}
      <img
        src={bgImage}
        alt="EVO Event"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90 pointer-events-none"
        style={{ zIndex: 0 }}
        draggable={false}
      />
      {/* Overlay azul translúcido */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: "rgba(22, 43, 111, 0.6)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Overlay negro suave */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        style={{ zIndex: 2 }}
      />
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Columna izquierda */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="bg-yellow-400 text-gray-900 px-3 sm:px-4 py-1 sm:py-1.5 rounded-md font-bold text-xs sm:text-sm mb-4 shadow-lg tracking-wider uppercase w-fit mx-auto lg:mx-0"
          >
            Featured Event
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="font-extrabold text-[clamp(2.5rem,12vw,8rem)] leading-none drop-shadow-[0_8px_32px_rgba(35,106,255,0.6)] tracking-tight text-white"
            style={{
              letterSpacing: "-0.07em",
              textShadow: "0 6px 50px #69a8f8, 0 1px 8px #1e253a",
            }}
          >
            EVO 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-2 mb-6 text-lg sm:text-xl lg:text-2xl text-white/90 font-semibold tracking-wide max-w-lg mx-auto lg:mx-0"
          >
            Las Vegas • Aug 15 - 17
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 lg:mb-0"
          >
            <Countdown targetDate="2025-08-15T09:00:00" />
          </motion.div>

          {/* Botón móvil */}
          <motion.div
            className="flex justify-center lg:hidden mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/events/usa"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl shadow-xl transition-all duration-300 flex gap-2 sm:gap-3 items-center tracking-widest hover:scale-105"
            >
              VIEW EVENT <span className="text-xl sm:text-2xl">➔</span>
            </Link>
          </motion.div>
        </div>

        {/* Columna derecha - Botón desktop */}
        <motion.div
          className="hidden lg:flex items-center justify-center lg:ml-auto"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            to="/events/usa"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold px-8 xl:px-10 py-4 xl:py-5 rounded-full text-xl xl:text-2xl shadow-xl transition-all duration-300 flex gap-3 items-center tracking-widest hover:scale-105 hover:shadow-2xl"
          >
            VIEW EVENT <span className="text-2xl xl:text-3xl">➔</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBanner;