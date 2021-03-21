import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './Assets/css/default.min.css'

// components
import Header from './Components/headerComponent/header'
import Footer from './Components/footerComponent/footer'
import ProfilePage from './Components/scenes/profilePage/profilePage'
import ProjectsPage from './Components/scenes/projectsPage/projectsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="sticky"/>
        <Switch>
          <Route exact path="/">
            <ProfilePage/>
          </Route>
          <Route path="/projects">
            <ProjectsPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
