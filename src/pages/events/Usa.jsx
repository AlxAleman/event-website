// src/pages/events/Usa.jsx
import EventTemplate from "./EventTemplate";
import { EVENTS_DATA } from "../../data/events";

const eventData = EVENTS_DATA.find(ev => ev.slug === "usa");

export default function Usa() {
  return <EventTemplate {...eventData} />;
}