import React from "react";
import classes from "../../Sass/layout/_currentWeather.module.scss";
import Card from "../UI/Card";
import ForecastList from "./ForecastList";
import {useContext} from "react";
import RequestContext from "../../store/request-context";

const CurrentWeather = () => {
    // const forecastDay = props.weather?.forecast?.forecastday[0]?.hour;
    const reqCtx = useContext(RequestContext);
    return (
        <Card className={classes.current__weather}>
            <h3>Forecast Weather: {reqCtx.search}</h3>
            <ul className={classes.current__weather__listItems}>
                <ForecastList />
            </ul>
        </Card>
    )
};
export default React.memo(CurrentWeather);