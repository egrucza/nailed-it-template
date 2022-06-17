import "./CookieBanner.css";
import React, { useEffect, useState } from "react";


function CookieBanner() {
  const [style,setStyle] = useState({display: "none"})

  useEffect(()=>{
    setTimeout(() => {
      setStyle({display: "block"})
    }, 10000);
  },[])

  return (
    <div style={style} >
      <div className="cookie-banner">
        <span className="cookie-banner-cookies">🍪🍪🍪🍪🍪🍪🍪🍪</span>
        <button className="cookie-banner-btn" onClick={() => setStyle({display: "none"})}>ACCEPT COOKIES</button>
      </div>
    </div>
  )

}

export default CookieBanner;