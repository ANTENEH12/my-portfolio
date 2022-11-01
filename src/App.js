import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="mainApp">
     <Navbar/>
     <Home />
     <SocialLink/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contacts/>
    </div>
  );
}

export default App;


