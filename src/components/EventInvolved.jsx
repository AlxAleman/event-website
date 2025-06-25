// src/components/EventInvolved.jsx

export default function EventInvolved({ involved = [] }) {
  if (!involved.length) return null;

  return (
    <section className="relative z-10 mt-20">
      <div className="max-w-7xl mx-auto w-full px-2 flex flex-col items-center">
        {/* Título igual que Activities */}
        <h2
          className="
            text-[clamp(2.2rem,8vw,4.2rem)]
            font-extrabold
            uppercase
            tracking-wider
            text-center
            mb-14
            select-none
            pointer-events-none
            leading-[1.08]
          "
          style={{
            WebkitTextStroke: "4px #b3bbdd",
            color: "transparent",
            letterSpacing: ".03em"
          }}
        >
          GET INVOLVED
        </h2>

        {/* Grid de cards */}
        <div className="
          w-full
          grid gap-10
          [grid-template-columns:repeat(auto-fit,minmax(330px,1fr))]
          justify-center
        ">
          {involved.map((role, idx) => (
            <div
              key={idx}
              className="
                group relative rounded-2xl overflow-hidden
                min-h-[360px] flex flex-col
                bg-gradient-to-br from-[#191d3bcc] via-[#242954cc] to-[#17182ccc] border border-[#6ca8ff1a]
                shadow-[0_8px_42px_0_#3455b830]
                transition-all duration-300
                hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_50px_10px_#6ca8ff33]
                cursor-pointer
              "
            >
              {/* Imagen: ahora más grande */}
              <div className="relative h-56 w-full overflow-hidden"> {/* Cambiado a h-56 */}
                <img
                  src={role.image}
                  alt={role.title}
                  className="
                    w-full h-full object-cover object-center
                    transition-all duration-500
                    group-hover:scale-105 group-hover:brightness-110
                  "
                  loading="lazy"
                  draggable={false}
                  style={{ filter: "contrast(1.07)" }}
                />
                {/* Overlay degradado */}
                <div className="
                  absolute inset-0 bg-gradient-to-t from-[#22224dbe] via-transparent to-transparent
                  z-10
                  transition-all duration-500
                " />
              </div>
              {/* Contenido */}
              <div className="flex-1 flex flex-col justify-end p-7 z-20">
                <h3 className="text-xl font-black text-white mb-2 drop-shadow-lg tracking-wide uppercase">{role.title}</h3>
                <p className="text-blue-100/90 font-medium text-base drop-shadow-sm mb-4">{role.description}</p>
                {role.btnText && (
                  <a
                    href={role.btnUrl ?? "#"}
                    className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full px-6 py-2 text-base shadow transition w-full text-center tracking-wider"
                    style={{ transition: 'background 0.2s' }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    {role.btnText}
                  </a>
                )}

              </div>
              {/* Neon border abajo */}
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#6ca8ff55] via-[#ffe47890] to-[#6ca8ff55] blur-[2px] opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
