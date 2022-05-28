import {useReducer} from 'react';
import { WeatherContext } from './WeatherContext';
import { weatherReducer } from './weatherReducer';


export interface CityState {
    city: string;
    country: string;
}
const initialState: CityState = {
    city: '',
    country:''
}
interface Props {
    children: JSX.Element | JSX.Element[]
}


const WeatherProvider = ({children}: Props) =>{
    const [state] = useReducer(weatherReducer, initialState)
    // const [search, setSearch] = useState();

    return(
        <WeatherContext.Provider value={{
            ...state,
        }}>
        {children}
        </WeatherContext.Provider>
    )
}
export {
    WeatherProvider
}