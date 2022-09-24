import "./App.css";
import { Route } from "wouter";
import LandingPage from "./pages/landing-page";
import Create from "./pages/create";
import Event from "./pages/event";
import { useState } from "react";

export type EventData = {
  eventName: string;
  hostName: string;
  startTime: Date;
  endTime: Date;
  location: string;
  eventPhoto: FileList;
} | null;

function App() {
  const [eventData, setEventData] = useState<EventData>(null);
  return (
    <>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/create">
        <Create setEventData={setEventData} />
      </Route>
      <Route path="/event">
        <Event eventData={eventData} />
      </Route>
    </>
  );
}

export default App;
