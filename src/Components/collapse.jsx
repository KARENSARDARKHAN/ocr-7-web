import React, { useState } from "react";
import ArrowTop from "../assets/ArrowTop.png";
import ArrowBot from "../assets/ArrowBot.png";

export default function CollapseTool({ txt, title, txtArray }) {
   const [isOpen, setIsOpen] = useState(false);

   return isOpen ? (
      <div>
         <button
            className="collapseButton"
            type="button"
            onClick={() => setIsOpen(false)}>
            <span>{title}</span>
            <img src={ArrowTop} alt="Arrow going up" />
         </button>
         {txtArray ? (
            <div className="collapseArray">
               {txtArray.map((txte, e) => (
               <p className="collapsingArray" key={e}>{txte}</p>
               ))}
            </div>) : (<p className="collapseP">{txt}</p>)}
      </div>) : (
      <button
         className="collapseButton"
         type="button"
         onClick={() => setIsOpen(true)}>
         <span>{title}</span>
         <img src={ArrowBot} alt="Arrow going down" />
      </button>
   );
}
