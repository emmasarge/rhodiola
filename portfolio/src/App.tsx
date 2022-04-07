import * as React from "react";
import "./App.css";
import { HomeHeroOrganism } from "./components/home-hero";
import { NavbarOrganism } from "./components/nav-bar/nav-bar.organism";

function App() {
  return (
    <div className="App">
      <NavbarOrganism />
      <HomeHeroOrganism />
    </div>
  );
}

export default App;
