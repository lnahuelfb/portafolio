import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
