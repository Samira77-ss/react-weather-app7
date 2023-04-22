import React from "react";

export default function FormoattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? "PM." : "AM.";
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}, {month} {props.date.getDate()}, {hours}:{minutes} {ampm}
    </div>
  );
}
