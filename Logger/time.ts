// deno-lint-ignore-file no-inferrable-types
import { formatString } from "../utilities.ts";

const dt = new Date(Date.now());

export const getTime = (date: Date = dt) => {
  let status: string = "",
    hrs: string = "",
    mins: string = "",
    secs: string = "";

  const {
    milliseconds,
    seconds,
    minutes,
    hours,
  } = {
    milliseconds: date.getMilliseconds(),
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
  };

  if (hours >= 12) {
    hrs = `${hours-12}`
    status = "PM";
  } else if (hours < 12) {
    hrs = hours.toString();
    status = "AM";
  }

  if (minutes < 10) {
    mins += `0${minutes}`;
  } else if (minutes > 9) {
    mins += minutes.toString();
  }

  if (seconds < 10) {
    secs += `0${seconds}`;
  } else if (minutes > 9) {
    secs += seconds.toString();
  }

  return formatString("{0}:{1}:{2}.{3} {4}", hrs, mins, secs, milliseconds.toString(), status);
};

export const getDay = (date: Date = dt) => {
  const d = date.getDay();
  let day: string = "";

  if (d === 1 || d === 21 || d === 31) {
    day = `${d}st`;
  } else if (d === 2 || d === 22) {
    day = `${d}nd`;
  } else if (d === 3 || d === 23) {
    day = `${d}rd`;
  } else {
    day = `${d}th`;
  }

  return day;
};

export const getMonth = (date: Date = dt): string => {
  let month: string = "";

  switch (date.getMonth()) {
    case 1:
      month = "January";
      break;

    case 2:
      month = "February";
      break;

    case 3:
      month = "March";
      break;

    case 4:
      month = "April";
      break;

    case 5:
      month = "May";
      break;

    case 6:
      month = "June";
      break;

    case 7:
      month = "July";
      break;

    case 8:
      month = "August";
      break;

    case 9:
      month = "September";
      break;

    case 10:
      month = "October";
      break;

    case 11:
      month = "November";
      break;

    case 12:
      month = "December";
      break;
  }

  return month;
};
