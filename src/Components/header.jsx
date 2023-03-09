import React from "react";
import Img from "../assets/heaaderlogo.png";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div className="header">
         <nav>
            <img className="headerLogo" src={Img} alt="Kasa brand logo flagship"></img>
            <ul>
               <li><Link to="/" className="items">Accueil</Link></li>
               <li><Link to="/about" className="items">A Propos</Link></li>
            </ul>
         </nav>
      </div>
   );
}