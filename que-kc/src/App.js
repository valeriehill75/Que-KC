import React from 'react';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import './App.scss';
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path={'/'}>
          <Homepage/>
        </Route>
        <Route exact path ={'/profile'}>
          <Profile/>
        </Route>
        <Route>
          <Homepage/>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
