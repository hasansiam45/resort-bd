import React from 'react'
import {
    Redirect,
    Route
} from 'react-router';
import { useContext } from 'react'
import { UserContext } from '../../App'


const PrivateRoute = ({ children, ...rest }) => {
    const getUserLoggedInInfo = localStorage.getItem('loggedInUser');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <Route
      {...rest}
      render={({ location }) =>
      getUserLoggedInInfo != null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute
