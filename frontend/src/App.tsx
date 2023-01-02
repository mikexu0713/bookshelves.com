import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { Home } from "./layouts/HomePage/Home";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { SearchBooksPage } from "./layouts/SearchBookPage/SearchBooksPage";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/search">
            <SearchBooksPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
