// src/pages/events/France.jsx
import EventTemplate from "./EventTemplate";
import { EVENTS_DATA } from "../../data/events";

const eventData = EVENTS_DATA.find(ev => ev.slug === "france");

export default function France() {
  return <EventTemplate {...eventData} />;
}