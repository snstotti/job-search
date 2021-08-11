import './App.css';
import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer';
import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import HomeContainer from './component/HomeContainer/HomeContainer';
import { AlertComponent } from './component/Alert/AlertComponent';
import Header from './component/Header/Header';
import JobList from './component/JobList/JobList';
import TitleComponent from './secondaryFunc/TitleComponent/TitleComponent';

function App() {

  return (
    <>
      <NavBar />
      <Header />

      <Switch>
        <Route path='/home' component={HomeContainer} />
        
        <Route 
          path='/resume' 
          render={() => <TitleComponent
          title={'Resume'}
          description={'Descriptionss'}
          component={<AlertComponent />} />}
        />

        <Route path='/position' component={JobList} />

        <Route 
          path='/company' 
          render={() => <TitleComponent
          title={'company'}
          description={'Descriptionss'}
          component={<AlertComponent />} />} />

        <Route 
          path='/pages' 
          render={() => <TitleComponent
          title={'pages'}
          description={'Descriptionss'}
          component={<AlertComponent />} />} />

        <Redirect from='/' to='/home' />
      </Switch>

      <Footer />
    </>
  );
}

export default withRouter(App)