import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import WelcomePageLayout from "./Pages/homePage";
import About from "./Pages/aboutPage";
import Error from "./Pages/error404Page";
import AccomodationInfo from "./Pages/accomodationInfoPage";
import Header from "./Components/header";
import Footer from "./Components/footer";


const Users = () => <div>Users</div>;
const Posts = () => <div>Posts</div>;

function Routing() {
   return (
      <div className="App">
         <Header />
         <div className="nav">
            <NavLink
               to="/"
               style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#f0f0f0",
               })}
            >
               Acceuil
            </NavLink>
            <NavLink
               to="/about"
               style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#f0f0f0",
               })}
            >
               A Propos
            </NavLink>
         </div>

         <Routes>
            <Route path="/" element={<WelcomePageLayout />} />
            <Route
               path="/AccomodationInfo/:id"
               element={<AccomodationInfo />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default Routing;
