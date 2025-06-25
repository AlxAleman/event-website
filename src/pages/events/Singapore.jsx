// src/pages/events/Singapore.jsx
import EventTemplate from "./EventTemplate";
import { EVENTS_DATA } from "../../data/events";

const eventData = EVENTS_DATA.find(ev => ev.slug === "singapore");

export default function Singapore() {
  return <EventTemplate {...eventData} />;
}