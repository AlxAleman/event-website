// src/components/EventBanner.jsx

export default function EventBanner({
  background,
  label,
  city,
  date,
  countdown,
  title,
}) {
  // Debug: verificar qué estamos recibiendo
  console.log('EventBanner received:', { title, city, date, background });
  
  return (
    <section
      className="relative pt-16 w-full min-h-[430px] md:min-h-[520px] flex items-end overflow-hidden"
    >
      {/* Imagen de fondo con duotono y fade radial */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(120deg, #0e1437 55%, rgba(24,18,59,0.20) 80%, transparent 100%),
            url(${background}) center right/cover no-repeat
          `
        }}
      />

      {/* Difuminado extra radial (halo alrededor) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 62% 54%, transparent 60%, #0e1437 100%),
            linear-gradient(90deg, rgba(24,18,59,0.96) 0%, rgba(24,18,59,0.0) 55%)
          `
        }}
      />

      {/* Fade abajo para efecto soft edge */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-20 pointer-events-none bg-gradient-to-b from-transparent to-[#0e1437]" />
      {/* Fade izquierda (más marcado) */}
      <div className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none bg-gradient-to-l from-transparent to-[#0e1437]" />

      {/* Contenido alineado a la izquierda */}
      <div className="relative z-30 p-6 sm:p-12 md:pl-20 pb-16 flex flex-col gap-4 w-full max-w-5xl">
        {label && (
          <span className="inline-block bg-yellow-400 text-xs font-bold rounded px-4 py-1 text-gray-900 tracking-wide mb-1 w-fit">
            {label}
          </span>
        )}

        <div className="flex flex-col gap-0">
          <span
            className="uppercase tracking-tight font-extrabold leading-none mb-2 font-[Oswald,sans-serif]"
            style={{
              fontSize: "clamp(3.3rem, 8vw, 8.5rem)",
              color: "white",
              textShadow: `
                0 0 8px #fff,
                0 0 14px #A8BFFF,
                0 0 36px #A8BFFF
              `
            }}
          >
            {title || 'EVO EVENT'}
          </span>
          <span className="text-white/80 text-xl font-mono tracking-wider mb-3">
            {city} {city && "•"} {date}
          </span>
        </div>

        {countdown && (
          <div className="flex gap-10 mt-6 font-mono">
            <div className="flex flex-col items-start">
              <span className="text-6xl md:text-7xl font-bold text-white/90 drop-shadow" style={{lineHeight: '1'}}>
                {countdown.months}
              </span>
              <span className="text-white/80 text-base md:text-lg uppercase tracking-widest">Months</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-6xl md:text-7xl font-bold text-white/90 drop-shadow" style={{lineHeight: '1'}}>
                {countdown.days}
              </span>
              <span className="text-white/80 text-base md:text-lg uppercase tracking-widest">Days</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-6xl md:text-7xl font-bold text-white/90 drop-shadow" style={{lineHeight: '1'}}>
                {countdown.hours}
              </span>
              <span className="text-white/80 text-base md:text-lg uppercase tracking-widest">Hours</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}