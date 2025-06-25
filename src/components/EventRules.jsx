// src/components/EventRules.jsx
export default function EventRules({ rules }) {
  return (
    <section className="relative py-16 px-4 md:px-12 mx-auto max-w-6xl mt-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wider text-[#e0e6f9] select-none pointer-events-none"
          style={{ textShadow: "0 3px 32px #c4d8ff" }}>
          GAME RULES
        </h2>
        {/* Puedes agregar aquí algún botón de descarga de reglas o filtro */}
      </div>
      <div className="space-y-4">
        {rules.map((rule, idx) => (
          <details key={idx} className="bg-white/90 rounded-lg shadow px-6 py-4 cursor-pointer">
            <summary className="font-bold text-lg text-black">{rule.title}</summary>
            <div className="mt-2 text-gray-800 text-base">{rule.details}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
