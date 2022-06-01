import { createContext } from "react";
import { WeatherCityResponse } from "../interfaces/weatherCity";
import { WeatherDays } from "../interfaces/weatherDay";


export interface WeatherContextProps {
    loading: boolean;
    dataWeather: WeatherCityResponse;
    dataDay: WeatherDays;
    search: any;
    handleCityChange: any;
}

export const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps);
