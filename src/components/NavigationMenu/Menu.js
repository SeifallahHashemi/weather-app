import React from "react";
import { MdOutlineDashboardCustomize, MdBarChart } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import classes from "../../Sass/layout/_menu.module.scss"
const Menu = () => {
  return(
      <nav className={classes.nav}>
          <ul className={classes.nav__list}>
              <li className={classes.nav__list__item}>
                  <MdOutlineDashboardCustomize />
                  <a href="#" className={classes.nav__list__item__link}>Dashboard</a>
              </li>
              <li className={classes.nav__list__item}>
                  <MdBarChart />
                  <a href="#" className={classes.nav__list__item__link}>Chart</a>
              </li>
              <li className={classes.nav__list__item}>
                  <SiGooglemaps />
                  <a href="#" className={classes.nav__list__item__link}>Map</a>
              </li>
              <li className={classes.nav__list__item}>
                  <BsFillCalendarFill />
                  <a href="#" className={classes.nav__list__item__link}>Calendar</a>
              </li>
              <li className={classes.nav__list__item}>
                  <AiFillSetting />
                  <a href="#" className={classes.nav__list__item__link}>Setting</a>
              </li>
          </ul>
      </nav>
  )
};
export default React.memo(Menu);