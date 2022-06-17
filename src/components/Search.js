import {FiSearch} from "react-icons/fi";
import classes from "../Sass/layout/_search.module.scss";
import {useContext, useState} from "react";
import RequestContext from "../store/request-context";

const Search = () => {
    const [search, setSearch] = useState('');
    const reqCtx = useContext(RequestContext);
    const changeHandler = event => {
        setSearch(event.target.value);
    }
    const submitHandler = (evt) => {
        evt.preventDefault();
        // props.onSearch(search);
        reqCtx.onSearch(search);
        setSearch("");
    }
    return (
        <div className={classes.form__container}>
            <form className={classes.form} onSubmit={submitHandler}>
                <FiSearch className={classes.form__icon}/>
                <input type="text" id="searchInput" className={classes.form__input} value={search}
                       onChange={changeHandler}/>
                <label htmlFor="searchInput" className={classes.form__label}>Search</label>
            </form>
            <h2>weather forecast</h2>
        </div>
    )
};
export default Search;