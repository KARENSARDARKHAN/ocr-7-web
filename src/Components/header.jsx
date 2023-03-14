import React from "react";
import Img from "../assets/heaaderlogo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
   return (
      <div className="header">
         <nav>
            <img
               className="headerLogo"
               src={Img}
               alt="Kasa brand logo flagship"
            ></img>
            <ul>
               <li>
                  <NavLink
                     to="/"
                     style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                     })}
                     className="items">
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                     })}
                     className="items">
                     A Propos
                  </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
}

