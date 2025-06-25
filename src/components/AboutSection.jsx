import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-900 to-gray-900 overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <img
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
        alt="EVO Event"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/70 to-transparent" style={{ zIndex: 1 }}></div>
      {/* Contenido animado */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          FROM THE ARCADE <br className="hidden md:block"/> TO THE STAGE
        </h2>
        <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl">
          In 1996, 40 players gathered in San Diego to battle it out over Street Fighter Alpha 2. Thousands of passionate fighting game competitors later, EVO stands as the world's biggest event. We’re more than a convention: we’re a global community for those dedicated to building a bigger world for fighting games.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full text-lg shadow-lg transition">
          More About Us
        </button>
      </motion.div>
    </section>
  )
}

export default AboutSection
