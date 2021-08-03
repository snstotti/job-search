import './App.css';
import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import HomeContainer from './component/HomeContainer/HomeContainer';
import { AlertComponent } from './component/Alert/AlertComponent';
import Intro from './component/Intro/Intro';
import JobList from './component/JobList/JobList';

function App() {

  return (
    <div className="">
      <Header />
      <Intro />

      <Switch>
        <Route  path='/home' component={HomeContainer} />
        <Route  path='/resume' component={AlertComponent} />
        <Route  path='/position' component={JobList} />
        <Route  path='/company' component={AlertComponent} />
        <Route  path='/pages' component={AlertComponent} />
        <Redirect from='/' to='/home'/>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default withRouter(App)