import React, {useCallback, useMemo, useState} from "react";
import useRequest from "../hooks/useRequest";
const RequestContext = React.createContext({
    receivedData: {},
    search: "Tehran",
    onSearch: (searchValue) => {}
});

export const RequestContextProvider = props => {
    const [searchResult, setSearchResult] = useState("Tehran");
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResult}&days=10&aqi=no&alerts=no`;
    const {data} = useRequest(url);
    const searchHandler = useCallback((searchValue) => {
        setSearchResult(searchValue);
    }, []);
    const valueObj = useMemo(() => {
        return { search: searchResult, receivedData: data, onSearch: searchHandler}
    }, [searchResult, data, searchHandler])
    return(
        <RequestContext.Provider value={valueObj}>
            {props.children}
        </RequestContext.Provider>
    )
}
export default RequestContext;