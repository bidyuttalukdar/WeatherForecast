import { useState } from "react";
import DayWeatherReport from "../../interfaces/DayWeatherReport";
import DayWeather from "../DayWeather";

const DayWiseWeather = () => {
  const weekReport:DayWeatherReport[] =  [
    {
      day: "MON",
      image: "/src/assets/images/partlyClowdy.png",
      temperature: "21.0",
    },
    { day: "TUE", image: "/src/assets/images/sunny.png", temperature: "23.3" },
    { day: "WED", image: "/src/assets/images/rainy.png", temperature: "27.8" },
    { day: "THU", image: "/src/assets/images/storm.png", temperature: "31.3" },
    { day: "FRI", image: "/src/assets/images/cloudy.png", temperature: "17.0" },
  ];
  const dayList = weekReport.map((day:DayWeatherReport) => (
    <div className="col" key={day.day}>
      <DayWeather
        day={day.day}
        temperature={day.temperature}
        image={day.image}
      ></DayWeather>
    </div>
  ));
  return (
    <>
      <div className="container-fluid">
        <div className=" row">{dayList}</div>
      </div>
    </>
  );
};
export default DayWiseWeather;
