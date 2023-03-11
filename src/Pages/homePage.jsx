import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../api/list.json";
import Errorset from "../Components/_ErrorSet";
import HomeImg from "../assets/Home.png";
import "../styles/stylesheet.css";

export default function WelcomePageLayout() {
   const [currImg] = useState(0);
   const TitleMeta = "Kasa : location d'appartements entre particuliers";
   const DescriptionMeta =
      "Kasa est la première agence en ligne de location d'appartements entre particuliers en France";

   return (
      <div className="home">
         <Errorset title={TitleMeta} description={DescriptionMeta} />

         <section className="WelcomePanel">
            <p>Chez vous, partout et ailleurs</p>
            <div className="WelcomePanelPicture">
               <img src={HomeImg} alt="Slogan panel"></img>
            </div>
         </section>

         <div className="TilesList">
            {Products &&
               Products.map((product) => (
                  <Link
                     to={`/AccomodationInfo/${product.id}`}
                     className="ItemInfo"
                     key={product.id}
                  >
                     <img
                        src={product.pictures[currImg]}
                        alt="Accomodation"
                        className="ItemPicture"
                     />

                     <div className="overlay" />

                     <div className="ItemTitle">
                        <span>{product.title}</span>
                     </div>
                  </Link>
               ))}
         </div>
      </div>
   );
}
