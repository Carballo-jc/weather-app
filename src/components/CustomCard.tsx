import { kelvin, urlImage, WEEK_DAYS } from "../utils";

export const CustomCard = (props: any) => {
  const icon = `${urlImage}${props.weather[0]?.icon}.png`;
  return (
    <div className="card">
      <div className="container_header_card">
        <span className="container_item_subtitle">
          {WEEK_DAYS[props.index]}
        </span>
        <img src={icon} alt="icon" width="70px" height="70px" />
      </div>
      <div className="card_item">
        <p className="card_item_text">
          Mínima:{Math.round(props.temp?.min - kelvin)}&#x2103;
        </p>
        <p className="card_item_text">
          Máxima:{Math.round(props.temp?.max - kelvin)}&#x2103;
        </p>
        <span className="span_item">{props.weather[0]?.description}</span>
      </div>
    </div>
  );
};
