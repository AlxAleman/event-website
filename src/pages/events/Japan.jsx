// src/pages/events/Japan.jsx
import EventTemplate from "./EventTemplate";
import { EVENTS_DATA } from "../../data/events";

const eventData = EVENTS_DATA.find(ev => ev.slug === "japan");

export default function Japan() {
  if (!eventData) {
    return <div>Event not found</div>;
  }
  return <EventTemplate {...eventData} />;
}