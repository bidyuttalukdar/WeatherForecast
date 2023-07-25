import SearchBar from "../src/components/SearchBar/SearchBar.tsx"
import CountryTemperature from "../src/components/CountryTemperature/CountryTemperature.tsx"
import DayWiseWeather from "../src/components/DayWiseWeather/DayWiseWeather.tsx"
// import SearchBar from "../src/components/TitleBar"

import './App.css'

function App() {
 

  return (
    <>
      <SearchBar></SearchBar>
      <div className="bg-body">
        <CountryTemperature></CountryTemperature>
        <DayWiseWeather></DayWiseWeather>
      </div>
     
    </>
  )
}

export default App
