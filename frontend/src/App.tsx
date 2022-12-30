import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { Home } from "./layouts/HomePage/Home";
import { Footer } from "./layouts/NavBarAndFooter/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
