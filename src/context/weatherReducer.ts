import { CityState } from "./WeatherProvider";

type WeatherAction = {type: 'setSearchCity', payload: { city: string, country:string}}
export const weatherReducer = (state: CityState , action: WeatherAction): CityState => {


switch (action.type) {
    case 'setSearchCity':
        return {
            ...state,
            ...action.payload,
        }

    default:
        return state;
}

}