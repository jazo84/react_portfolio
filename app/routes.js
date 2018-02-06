import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
import AboutMe from "./components/pages/aboutme";
import Projects from "./components/pages/projects";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} />
    </Switch>
);
