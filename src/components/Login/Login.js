import React from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import Fade from 'react-reveal/Fade';

import MyNavbar from '../MyNavbar/MyNavbar';
import { UserContext } from '../../App';
import img from '../../img/10.jpg';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from '../Footer/Footer';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email
                }
                setLoggedInUser(signedInUser);
                localStorage.setItem('username', signedInUser.name);
                localStorage.setItem('loggedInUser', signedInUser.email);
                alert('logged In successfully')
                history.replace(from)
            }).catch((error) => {

                var errorMessage = error.message;
                alert(errorMessage)

            });
    }

    const handleSignUp = () => {
        document.getElementById('signUp').style.cssText = 'display: block'
        document.getElementById('signIn').style.cssText = 'display: none'
    }

    const handleSignIn = () => {
        document.getElementById('signIn').style.cssText = 'display: block'
        document.getElementById('signUp').style.cssText = 'display: none'
    }

    const handleLogOut = () => {
        firebase.auth().signOut();
        localStorage.clear('loggedInUser');
        localStorage.clear('username');
        alert('Logged Out successfully');
        window.location.reload();
    }
    return (
        <div className="overflow-hidden">
            <MyNavbar></MyNavbar>
            {/* <h1>Welcome{loggedInUser.email}</h1> */}
            <div style={{height: '80vh'}} className="row bg-dark text-white">
                <Fade left>
                    <div className="col-md-6 text-center">
                        <img src={img} style={{ width: '300px', height: '300px', borderRadius: '50%', marginTop: '10%' }} alt="" />
                    </div>
                </Fade>

                <Fade right>

                    {
                        localStorage.getItem('loggedInUser') === null ?
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="my-5">
                                    <div id="signIn">
                                        <SignIn></SignIn> <br />
                                        <h6>New User? <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button></h6>
                                    </div>
                                    <br />
                                    <div id="signUp" style={{ display: 'none' }}>
                                        <SignUp></SignUp> <br />
                                        <h6>Already have an account?  <button className="btn btn-primary" onClick={handleSignIn}>Sign In</button></h6>
                                    </div>

                                    <span>or</span>

                                    <button onClick={handleLogin} className="btn btn-success m-4">Login Using Google</button>

                                </div>
                            </div> :
                            <div className="col-md-6 d-flex justify-content-center">
                                <div style={{padding: '15% 0'}} className='text-center'>
                                <p>You are already logged in!</p>
                                <button onClick={handleLogOut} className='btn btn-danger'>Logout</button>
                                </div>
                            </div>
                    }
                </Fade>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login
