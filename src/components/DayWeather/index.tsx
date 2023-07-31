//interface
import DayWeatherReport from "../../interfaces/DayWeatherReport";
//style
import "./style.css";

const DayWeather = (props: DayWeatherReport) => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <div className="text-white">
          <p className="ml-3 ">{props.day}</p>
          <img src={props.image} className="img-weather" />
          <p className="ml-3 mt-2">
            {props.temperature}
            <span>&#8451;</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default DayWeather;
