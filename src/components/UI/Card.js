import classes from "../../Sass/layout/_card.module.scss";
const Card = (props) => {
  const classNames = `${classes.card} ${props.className}`
  return(
      <div className={classNames}>{props.children}</div>
  )
};
export default Card;