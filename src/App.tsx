import "./App.css";
import landingPageImage from "./assets/landing-page-image.png";
import { Link, Route, Router } from "wouter";
import LandingPage from "./pages/landing-page";
import Create from "./pages/create";
import Event from "./pages/event";
import {useState} from "react";

export type EventData = {
  eventName: string;
  hostName: string;
  startTime: Date;
  endTime: Date;
  location: string;
  eventPhoto: FileList;
}

function App() {
  const [eventData, setEventData] = useState<EventData | null>(null);
  return (
    <>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/create">
        <Create setEventData={setEventData} />
      </Route>
      <Route path="/event">
        <Event/>
      </Route>
    </>
  );
}

export default App;
