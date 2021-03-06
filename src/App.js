import logo from './logo.svg';
import React, { createContext, useState } from "react";
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
import Barisal from './components/Spot/Barisal/Barisal';
import Khulna from './components/Spot/Khulna/Khulna';
import Rajshahi from './components/Spot/Rajshahi/Rajshahi';
import Rangpur from './components/Spot/Rangpur/Rangpur';
import Sylhet from './components/Spot/Sylhet/Sylhet';
import Mymensingh from './components/Spot/Mymensingh/Mymensingh';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Spot/Booking/Book/Book'
import AllBookings from './components/AllBookings/AllBookings';
import MyBookings from './components/MyBookings/MyBookings';
import AddReviews from './components/AddReviews/AddReviews';
import ManageResorts from './components/ManageResorts/ManageResorts';
import ResortDetails from './components/Spot/Details/ResortDetails';

export const UserContext = createContext()


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/addReviews">
            <AddReviews></AddReviews>
          </Route>

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

          <Route path="/mymensingh">
            <Mymensingh></Mymensingh>
          </Route>

          <Route path="/barisal">
            <Barisal></Barisal>
          </Route>

          <Route path="/rangpur">
            <Rangpur></Rangpur>
          </Route>

          <Route path="/chittagong">
            <Chittagong></Chittagong>
          </Route>

          <Route path="/khulna">
            <Khulna></Khulna>
          </Route>

          <Route path="/rajshahi">
            <Rajshahi></Rajshahi>
          </Route>

          <Route path="/sylhet">
            <Sylhet></Sylhet>
          </Route>

          <Route path="/details/:id">
            <ResortDetails></ResortDetails>
          </Route>
          
          {/* Private ROUTE */}

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/addResorts">
            <AddResorts></AddResorts>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute path="/manageResorts">
            <ManageResorts></ManageResorts>
          </PrivateRoute>

          <PrivateRoute path="/allBookings">
            <AllBookings></AllBookings>
          </PrivateRoute>

          <PrivateRoute path="/bookings">
            <MyBookings></MyBookings>
          </PrivateRoute>

          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>

        </Switch>
      </Router>

    </UserContext.Provider>

  );
}

export default App;
