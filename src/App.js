import classes from "./Sass/layout/_home.module.scss";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content/Content";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
const App = () => {
    return(
        <>
            <ToastContainer />
            <div className={classes.container}>
                <div className={classes.weatherApp}>
                    <NavigationMenu className={classes.weatherApp__sidebar}/>
                    <Content className={classes.weatherApp__content} />
                </div>
            </div>
        </>
    )
}
export default App;