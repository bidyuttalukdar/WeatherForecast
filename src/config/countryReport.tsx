import { useState } from "react"
import CountryReport from "../interfaces/CountryReport/index"

function setCountryList():CountryReport[] {
    const countryList:CountryReport[] =  [{
        countryName:"India",
        cityName:"Hyderabad",
        temperature:"26",
        precipitation:0,
        wind:20,
        pressure:900,
        weatherStatus:"Cloudy",
        imgCode:"cloudy"  
    },
    {
        countryName:"India",
        cityName:"Delhi",
        temperature:"29",
        precipitation:90,
        wind:30,
        pressure:1108,
        weatherStatus:"Rainy",
        imgCode:"rainy"
    },
    {
        countryName:"India",
        cityName:"Bangalore",
        temperature:"41",
        precipitation:0,
        wind:24,
        pressure:1058,
        weatherStatus:"Sunny",
        imgCode:"sunny"
    },
    {
        countryName:"India",
        cityName:"Kolkata",
        temperature:"24",
        precipitation:25,
        wind:35,
        pressure:1258,
        weatherStatus:"Partly Cloudy",
        imgCode:"partlyCloudy"
    },
    {
        countryName:"India",
        cityName:"Chennai",
        temperature:"28",
        precipitation:60,
        wind:40,
        pressure:1505,
        weatherStatus:"Thunder Storm",
        imgCode:"storm"
    },
]
    return countryList
}

export default setCountryList