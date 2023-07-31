//components
import SearchBar from "./components/NavBar";
import CountryTemperature from "./components/CountryTemperature";
import DayWiseWeather from "./components/DayWiseWeather";
//styles
import "./App.css";

function App() {
  return (
    <>
    <div className="h-100">
      <SearchBar />
      <div className="bg-body">
        <CountryTemperature />
        <DayWiseWeather />
      </div>
      </div>
    </>
  );
}

export default App;
