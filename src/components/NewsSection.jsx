//src\components\NewsSection.jsx

function NewsSection() {
  const news = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      title: "EVO 2025 Prize Pool Announced",
      date: "JULY 15, 2025",
      summary: "Discover the biggest prize pool in EVO history and what's at stake for this year's champions! Además, este año tendremos más invitados especiales, una zona de comida internacional, torneos sorpresa y oportunidades de meet & greet con leyendas de los juegos de pelea. ¡No te lo pierdas!",
      link: "#",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      title: "New Fighters Revealed",
      date: "JULY 9, 2025",
      summary: "Dos franquicias clásicas regresan con nuevos contendientes.",
      link: "#",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      title: "EVO Las Vegas Sells Out",
      date: "JULY 2, 2025",
      summary: "Registration for EVO 2025 is officially closed. Did you get your spot? Here’s what to expect in Vegas.",
      link: "#",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Artist Alley & Cosplay Returns!",
      date: "JUNE 28, 2025",
      summary: "Art, fashion, and fandom take center stage once again at EVO. Apply now to show your talent.",
      link: "#",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
      title: "Meet the EVO 2025 Guest Stars",
      date: "JUNE 12, 2025",
      summary: "A lineup of legendary FGC players and community leaders are coming to EVO!",
      link: "#",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      title: "How to Watch EVO Online",
      date: "MAY 25, 2025",
      summary: "Can't travel to Vegas? Here's how to catch all the action and highlights online.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#101728] to-gray-900 py-20 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-10 tracking-widest uppercase text-left drop-shadow">
          Latest News
        </h2>
        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {news.map((item) => (
            <div
              key={item.id}
              className="mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-gray-900/80 border border-gray-800 group transition hover:scale-[1.025] hover:shadow-2xl hover:border-blue-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover object-center transition group-hover:scale-105"
                draggable={false}
                loading="lazy"
              />
              <div className="p-6 relative z-10">
                <span className="text-xs uppercase text-blue-400 font-bold">{item.date}</span>
                <h3 className="text-lg font-black text-white mb-2 mt-1 drop-shadow">{item.title}</h3>
                <p className="text-gray-300 text-base mb-4">{item.summary}</p>
                <a
                  href={item.link}
                  className="inline-block px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 font-bold text-gray-900 text-sm shadow transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
