import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Assets/css/default.min.css";

// components
import Header from "./Components/headerComponent/header";
import ScrollToTop from "./Components/scrollToTop";
import ProfilePage from "./Components/scenes/profilePage/profilePage";
import ProjectsPage from "./Components/scenes/projectsPage/projectsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header className="sticky" />
        <Switch>
          <Route exact path="/">
            <ProfilePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
