import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { urlImage } from "../utils";

export const WeatherData = () => {
    const {search, dataWeather } = useContext(WeatherContext);
    const kelvin = 273.15
    let iconData = dataWeather?.weather[0]?.icon;
    const icon =`${urlImage}${iconData}.png`;
  return (
    <div className="container">
      <div className="container_header_card">
      <h2 className="container_header_title">El Clima de {search.city}</h2>
      <img src={icon} alt="icon" width="100px" height="100px" />
      </div>
      <p>{ Math.round(dataWeather?.main?.temp - kelvin)}
      <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>Minima: {Math.round(dataWeather?.main?.temp_min - kelvin)} <span>&#x2103;</span></p>
        <p>Maxima: { Math.round(dataWeather?.main?.temp_max - kelvin)} <span>&#x2103;</span></p>
      </div>
    </div>
  );
};
