import { useState } from "react"
import "./CountryTemperature.css"
import DayWeatherReport from "./src/models/DayWeatherReport/DayWeatherReport.tsx"


const CountryTemperature = () => {
    const [countryName,setCountryName] = useState(() => "New York")
    const [continentName,setContinentName] = useState(() => "United States")
    const [countryCurrentWeather,setCountryCurrentWeather] = useState(() => "Partly Clowdy")
    const [countryCurrentTemperature,setCountryCurrentTemperature] = useState(() => "21.0")
    const [windSpeed,setWindSpeed] = useState(() => "6.1 kmph")
    const [precipitation,setPrecipitation] = useState(() => "0.00 mm")
    const [pressure,setPressure] = useState(() => "1025.0 mb")
    
  
    return (
        <>
        <div>
            <div className="d-flex justify-content-center pt-3">
                 <h5 className="text-white">{countryName}, {continentName}</h5>
            </div>
          
            <div className="row">
                <div className="col  mt-5 bg-danger d-flex justify-content-center">
                   <div>
                   <img src="/src/assets/images/partlyClowdy.png" className="img-weather"></img>
                    <h5 className="text-white mt-3 ml-2">{countryCurrentWeather}</h5>
                   </div>
                </div>
                <div className="col bg-primary d-flex mt-5 justify-content-center">
                    <div className="mt-3">
                    <h1 className="text-white mt-5">{countryCurrentTemperature}<span className="ml-2">&#8451;</span> </h1>
                    </div>
                    
                </div>
                <div className="col bg-success d-flex mt-5  justify-content-center">
                    <div className="text-white mt-5">
                        <p>Wind:&nbsp;{windSpeed}<br></br>Precip:&nbsp;{precipitation}<br></br>Pressur:&nbsp;{pressure}</p>
                        {/* <p></p>
                        <p></p> */}
                    </div>
                    
                </div>
            </div>

        </div>
        </>
    )
}
export default CountryTemperature