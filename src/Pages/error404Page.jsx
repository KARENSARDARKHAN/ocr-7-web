import React from "react";
import "../styles/stylesheet.css";
import Error404 from "../assets/404.png";
import { Link } from "react-router-dom";
import Meta from "../Components/_ErrorSet";

export default function Error() {
   return (
      <div className="error">
         <Meta title={null} description={null} />
         <div>
            <img src={Error404} alt="404 error" />
         </div>
         <p className="errorMessage">
            Oups! La page que vous demandez n'existe pas.
         </p>
         <Link to={`/`} className="homeLink">
            Retour sur la page d'acceuil
         </Link>
      </div>
   );
}
