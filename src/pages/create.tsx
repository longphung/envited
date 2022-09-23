import React, { Dispatch, SetStateAction } from "react";
import Input from "../components/input/input";
import { Link, useLocation } from "wouter";
import { EventData } from "../App";

type CreateProps = {
  setEventData: Dispatch<SetStateAction<EventData | null>>;
};

const Create: React.FC<CreateProps> = (props) => {
  const { setEventData } = props;
  const [, setLocation] = useLocation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.elements);
    // @ts-ignore
    const { eventName, hostName, startTime, endTime, location, eventPhoto } =
      event.currentTarget.elements;
    setEventData({
      eventName: eventName.value,
      hostName: hostName.value,
      startTime: startTime.value,
      endTime: endTime.value,
      location: location.value,
      eventPhoto: eventPhoto.files,
    });
    setLocation("/event", {});
  };

  return (
    <form
      className="container mx-auto bg-purple-3 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold">
        Create{" "}
        <span className="bg-envited-gradient bg-clip-text text-transparent">
          Event
        </span>
      </h1>

      <Input
        label="Event name"
        id="event-name"
        placeholder="Event name"
        type="text"
        name="eventName"
      />

      <Input
        label="Host name"
        id="host-name"
        placeholder="Host name"
        type="text"
        name="hostName"
      />

      <Input label="Start time" id="start-time" type="date" name="startTime" />

      <Input label="End time" id="end-time" type="date" name="endTime" />

      <Input
        label="Location"
        id="location"
        placeholder="Location"
        type="text"
        name="location"
      />

      <Input
        label="Event photo"
        id="event-photo"
        type="file"
        name="eventPhoto"
        accept="image/*"
      />

      <button
        type="submit"
        className="bg-envited-gradient text-white font-bold py-4 px-5.1 rounded-xl w-full"
      >
        Next
      </button>
    </form>
  );
};

export default Create;
