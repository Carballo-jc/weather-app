import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { CustomCard } from "./CustomCard"
import { WeatherData } from "./WeatherData"
import { WeatherForm } from "./WeatherForm"

export const WeatherApp = () => {
  const {dataWeather, dataDay} = useContext(WeatherContext);
 
  return (
    <>
    <main className="two_columns">
        <WeatherForm />
        {dataWeather?.name ? <WeatherData /> : null }
    </main>
        <div className="cards">
        {dataDay?.daily?.map( (day,index) => {
          return(
              <CustomCard key={index} {...day} index={index} />
          )
        })}
            </div>
    </>
  )
}
