import axios from 'axios'
import { API_KEY } from '../utils';
const appId = API_KEY

export const searchWeatherCity = async(datos?: any) => {
    try {
        const {city,country} = datos;
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
        const {data} = await axios(url);
        const {lat, lon}= data[0];
        const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=1&appid=${appId}`;
        const {data: weather} = await axios(urlWeather);
        return weather;
    } catch (error) {
        console.log(error)
        
    }
}

export const searchWeatherDays = async(datos: any) => {
    const {city,country} = datos;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
    const {data} = await axios(url);
    const {lat, lon}= data[0];
    const urlWeatherDays = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=es&exclude=minutely,hourly,alerts&limit=1&appid=${appId}`;
    const {data: weatherDays } = await axios(urlWeatherDays);
    return weatherDays;

}