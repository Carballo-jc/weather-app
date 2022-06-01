import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { CITIES, kelvin } from "../utils";
import { WeatherOption } from "./WeatherOption";

export const WeatherForm = () => {
  const { search, handleCityChange, dataWeather } = useContext(WeatherContext);
  return (
    <div className="container">
      <form>
        <div className="container_items">
          <div className="input_group">
            <label htmlFor="country" className="container_item_subtitle">
              Seleccione una Ciudad
            </label>
            <select
              id="country"
              name="city"
              value={search.city}
              onChange={handleCityChange}
            >
              {CITIES.map((city) => (
                <WeatherOption key={city.id} {...city} />
              ))}
            </select>
          </div>
        </div>
      </form>
      <p className="container_item_subtitle">Clima Hoy</p>
      {dataWeather ?
      <>
      <p>Temperatura: {Math.round(dataWeather?.main?.temp - kelvin) || ''}<span>&#x2103; &#127777;</span></p> 
       <p>Humedad: {dataWeather?.main?.humidity || ''}% &#127783;</p> 
      </>: ''}
    </div>
  );
};
