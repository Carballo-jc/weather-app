import { urlImage, WEEK_DAYS } from "../utils"

export const CustomCard = (props: any) => {
  const icon = `${urlImage}${props.weather[0]?.icon}.png`
    const kelvin = 273.15
  return (
    <div className="card">
        <div className="container_header_card">
        <span className="container_item_subtitle">{WEEK_DAYS[props.index]}</span>
        <img src={icon}alt="icon" width="80px" height="80px"/>
        </div>
        <div className="card_item">
        <p className="card_item_text">Minima:{Math.round(props.temp?.min - kelvin)}&#x2103;</p>
        <p className="card_item_text">Maxima:{ Math.round(props.temp?.max - kelvin)}&#x2103;</p>
          <span className="span_item">{props.weather[0]?.description}</span>
      </div>
    </div>
  )
}
