import {format} from "date-fns";
import classes from "../../Sass/layout/_current.module.scss";

const Current = (props) => {
    const Temperature = Math.trunc(props?.temp);
    const formatDate = format(new Date(props.time), "dd EEE MMM");
    const formatDate_2 = format(new Date(props.time), "hh:mm aaa");
  return(
      <li className={classes.current__weather__items}>
          <span>{Temperature}&#8451;</span>
          {props?.icon && <img src={props.icon} alt="weather icon"/>}
          <span>{formatDate}</span>
          <span>{formatDate_2}</span>
      </li>
  )
};
export default Current;