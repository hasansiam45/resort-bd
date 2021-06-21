import logo from './logo.svg';
import React, {createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import AddResorts from './components/AddResorts/AddResorts';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import Dhaka from './components/Spot/Dhaka/Dhaka';
import Chittagong from './components/Spot/Chittagong/Chittagong';
import Bandorban from './components/Spot/Bandorban/Bandorban';
import Cox from './components/Spot/Cox/Cox';
import Sajek from './components/Spot/Sajek/Sajek';
import Sylhet from './components/Spot/Sylhet/Sylhet';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Spot/Booking/Book/Book'
import AllBookings from './components/AllBookings/AllBookings';
import MyBookings from './components/MyBookings/MyBookings';
import AddReviews from './components/AddReviews/AddReviews';
import ManageResorts from './components/ManageResorts/ManageResorts';

export const UserContext = createContext()


function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
     <Router>
      <Switch>
        
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        
        
        <PrivateRoute path="/addResorts">
         <AddResorts></AddResorts>
          </PrivateRoute>
          
          <PrivateRoute path="/addAdmin">
         <AddAdmin></AddAdmin>
          </PrivateRoute>

          <Route path="/addReviews">
         <AddReviews></AddReviews>
          </Route>
          
          <PrivateRoute path="/manageResorts">
         <ManageResorts></ManageResorts>
          </PrivateRoute>
          
          
          <PrivateRoute path="/allBookings">
         <AllBookings></AllBookings>
          </PrivateRoute>
          
          <PrivateRoute path="/bookings">
         <MyBookings></MyBookings>
        </PrivateRoute>
        
        <Route path="/contact">
         <Contact></Contact>
          </Route>
          
        <Route path="/login">
          <Login></Login>
          </Route>
          
          {/* ALL SPOT ROUTE */}
          
        <Route path="/dhaka">
          <Dhaka></Dhaka>
          </Route>
          
          <Route path="/bandorban">
          <Bandorban></Bandorban>
          </Route>

          <Route path="/chittagong">
          <Chittagong></Chittagong>
          </Route>
          
          <Route path="/cox">
          <Cox></Cox>
          </Route>
          
          
          <Route path="/sajek">
          <Sajek></Sajek>
          </Route>
          
          <Route path="/sylhet">
          <Sylhet></Sylhet>
          </Route>
          
          <PrivateRoute path="/book/:id">
          <Book></Book>
          </PrivateRoute>
          
          
        <Route exact path="/">
          <Home></Home>
        </Route>
        
      </Switch>
    </Router>
    
    </UserContext.Provider>
    
  );
}

export default App;
