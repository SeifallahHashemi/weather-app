import classes from "../../Sass/layout/_content.module.scss";
import Search from "../Search";
import CitiesForecast from "./CitiesForecast";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Card from "../UI/Card";
import {useContext} from "react";
import RequestContext from "../../store/request-context";
const Content = (props) => {
    const styles = `${props.className} ${classes.content}`;
    const reqCtx = useContext(RequestContext);
    console.log(reqCtx.receivedData);
  return(
      <section className={styles}>
          {Object.keys(reqCtx.receivedData).length !== 0 &&
            <>
                <Search />
                <CitiesForecast />
                <Card className={classes.content__current__weather}>
                    <CurrentWeather />
                </Card>
            </>
          }
          {Object.keys(reqCtx.receivedData).length === 0 && <p>No data</p>}
      </section>
  )
};
export default Content;