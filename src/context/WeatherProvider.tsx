import { useReducer, useState} from 'react';
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
    city: '',
  });
  const handleCityChange = (e: any) => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    })
} 
    const getWeatherCity = (e:any) => {
        e.preventDefault()
        Promise.all([
            searchWeatherCity(search),
            searchWeatherDays(search),
        ])
        .then( response => {
              dispatch({type:'searchWeather', payload: response[0]});
              dispatch({type:'seachWeatherDays', payload:response[1]});
            });
    }

    return(
        <WeatherContext.Provider value={{
            ...state,
            search,
            handleCityChange,
            getWeatherCity
        }}>
        {children}
        </WeatherContext.Provider>
    )
}
export {
    WeatherProvider
}