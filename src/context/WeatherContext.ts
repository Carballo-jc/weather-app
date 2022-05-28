import { createContext } from "react";


export interface WeatherContextProps {
    city: string;
    country: string;
}

export const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps);
