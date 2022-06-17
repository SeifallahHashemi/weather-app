import {WiThermometer} from "react-icons/wi";
import { IoClose } from "react-icons/io5";
import {HiMenu} from "react-icons/hi";

const Header = (props) => {
    const clickHandler = evt => {
        props.onConfirm(prevState => !prevState);
    }
  return(
      <div className={props.className}>
          <WiThermometer />
          <h1>weather app</h1>
          <IoClose onClick={clickHandler}/>
          <HiMenu onClick={clickHandler}/>
      </div>
  )
};
export default Header;