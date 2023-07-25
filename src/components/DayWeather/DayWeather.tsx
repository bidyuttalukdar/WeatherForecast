import "../DayWeather/DayWeather.css"
import DayWeatherReport from "../../models/DayWeatherReport/DayWeatherReport"
import { useState } from "react"
const DayWeather = (props:DayWeatherReport) => {
  
    return (
        <>
        <div className="d-flex justify-content-center mt-5">
            <div className="text-white">
                <p>{props.day}</p>
                <img src={props.image} className="img-weather"/>
                <p>{props.temperature}<span>&#8451;</span></p>


            </div>
        </div>
        </>
    )
}
export default DayWeather