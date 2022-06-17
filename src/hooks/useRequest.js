import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
// import axios from "axios";

const useRequest = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        const sendRequest = async (url) => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }catch (e) {
                toast.error(e.message);
            }
        }
        sendRequest(url);
        /*axios.get(url).then(result => {
            setLoading(true);
            setData(result.data);
        }).catch(error => {
            toast.error(error.message);
        })*/
    }, [url]);
  return {loading, data};
}
export default useRequest;