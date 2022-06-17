import "./App.css";
import CookieBanner from "./components/CookieBanner";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [style,setStyle] = useState({})

  const moveLink = () =>{
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    const delay = Math.floor(Math.random() * 200);
    setStyle({transitionDelay: `${delay}ms`,position: "absolute",left: `${randX}px`,top: `${randY}px`, fontSize: "40px" })
  }

  return (
    <div className="app">
      <CookieBanner/>
      <nav className="app-nav">
        <Link to="/">Home</Link>
        <Link to="objective">Objective</Link>
        <Link style={style} onClick={() =>setStyle({})} onMouseEnter={moveLink} className="hide-n-seek-btn" to="teams">Teams</Link>
        <Link to="thanks">Thank You</Link>
      </nav>
      <div className="app-content">
        <Outlet />
      </div>
      <footer>
        <p>Credera ♥️ XD</p>
      </footer>
    </div>
  );
}

export default App;
