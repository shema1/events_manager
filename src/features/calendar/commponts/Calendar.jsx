import React, { useState, useEffect } from "react";
import "./calendar.scss";
import PropTypes from "prop-types";
import Month from "../../month/Month";
import Weak from "../../weekdays/Weak";
import Days from "../../days/Days";
import moment from "moment";
import Popup from "../../popup/Popup";
import { connect } from "react-redux";
import { eventListSelector } from "../calendar.selectors";
import * as calendarAction from "../calendar.actions";

const Calendar = ({ events, getEvents }) => {
  const [date, setMonth] = useState(moment());
  const [popUp, setPopUp] = useState(false);
  const [selectDay, setSelectDay] = useState("");
  const [curentEvents, setCurentEvents] = useState([]);
  useEffect(() => {
    filterEvent();
  }, [selectDay]);

  const prevMonth = () => {
    setMonth(moment(date).add(-1, "M"));
  };
  const nextMonth = () => {
    setMonth(moment(date).add(1, "M"));
  };

  const filterEvent = () => {
    getEvents();
    setCurentEvents(events.filter((elem) => elem.date === selectDay));
  };

  const openPopUp = (status, param) => {
    setPopUp(status);
    setSelectDay(param.format("D-M-YYYY"));
  };

  const closePopup = (status) => {
    setPopUp(status);
    setSelectDay("");
    setCurentEvents("");
  };

  return (
    <>
      <Month month={date} prevMonth={prevMonth} nextMonth={nextMonth} />
      <Weak />
      <Days
        date={date}
        openPopup={openPopUp}
        selectDay={selectDay}
        events={events}
      />
      {popUp && (
        <Popup
          closePopUp={closePopup}
          selectDay={selectDay}
          curentEvents={curentEvents}
        />
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    events: eventListSelector(state),
  };
};

const mapDispatch = {
  getEvents: calendarAction.getEventsList,
};

Calendar.propTypes = {
  events: PropTypes.array,
  getEvents: PropTypes.func,
};

export default connect(mapState, mapDispatch)(Calendar);
