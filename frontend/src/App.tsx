import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { Home } from "./layouts/HomePage/Home";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { SearchBooksPage } from "./layouts/SearchBookPage/SearchBooksPage";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBooksPage />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
