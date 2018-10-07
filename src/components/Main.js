import React from 'react';
import LandingPage from './LandingPage';
import aboutme from './AboutMe/aboutme';
// import projects from './projects';
import testTryProject from './Project/testTryProject';
import Resume from './Resume/resume';
import Contact from './Contact/contact';
// import GotGames from './GotGames';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    {/* <Route exact path = "/" component = {LoadingPage} /> */}
    <Route exact path = "/" component = {LandingPage} />
    {/* <Route path = "/gotgames" component = {GotGames} /> */}
    <Route path = "/testTryProject" component = {testTryProject} />
    <Route path = "/resume" component = {Resume} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/aboutme" component = {aboutme} />
  </Switch>
)

export default Main;
