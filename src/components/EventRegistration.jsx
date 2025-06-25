// src/components/EventRegistration.jsx

export default function EventRegistration() {
  return (
    <section className="max-w-6xl mx-auto w-full px-2 mt-20">
      <div className="bg-[#181d43] border border-yellow-300/20 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-yellow-300 text-2xl md:text-3xl font-extrabold mb-6 tracking-widest">
            REGISTRATION & TICKETING
          </h2>
          <ul className="text-gray-100 text-base font-medium space-y-3 mb-6">
            <li>
              <span className="font-bold text-yellow-400">Early Bird:</span>{" "}
              Registration for 3-Day Badges is available for <b>90€</b> from <b>May 4, 6:00pm</b> to <b>June 4, 11:59am CEST</b>.
            </li>
            <li>
              <span className="font-bold text-yellow-400">Normal:</span>{" "}
              110€ from <b>June 4, 12:00pm</b> to <b>August 5, 11:59am CEST</b>.
            </li>
            <li>
              <span className="font-bold text-yellow-400">Late:</span>{" "}
              130€ from <b>August 5, 12:00pm</b> to <b>October 8, 12:00am CEST</b>.
            </li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold rounded-full px-8 py-3 shadow-lg w-fit transition text-lg tracking-wider">
            BUY TICKETS
          </button>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          {/* Puedes poner aquí un icono, ilustración, o logo */}
          <img src="/public/registration.jpg" alt="Event" className="w-48 opacity-80" />
        </div>
      </div>
    </section>
  );
}
