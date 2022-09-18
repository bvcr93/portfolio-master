import React from 'react'
import "./toggle.css"
import { useContext } from 'react';
import { ThemeContext } from '../context';

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    };

  return (
   <div className="t">
       <img src="https://cdn4.iconfinder.com/data/icons/biticon-weather-line/24/weather_sun_sunny_day-512.png" alt="" className="t-icon" />
    <img src="https://icons-for-free.com/iconfiles/png/512/moon-1324438836125569728.png" alt="" className="t-icon" />
    <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
   </div>
  )
}

export default Toggle