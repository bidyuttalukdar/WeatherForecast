//components
import SearchBar from "./components/NavBar/SearchBar.tsx"
import CountryTemperature from "./components/CountryTemperature"
import DayWiseWeather from "./components/DayWiseWeather";
//styles
import './App.css'

function App() {
  return (
    <>
      <SearchBar/>
      <div className="bg-body">
        <CountryTemperature/>
        <DayWiseWeather/>
      </div>
    </>
  )
}

export default App
