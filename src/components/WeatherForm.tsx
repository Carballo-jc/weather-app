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
       <div className="container_items">
         {/* {alerta && <p>{alerta}</p>} */}
        <div className="input_group">
          <label htmlFor="country" className="container_item_subtitle">Ciudad</label>
          <select id="country" name="city"
          value={search.city}
          onChange={handleCityChange}
          >
            <option value=""> Seleccione </option>
            {CITIES.map(city =><WeatherOption key={city.id} {...city}/>)}
          </select>
        </div>
       </div>
        <button type="submit" className="btn_submit">Consultar</button>
      </form>
    </div>
  );
};
