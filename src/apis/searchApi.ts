import { API_KEY } from './../utils/index';
import axios from 'axios'

export const searchWeatherCity = async(datos: any) => {
    try {
        const {city,country} = datos;
        const appId = API_KEY
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
        const {data} = await axios(url);
        const {lat, lon}= data[0];
        const urlWeather = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${appId}`;
        const res = await axios(urlWeather);
        console.log(res);
    } catch (error) {
        console.log(error)
        
    }
}