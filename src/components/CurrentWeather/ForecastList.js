import React, {Fragment, useContext, useMemo} from "react";
import Current from "./Current";
import RequestContext from "../../store/request-context";

const ForecastList = () => {
    const reqCtx = useContext(RequestContext);
    const forecastDay = useMemo(() => reqCtx.receivedData?.forecast?.forecastday[0]?.hour, [reqCtx]);
    return(
      <Fragment>
          {forecastDay.map(item => {
              return (
                  <Current key={Math.random().toString()} icon={item?.condition?.icon} temp={item?.temp_c} time={item.time}/>
              )
          })}
      </Fragment>
  )
};
export default React.memo(ForecastList);