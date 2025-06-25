// src/components/EventFeatured.jsx
export default function EventFeatured({ featured = [] }) {
  if (!featured.length) return null;

  return (
    <section className="
      relative 
      bg-gradient-to-br from-[#2a2255] via-[#40357a] to-[#221d41] 
      rounded-2xl sm:rounded-3xl shadow-2xl 
      py-8 sm:py-12 lg:py-16 
      px-3 sm:px-4 md:px-6 lg:px-8
      mx-3 sm:mx-4 lg:mx-auto 
      w-auto lg:w-full max-w-[1600px] 
      border border-white/10
    ">
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          font-extrabold tracking-wider text-[#e5eaff] 
          mb-6 sm:mb-8 lg:mb-12 
          text-center select-none pointer-events-none
        "
        style={{
          textShadow: "0 4px 40px #a8bfff, 0 0 18px #fff, 0 0 42px #a8bfff",
          letterSpacing: "0.05em",
        }}
      >
        FEATURED
      </h2>
      
      {/* Grid responsivo con mejores breakpoints */}
      <div className="
        grid 
        grid-cols-1 
        xs:grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4
        gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10
      ">
        {featured.map((game, idx) => (
          <div
            key={idx}
            className={`
              group relative overflow-hidden 
              rounded-xl sm:rounded-2xl 
              shadow-lg sm:shadow-xl lg:shadow-2xl 
              cursor-pointer
              border border-[#a8bfff33] 
              min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px]
              aspect-[4/5] 
              hover:scale-[1.02] sm:hover:scale-[1.035] 
              hover:shadow-[0_0_30px_4px_#a8bfff55] sm:hover:shadow-[0_0_60px_8px_#a8bfff77] 
              transition-all duration-300
              flex items-end justify-center
              bg-gray-800
            `}
          >
            {/* Imagen con loading optimizado */}
            <img
              src={game.image}
              alt={game.title}
              className="
                absolute inset-0 w-full h-full object-cover z-0
                blur-0 scale-100 transition-all duration-500
                group-hover:blur-sm group-hover:scale-110
              "
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 300px"
            />
            
            {/* Overlay gradient */}
            <div className="
              absolute inset-0 bg-gradient-to-t 
              from-[#201f34ee] via-[#221d41bb] to-transparent
              z-10
            " />
            
            {/* Badge responsivo */}
            <span className="
              absolute 
              left-2 sm:left-3 lg:left-5 
              top-2 sm:top-3 lg:top-5 
              z-20 
              px-2 sm:px-3 lg:px-4 
              py-0.5 sm:py-1 
              text-[10px] sm:text-xs 
              font-bold uppercase tracking-widest
              bg-gradient-to-tr from-[#746fff] to-[#a8bfff] text-white 
              rounded-full shadow-lg sm:shadow-xl
              opacity-85 group-hover:scale-110 group-hover:opacity-100 transition
              select-none
            ">
              {game.badge || "MAIN"}
            </span>
            
            {/* Título responsivo */}
            <div className="
              relative z-20 w-full text-center flex flex-col items-center justify-end 
              pb-3 sm:pb-4 lg:pb-6
              px-2 sm:px-3 lg:px-4
            ">
              <div className="
                bg-white/10 backdrop-blur-md 
                rounded-lg sm:rounded-xl 
                px-2 sm:px-3 lg:px-4 
                py-2 sm:py-2.5 lg:py-3 
                mt-8 sm:mt-10 lg:mt-12
                shadow-[0_2px_22px_0_#a8bfff66]
                font-extrabold 
                text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                text-white uppercase
                tracking-wide drop-shadow-lg
                group-hover:text-[#ffe478] transition-colors duration-300
                leading-tight
                max-w-full
              "
              style={{ letterSpacing: "0.02em" }}
              >
                <span className="block">
                  {game.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mensaje cuando hay pocos juegos en móvil */}
      {featured.length < 4 && (
        <p className="
          text-center text-white/60 text-sm 
          mt-6 sm:mt-8 
          block sm:hidden
        ">
          Swipe to see all games →
        </p>
      )}
    </section>
  );
}