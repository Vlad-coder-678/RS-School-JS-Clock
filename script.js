const secondHand = document.querySelector(".second-arrow");
const minsHand = document.querySelector(".min-arrow");
const hourHand = document.querySelector(".hour-arrow");

const secondDigital = document.querySelector(".second-digital");
const minsDigital = document.querySelector(".min-digital");
const hourDigital = document.querySelector(".hour-digital");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `translate(-111%, -380%) rotate(${secondsDegrees}deg)`;
  secondDigital.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = ` translate(-111%, -380%) rotate(${minsDegrees}deg)`;
  minsDigital.innerHTML = mins < 10 ? `0${mins}` : mins;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = ` translate(-113%, -366%) rotate(${hourDegrees}deg)`;
  hourDigital.innerHTML = hour < 10 ? `0${hour}` : hour;

  const date = document.querySelector(".date-digital");

  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const formatMonth = (m) => {
      switch (m) {
        case 0:
          return months[0];
        case 1:
          return months[1];
        case 2:
          return months[2];
        case 3:
          return months[3];
        case 4:
          return months[4];
        case 5:
          return months[5];
        case 6:
          return months[6];
        case 7:
          return months[7];
        case 8:
          return months[8];
        case 9:
          return months[9];
        case 10:
          return months[10];
        case 11:
          return months[11];
        default:
          return months[0];
      }
    };
    const formatDay = (d) => {
      switch (d) {
        case 0:
          return days[0];
        case 1:
          return days[1];
        case 2:
          return days[2];
        case 3:
          return days[3];
        case 4:
          return days[4];
        case 5:
          return days[5];
        case 6:
          return days[6];
        default:
          return days[0];
      }
    };

    const month = formatMonth(date.getMonth());
    const day = formatDay(date.getDate());
    const number = now.getDate();
    const year = date.getFullYear();

    return `${day}, ${number} ${month} ${year}`;
  };

  date.innerHTML = formatDate(now);
}

setInterval(setDate, 1000);

setDate();
