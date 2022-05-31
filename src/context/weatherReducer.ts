import { WeatherCityResponse } from "../interfaces/weatherCity";
import { WeatherDays } from "../interfaces/weatherDay";
import { WeatherState } from "./WeatherProvider";

type WeatherAction = {type: 'searchWeather', payload: WeatherCityResponse} |
{type: 'seachWeatherDays', payload: WeatherDays};
export const weatherReducer = (state: WeatherState , action: WeatherAction): WeatherState => {


switch (action.type) {
    case 'searchWeather':
        return {
            ...state,
            loading: true,
            dataWeather:action.payload
            
        };
        case 'seachWeatherDays':
            return {
                ...state,
                loading: true,
                dataDay: action.payload
            }

    default:
        return state;
}

}