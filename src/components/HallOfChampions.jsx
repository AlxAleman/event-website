import { FaArrowRight } from "react-icons/fa6";

function HallOfChampions() {
  return (
    <section className="relative w-full min-h-[400px] flex items-center overflow-hidden bg-[#0e1437]">
      {/* Imagen de fondo */}
      <img
        src="/backgrounds/hall-of-champions.png"
        alt="Hall of Champions"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        style={{ zIndex: 1 }}
      />
      {/* Overlay azul oscuro con blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1437] via-[#181d43]/80 to-transparent backdrop-blur-[2px]" style={{ zIndex: 2 }} />
      {/* Contenido */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-12">
        {/* Título grande a la izquierda */}
        <div className="flex-1 w-full">
          <h2 className="text-[4rem] lg:text-[7rem] xl:text-[8rem] font-extrabold leading-none tracking-tight text-white drop-shadow-xl
            [text-shadow:_0_4px_24px_rgba(0,0,0,0.65),_0_0_24px_white]
            "
            style={{
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            HALL OF<br />CHAMPIONS
          </h2>
        </div>
        {/* Texto y botón a la derecha */}
        <div className="flex-1 w-full max-w-lg mt-8 lg:mt-0 flex flex-col items-end lg:items-end">
          <p className="text-white/90 text-lg mb-8 max-w-md text-right drop-shadow">
            The title of Evo Champion is awarded to those who overcome all odds to claim victory in one of Evo’s featured tournaments. In the Hall of Champions, we recognize the achievements of our strongest competitors and pay homage to the winners of years past.
          </p>
          <button className="flex items-center gap-3 bg-[#181d43]/60 border-2 border-white/60 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition px-7 py-3 rounded-xl shadow-lg font-semibold text-white hover:drop-shadow-lg backdrop-blur-lg">
            <span>VIEW MORE</span>
            <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center ml-2">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HallOfChampions;
