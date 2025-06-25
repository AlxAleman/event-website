// src/pages/events/EventPage.jsx
import { useParams } from "react-router-dom";
import { EVENTS_DATA } from "../../data/events";
import EventTemplate from "./EventTemplate";


export default function EventPage() {
  const { slug } = useParams();
  // Busca por slug en el array
  const eventData = EVENTS_DATA.find(ev => ev.slug === slug);

  if (!eventData) {
    return (
      <div className="text-center text-white mt-24 text-3xl">
        Event not found
      </div>
    );
  }

  // Aquí ya tienes todos los datos, incluido hotel
  return <EventTemplate {...eventData} />;
}
