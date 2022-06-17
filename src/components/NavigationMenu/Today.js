import {format} from 'date-fns';
import classes from "../../Sass/layout/_today.module.scss";
import {WiDaySnowThunderstorm} from "react-icons/wi";
import {useContext} from "react";
import RequestContext from "../../store/request-context";

const Today = () => {
    const todayFormat = format(new Date(), "HH:mm");
    const weekDayMonth = format(new Date(), "E,dd MMM");

    const reqCtx = useContext(RequestContext);

    const windPercentageCalculate = `${reqCtx.receivedData?.current?.wind_mph / 17 * 100}%`;
    const convertedWind = parseFloat(windPercentageCalculate).toFixed(0);
    const precipitationPercentageCalculate = `${reqCtx.receivedData?.current?.precip_mm / 100 * 100}%`;
    const convertedPre = parseFloat(precipitationPercentageCalculate).toFixed(0);

    return (
        <div className={classes.today}>
            <div className={classes.today__weather}>
                <div className={classes["today__weather--header"]}>
                    <div>
                        <WiDaySnowThunderstorm/>
                    </div>
                    <div>
                        <span>Today</span>
                        <span>{todayFormat}</span>
                        <span>{weekDayMonth}</span>
                    </div>
                </div>
                <div className={classes["today__weather--content"]}>
                    <strong>{reqCtx.receivedData?.current?.temp_c || "20"}&#8451;</strong>
                    <p>Tehran</p>
                    <p>Iran</p>
                </div>
                <div className={classes["today__weather--footer"]}>
                    <div className={classes["today__weather--control"]}>
                        <div className={classes["today__weather--status"]}>
                            <span>wind</span>
                            <span>{convertedWind}%</span>
                        </div>
                        <div className={classes["today__weather--progress"]}>
                        <span>
                            <span style={{width: windPercentageCalculate}}></span>
                        </span>
                        </div>
                    </div>
                    <div className={classes["today__weather--control"]}>
                        <div className={classes["today__weather--status"]}>
                            <span>precipitation</span>
                            <span>{convertedPre}%</span>
                        </div>
                        <div className={classes["today__weather--progress"]}>
                            <span>
                                <span style={{width: precipitationPercentageCalculate}}></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Today;