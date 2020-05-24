import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Day from "./Day";
import fillDays from "../utilities/fillDays";

const Days = ({ date, openPopup, events }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(fillDays());
  }, [date]);

  return (
    <ul className="days" onClick={fillDays}>
      {days.map((elem) => (
        <Day
          date={date}
          day={elem}
          openPopup={openPopup}
          events={events}
          key={elem * Math.random()}
        />
      ))}
    </ul>
  );
};

Days.propTypes = {
  events: PropTypes.array,
  getEvents: PropTypes.func,
};

export default Days;
