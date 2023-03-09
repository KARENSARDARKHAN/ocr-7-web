import React from "react";
import Img from "../assets/logo.png";

export default function Footer() {
   return (
      <div className="footer">
         <div className="footerLogo">
            <img src={Img} alt="Kasa brand logo"></img>
         </div>
         <p className="footerCopyrights">© 2020 Kasa. All rights reserved</p>
      </div>
   );
}