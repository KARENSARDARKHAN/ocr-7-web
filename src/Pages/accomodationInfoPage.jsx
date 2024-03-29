import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../api/list.json";
import Slider from "../Components/slideshow";
import Evaluation from "../Components/stars";
import CollapseTool from "../Components/collapse";
import Errorset from "../Components/_ErrorSet";
import "../styles/stylesheet.css";

export default function AccomodationInfo() {
   const params = useParams();

   const Navigate = useNavigate();
   useEffect(() => {
      let product = Products.find((product) => params.id === product.id);
      if (!product) {
         Navigate("/error");
      }
   });

   return (
      <div id="house">
         <div className="house">
            {Products.filter((product) => product.id === params.id).map(
               (product, index) => (
                  <div
                     key={product.id - index}
                     className="accomodationcontained"
                  >
                     <Errorset
                        title={product.title}
                        description={product.description}
                     />

                     <div className="accomodationSlideshow">
                        <Slider data={product.pictures} />
                     </div>

                     <div className="accomodationContainer">
                        <div className="accomodationLeftSide">
                           <h2>{product.title}</h2>
                           <p className="accomodationLocation">
                              {product.location}
                           </p>
                           <div className="accomodationTags">
                              {product.accomodationTags.map(
                                 (accomodationTag, key) => (
                                    <div className="accomodationTag" key={key}>
                                       {accomodationTag}
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                        <div className="accomodationRightSide">
                           <div className="accomodationName">
                              <p>{product.host.name}</p>
                              <img
                                 className="accomodationOwner"
                                 src={product.host.picture}
                                 alt="Owner of the accomodation"
                              />
                           </div>

                           <div className="rating">
                              <Evaluation rate={product.rating} />
                           </div>
                        </div>
                     </div>

                     <div className="Collapsed">
                        <div className="Collapsed2">
                           <CollapseTool
                              title={"Description"}
                              txt={product.description}
                           />
                        </div>

                        <div className="Collapsed2">
                           <CollapseTool
                              title={"Équipements"}
                              txtArray={product.equipments}
                           />
                        </div>
                     </div>
                  </div>
               )
            )}
         </div>
      </div>
   );
}
