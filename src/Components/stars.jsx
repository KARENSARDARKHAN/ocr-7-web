import React from "react";
import Star from "../assets/Star.png";
import EmptyStar from "../assets/EmptyStar.png";

export default function Evaluation (rate) {
   const range = [1, 2, 3, 4, 5];

   return range.map((rangeElem, key) =>
      rangeElem <= rate.rate ? (
         <img src={Star} alt="Full star" key={key} />
      ) : (
         <img
            src={EmptyStar}
            alt="Empty star"
            key={key}
            className="emptyStar"/>
      )
   );
}
