import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePageLayout from "./Pages/homePage";
import About from "./Pages/aboutPage";
import Error from "./Pages/error404Page";
import AccomodationInfo from "./Pages/accomodationInfoPage";
import Header from "./components/header";
import Footer from "./components/footer";

function Routing() {
   return (
      <div className="App">
         <Header/>
         <Routes>
            <Route path="/"
               element={<WelcomePageLayout />}/>
            <Route path="/AccomodationInfo/:id"
               element={<AccomodationInfo />}/>
            <Route path="/about"
               element={<About />}/>
            <Route path="/*"
               element={<Error />}/>
         </Routes>
         <Footer/>
      </div>
   );
}

export default Routing;
