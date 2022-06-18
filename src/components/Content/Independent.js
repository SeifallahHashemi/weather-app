import React from "react";
import classes from "../../Sass/layout/_Independent.module.scss";
import useRequest from "../../hooks/useRequest";
import {format} from "date-fns";

const Independent = (props) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${props.city}&days=10&aqi=no&alerts=no`;
  const {data} = useRequest(url);
  const temp = data?.current?.temp_c || "0";
  const lastUpdated = data?.current?.last_updated;
  const date = new Date(lastUpdated) && new Date();
  const lastUpdatedFormat = format(date, "HH:mm");
  return(
      <>
        <span>{temp}&#8451;</span>
          {Object.keys(data).length !== 0 && <img src={data.current.condition.icon} alt="weather icon" className={classes.weather__icon}/>}
          <figcaption><span className={props.className}>LastUpdate:</span>{lastUpdatedFormat}</figcaption>
      </>
  )
};
export default React.memo(Independent);