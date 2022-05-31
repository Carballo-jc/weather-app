import { WEEK_DAYS } from "../utils"


export const CustomCard = (props: any) => {
    const kelvin = 273.15
  return (
    <div className="card">
        <span>{WEEK_DAYS[props.index]}</span>
        <div className="card_item">
        <p>Minima:{Math.round(props.temp?.max - kelvin)} <span>&#x2103;</span></p>
        <p>Maxima:{ Math.round(props.temp?.min - kelvin)} <span>&#x2103;</span></p>
      </div>
          <span className="span_item">descripción: {props.weather[0]?.description}</span>
    </div>
  )
}
