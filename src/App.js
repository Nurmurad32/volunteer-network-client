import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import WorkCollection from './components/WorkCollection/WorkCollection';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventRegister from './components/EventRegister/EventRegister';
import RegisterList from './components/RegisterList/RegisterList';
import AddList from './components/AddList/AddList';
import Donation from './components/Donation/Donation';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Switch>

          <Route exact path="/">
            
            <WorkCollection></WorkCollection>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/AddList">
            <AddList></AddList>
          </Route>

          <Route path="/registerList">
            <RegisterList></RegisterList>
          </Route>

          <Route path="/donation">
            <Donation></Donation>
          </Route>

          <Route path="/blog">
            <Donation></Donation>
          </Route>

          <Route path="/registerList">
            <RegisterList></RegisterList>
          </Route>

          <PrivateRoute path="/event">
            <EventRegister></EventRegister>
          </PrivateRoute>

          <PrivateRoute path="/register/:workId">
            <Register></Register>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
