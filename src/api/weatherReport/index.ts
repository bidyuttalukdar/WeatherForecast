import axios from "axios";

const getWeatherAPI = async ():Promise<void> => {
    const url ="https://api.weatherstack.com/current?access_key=740b7878e4b98ede4704ca30169b288f&query=New York"
    console.log("getWeatherAPI");
    
    await axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default getWeatherAPI;