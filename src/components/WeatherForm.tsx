import { CITIES } from "../utils";
import { WeatherOption } from "./WeatherOption";

export const WeatherForm = () => {
  return (
    <div className="container">
      <form>
        <div className="input_group">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="input_group">
          <label htmlFor="city">País</label>
          <select id="city" name="city">
            <option value=""> Seleccione un país</option>
            {CITIES.map(city =><WeatherOption key={city.id} {...city}/>)}
          </select>
        </div>
        <button type="submit" className="btn_submit">Consultar el clima</button>
      </form>
    </div>
  );
};
