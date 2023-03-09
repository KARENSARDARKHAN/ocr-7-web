import React from "react";
import { useState, useEffect } from "react";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

function Slider(product) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [right, setRight] = useState(true);
   const slides = product.data;

   useEffect(() => {
      slides.forEach((image) => {
         new Image().src = image;
      });
   }, [slides]);

   const goToPrevious = () => {
      setRight(false);
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const goToNext = () => {
      setRight(true);
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const moreOneImg = () => {
      if (slides.length - 1 >= 1) {
         return true;
      }
      return false;
   };

   return moreOneImg() ? (
      <div className="slideshowArrows">
         <img
            className="arrow theLeftArrow"
            src={ArrowLeft}
            alt="Arrow going left"
            onClick={goToPrevious}></img>

         <img
            className="arrow theRightArrow"
            src={ArrowRight}
            alt="Arrow going right"
            onClick={goToNext}></img>
         
         {slides.map((slide, index) => {
            return (
               <div
                  className={
                     index === currentIndex
                        ? `${right ? "right" : "left"}`
                        : "slideshowArrowsHidden"
                  }
                  key={index}>
                  {index === currentIndex && (
                     <img
                        src={slide}
                        alt="Accomodation"
                        className={
                           right
                              ? "slideshowArrowsRight"
                              : "slideshowArrowsLeft"
                        }
                     ></img>
                  )}
               </div>
            );
         })}
         <span className="numbers">
            {currentIndex + 1}/{slides.length}
         </span>
      </div>
   ) : (
      <img
         src={`${slides[currentIndex]}`}
         className="slideshowOne"
         alt="Accomodation"
      ></img>
   );
}
