import { Link } from "react-router-dom";
import HallOfChampions from '../components/HallOfChampions'
import Footer from '../components/Footer'
import EventsMarquee from "../components/EventsMarquee";

const EVENTS = [
  {
    slug: "japan",
    title: "EVO JAPAN",
    date: "Tokyo • May 09 - 11",
    status: "Ended",
    image: "/backgrounds/back-japan.png",
  },
  {
    slug: "usa",
    title: "EVO USA",
    date: "Las Vegas • Aug 01 - 03",
    status: "Upcoming",
    image: "/backgrounds/back-usa.png",
  },
  {
    slug: "france",
    title: "EVO FRANCE",
    date: "Nice • Oct 10 - 12",
    status: "Upcoming",
    image: "/backgrounds/back-france.png",
  },
  {
    slug: "singapore",
    title: "EVO SINGAPORE",
    date: "Singapore • TBA",
    status: "TBA",
    image: "/backgrounds/back-singapore.png",
  }
];

function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e1437] to-[#13173d] pt-24">
      <EventsMarquee />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-5xl font-extrabold mb-12 text-center tracking-widest drop-shadow-xl">MAIN EVENTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="relative rounded-2xl overflow-hidden shadow-2xl group transition-transform transform hover:-translate-y-1 hover:shadow-yellow-400/20"
              style={{
                minHeight: "320px",
                background: `url(${event.image}) center/cover no-repeat, #181d43`
              }}
            >
              {/* Overlay principal con blur y oscurecido */}
              <div className="absolute inset-0 bg-[#181d43]/70 group-hover:bg-[#181d43]/40 transition-colors duration-300" />
              <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-[4px] transition-all duration-300" />
              
              {/* Contenido */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="text-white/80 text-xs mb-2 font-mono drop-shadow">{event.date}</div>
                  <h2 className="text-3xl text-white font-bold mb-3 drop-shadow">{event.title}</h2>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`uppercase px-3 py-1 rounded text-xs font-bold tracking-wider 
                    ${event.status === "Ended"
                      ? "bg-gray-600 text-white"
                      : event.status === "Upcoming"
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-300 text-black"}
                  `}>
                    {event.status}
                  </span>
                  {/* CAMBIO: Usa Link para ir a la página de evento */}
                  <Link
                    to={`/events/${event.slug}`}
                    className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-black font-bold rounded-full px-4 py-2 text-xs shadow-lg group-hover:scale-105 active:scale-95"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Estas secciones ya son FULL WIDTH */}
      <HallOfChampions />
      <Footer />
    </div>
  );
}

export default EventsPage;
