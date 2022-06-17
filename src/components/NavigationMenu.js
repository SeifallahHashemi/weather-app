import classes from '../Sass/layout/_navigationMenu.module.scss';
import Header from "./NavigationMenu/Header";
import Menu from "./NavigationMenu/Menu";
import Today from "./NavigationMenu/Today";
import {useState} from "react";

const NavigationMenu = (props) => {
    const [toggleClass, setToggleClass] = useState(false);
    const addedClass = toggleClass && classes.active;
    return (
        <div className={`${props.className} ${classes.sidebar} ${addedClass}`}>
            <Header className={classes.header} onConfirm={setToggleClass}/>
            <Menu/>
            <Today/>
        </div>
    )
};
export default NavigationMenu;