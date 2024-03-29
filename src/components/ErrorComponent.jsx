import React from 'react'
import LottienAnimation from './Nosotros/Lottie'
import ErrorAnimation from "/public/errorAnimation.json";
import { NavLink } from 'react-router-dom';
import '@styles/error.css'
const ErrorComponent = () => {
  return (
    <main style={{maxWidth: "1300px", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
      <NavLink className="volver" to="/">
       <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
        </svg>
        <span className="text">Volver</span>
        <span className="circle"></span>
        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
        </svg>
      </NavLink>
      <LottienAnimation alto={"100%"} ancho={"100%"} animacion={ErrorAnimation}/>
    </main>
  )
}

export default ErrorComponent