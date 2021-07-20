import './App.css';
import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import HomeContainer from './component/HomeContainer/HomeContainer';
import { AlertComponent } from './component/Alert/AlertComponent';

function App() {

   

  return (
    <div className="">
      <Header />
      <Switch>
        <Route  path='/home' component={HomeContainer} />
        <Route  path='/resume' component={AlertComponent} />
        <Route  path='/position' component={AlertComponent} />
        <Route  path='/company' component={AlertComponent} />
        <Route  path='/pages' component={AlertComponent} />
        <Redirect from='/' to='/home'/>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App)