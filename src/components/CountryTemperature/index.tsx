import { useEffect, useState } from "react";
import getWeatherAPI from "/src/api/weatherReport";
import setCountryList from "../../config/countryReport";
import WeatherImages from "../../config/enums/image";
import CountryReport from "../../interfaces/CountryReport/index";

//style
import "./style.css";

const CountryTemperature = () => {
  const [searchInput, setSearchInput] = useState(() => "");
  const [countryName, setCountryName] = useState(() => "New York");
  const [cityName, setCityName] = useState(() => "United States");
  const [countryCurrentWeather, setCountryCurrentWeather] = useState(
    () => "Partly Clowdy"
  );
  const [countryCurrentTemperature, setCountryCurrentTemperature] = useState(
    () => "21.0"
  );
  const [windSpeed, setWindSpeed] = useState(() => "6.1 kmph");
  const [precipitation, setPrecipitation] = useState(() => "0.00 mm");
  const [pressure, setPressure] = useState(() => "1025.0 mb");
  const [weatherImage, setWeatherImage] = useState(
    () => WeatherImages["partlyCloudy"]
  );

  var countriesDetails: CountryReport[];
  async function getWeatherDetails() {
    countriesDetails = setCountryList();

    countriesDetails.forEach((country) => {
      if (country.cityName.toLowerCase() === searchInput.toLowerCase()) {
        setCityName(() => country.cityName);
        setCountryName(() => country.countryName);
        setCountryCurrentTemperature(() => country.temperature);
        setWindSpeed(() => String(country.wind) + " kmph");
        setPrecipitation(() => String(country.precipitation) + " mm");
        setPressure(() => String(country.pressure) + " mb");
        setWeatherImage(() => WeatherImages[String(country.imgCode)]);
        setCountryCurrentWeather(() => country.weatherStatus);
      }
    });
  }

  return (
    <>
      <div className="container-fluid ">
        <div className="row pt-3 justify-content-center">
          <div className="col-md-4">
            <form className="d-flex">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Enter the location"
                aria-label="Search"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                onClick={getWeatherDetails}
                type="button"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className=" mt-2">
          <div className="d-flex justify-content-center pt-1">
            <h5 className="text-white">
              {countryName}, {cityName}
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col mt-3 d-flex justify-content-center">
            <div>
              <img src={weatherImage} className="img-todayWeather"></img>
              <h5 className="text-white mt-3 ml-2">{countryCurrentWeather}</h5>
            </div>
          </div>
          <div className="col d-flex mt-3 justify-content-center">
            <div className="mt-3">
              <h1 className="text-white mt-5">
                {countryCurrentTemperature}
                <span className="ml-2">&#8451;</span>{" "}
              </h1>
            </div>
          </div>
          <div className="col d-flex mt-3  justify-content-center">
            <div className="text-white mt-5">
              <p>
                Wind:&nbsp;{windSpeed}
                <br></br>Precip:&nbsp;{precipitation}
                <br></br>Pressur:&nbsp;{pressure}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountryTemperature;
