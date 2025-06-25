//src\pages\events\EventTemplate.jsx

import EventBanner from "../../components/EventBanner";
import EventFeatured from "../../components/EventFeatured";
import EventActivities from "../../components/EventActivities";
import EventRules from "../../components/EventRules";
import EventInvolved from "../../components/EventInvolved";
import EventFaqs from "../../components/EventFaqs";
import Footer from "../../components/Footer";
import EventHotel from "../../components/EventHotel";
import EventRegistration from "../../components/EventRegistration";

import { EVENTS_DATA } from "../../data/events";

export default function EventTemplate({
  title,
  banner,
  featured = [],
  activities = [],
  hotel = {},
  rules = [],
  involved = [],
  faqs = [],
}) {
  // Debug: verificar qué estamos recibiendo
  console.log('EventTemplate received:', { title, banner });
  
  return (
    <div className="bg-gradient-to-b from-[#0e1437] to-[#13173d] min-h-screen overflow-x-hidden">
      {/* Pasamos el title al EventBanner */}
      <EventBanner {...banner} title={title} />

      <section className="relative z-10">
        <EventFeatured featured={featured} />
      </section>

      <section className="relative z-10 mt-20">
        <EventActivities activities={activities} />
      </section>

      <section className="relative z-10 mt-20">
        <EventRegistration />
      </section>

      {/* ---- Agrega la sección de HOTEL aquí ---- */}
      <section className="relative z-10 mt-20">
        <EventHotel hotel={hotel} />
      </section>
      {/* ---------------------------------------- */}

      <section className="relative z-10 mt-20">
        <EventRules rules={rules} />
      </section>

      <section className="relative z-10 mt-20">
        <EventInvolved involved={involved} />
      </section>

      <section className="relative z-10 mt-20">
        <EventFaqs faqs={faqs} />
      </section>

      <Footer />
    </div>
  );
}