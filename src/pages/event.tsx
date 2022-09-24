import React from "react";
import birthdayCake from "../assets/birthday-cake.png";
import { EventData } from "../App";
import {AiOutlineRight, BiRightArrow, BsCalendar2Week} from "react-icons/all";
import format from "date-fns/format";
import { Redirect, useLocation } from "wouter";

type EventProps = {
  eventData: EventData;
};

const Event: React.FC<EventProps> = (props) => {
  const { eventData } = props;
  if (!eventData) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-[#fbfaff]">
      <img src={birthdayCake} alt="birthday-cake" className="w-full max-w-xl" />

      <div className="container text-left mx-auto p-5">
        <h1 className="text-primary text-2xl font-bold">Birthday Bash</h1>

        <p className="text-gray-2 text-sm">
          Hosted by <span className="font-bold">Elysia</span>
        </p>

        <div className="mt-8">
          <button className="flex items-center justify-between w-full">
            <div className="flex">
              <div className="bg-white p-3 shadow-icons rounded-lg">
                <BsCalendar2Week className="text-primary-envited-purple"/>
              </div>

              <div className="flex flex-col text-left ml-6">
                <span className="text-primary font-bold">{format(new Date(eventData.startTime), "d MMMM h:mmaa")}</span>

                <span className="text-[#4f4f4f] text-sm">
                to <span className="font-bold">{format(new Date(eventData.endTime), "d MMMM h:mmaa")}</span>
                  &nbsp;{format(new Date(eventData.endTime), "z")}
              </span>
              </div>
            </div>

            <div className="flex items-center h-full">
              <AiOutlineRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
