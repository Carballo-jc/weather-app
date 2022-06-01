import { ChangeEvent, useEffect, useReducer, useState} from 'react';
import { searchWeatherCity, searchWeatherDays } from '../apis/searchApi';
import { WeatherCityResponse } from '../interfaces/weatherCity';
import { WeatherDays } from '../interfaces/weatherDay';
import { WeatherContext } from './WeatherContext';
import { weatherReducer } from './weatherReducer';

export interface WeatherState {
    loading: boolean;
    dataWeather: WeatherCityResponse;
    dataDay: WeatherDays
}
export const initialState: WeatherState = {
    loading: true,
    dataWeather: {} as WeatherCityResponse,
    dataDay: {} as WeatherDays
}
interface Props {
    children: JSX.Element | JSX.Element[]
}

const WeatherProvider = ({children}: Props) =>{
    const [state, dispatch] = useReducer(weatherReducer, initialState)
  const [search, setSearch ] = useState({
    city: 'Buenos Aires',
  });
  const handleCityChange = (event: ChangeEvent<HTMLInputElement> ) => {
    setSearch({
        ...search,
        [event.target.name]: event.target.value
    })
} 
    useEffect(() =>{
        Promise.all([
            searchWeatherCity(search),
            searchWeatherDays(search),
        ])
        .then( response => {
              dispatch({type:'searchWeather', payload: response[0]});
              dispatch({type:'seachWeatherDays', payload:response[1]});
            });
    },[search])
    return(
        <WeatherContext.Provider value={{
            ...state,
            search,
            handleCityChange
        }}>
        {children}
        </WeatherContext.Provider>
    )
}
export {
    WeatherProvider
}