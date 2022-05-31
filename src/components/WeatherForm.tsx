import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import { CITIES } from "../utils";
import { WeatherOption } from "./WeatherOption";

export const WeatherForm = () => {
  const {search, handleCityChange, getWeatherCity } = useContext(WeatherContext);

 
  return (
    <div className="container">
      <form 
      onSubmit={getWeatherCity}
      >
        <div className="input_group">
          <label htmlFor="city" className="container_item_subtitle">Ciudad</label>
          <input type="text" id="city" name="city"
          value={search.city}
          onChange={handleCityChange}
          />
        </div>
        <div className="input_group">
          <label htmlFor="country" className="container_item_subtitle">País</label>
          <select id="country" name="country"
          value={search.country}
          onChange={handleCityChange}
          >
            <option value=""> Seleccione un país</option>
            {CITIES.map(city =><WeatherOption key={city.id} {...city}/>)}
          </select>
        </div>
        <button type="submit" className="btn_submit">Consultar</button>
      </form>
    </div>
  );
};
