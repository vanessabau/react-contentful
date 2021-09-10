import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
