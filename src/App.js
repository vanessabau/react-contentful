import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import SingleArticle from "./Pages/SingleArticle";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Blogs" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Blogs/:slug" component={SingleArticle} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
