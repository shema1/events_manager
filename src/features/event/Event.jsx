import React from "react";
import "./event.scss";
import {
  countEventStart,
  countEventDuration,
} from "../utilities/countEventSize";

const Event = ({ endTime, startTime, name }) => {
  let duration = countEventDuration(startTime, endTime);
  let top = countEventStart(startTime);

  return (
    <span
      style={{ top: `${top}px`, height: `${duration}px` }}
      className="event"
    >
      {name}
    </span>
  );
};

export default Event;
