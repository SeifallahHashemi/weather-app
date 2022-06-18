import React from "react";
import classes from "../../Sass/layout/_citiesForecast.module.scss";
import china from '../../assets/china.jpg';
import china_o from '../../assets/china_o.jpg';
import tehran from '../../assets/tehran.jpg';
import tehran_o from '../../assets/tehran_o.jpg';
import london from '../../assets/london.jpg';
import london_o from '../../assets/london_o.jpg';
import rome from '../../assets/rome.jpg';
import rome_o from '../../assets/rome_o.jpg';
import moscow from '../../assets/moscow.jpg';
import moscow_o from '../../assets/moscow_o.jpg';
import amsterdam from '../../assets/amsterdam.jpg';
import amsterdam_o from '../../assets/amsterdam_o.jpg';
import paris from '../../assets/paris.jpg';
import paris_o from '../../assets/paris_o.jpg';
import madrid from '../../assets/madrid.jpg';
import madrid_o from '../../assets/madrid_o.jpg';
import Independent from "./Independent";
const citiesName = [
  { name: 'Beijing', srcSet:china, id: 1, src: china_o, alt: "picture of tehran"},
  { name: 'Tehran', srcSet:tehran, id: 2, src: tehran_o, alt: "picture of tehran"},
  { name: 'London', srcSet: london, id: 3, src: london_o, alt: "picture of tehran"},
  { name: 'Amsterdam', srcSet: amsterdam, id: 4, src: amsterdam_o, alt: "picture of tehran"},
  { name: 'Madrid', srcSet: madrid, id: 5, src: madrid_o, alt: "picture of tehran"},
  { name: 'Rome', srcSet: rome, id: 6, src: rome_o, alt: "picture of tehran"},
  { name: 'Paris', srcSet: paris, id: 7, src: paris_o, alt: "picture of tehran"},
  { name: 'Moscow', srcSet: moscow, id: 8, src: moscow_o, alt: "picture of tehran"},
]
const CitiesForecast = () => {
  return(
      <section className={classes.citiesForecast}>
        {citiesName.map(city => {
          return(
              <figure className={classes.city} key={city.id}>
                <picture className={classes.city__picture}>
                  <source srcSet={city.srcSet} media="(min-width: 200px)"/>
                  <img src={city.src} alt={city.alt}/>
                </picture>
                <div className={classes.weather__description}>
                  <div className={classes.weather__description__icon}>
                    <Independent city={city.name} className={classes.lastUpdate}/>
                  </div>
                  <div className={classes.weather__description__city}>
                    <strong>{city.name}</strong>
                  </div>
                </div>
              </figure>
          )
        })}
      </section>
  )
};
export default React.memo(CitiesForecast);