import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export const WeatherData = () => {
    const {search, dataWeather } = useContext(WeatherContext);
    const kelvin = 273.15
  return (
    <div className="container">
      <h2 className="container_item_subtitle">El Clima de {search.city}</h2>
      <p>{ Math.round(dataWeather?.main?.temp - kelvin)}<span>&#x2103;</span></p>
      <div className="temp_min_max">
        <p>Minima: {Math.round(dataWeather?.main?.temp_min - kelvin)} <span>&#x2103;</span></p>
        <p>Maxima: { Math.round(dataWeather?.main?.temp_max - kelvin)} <span>&#x2103;</span></p>
      </div>
    </div>
  );
};
