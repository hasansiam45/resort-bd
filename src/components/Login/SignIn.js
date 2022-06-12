import React, { useContext, useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
   if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
         const handleSubmit = (event) => {
            event.preventDefault();
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                   const { displayName, email } = userCredential.user;
                    const signedInUser = {
                        name: displayName,
                        email
                    }
                setLoggedInUser(signedInUser);
                localStorage.setItem('username',signedInUser.name);
                localStorage.setItem('loggedInUser',signedInUser.email);
                alert('signed in successfully')
                history.replace(from)
                // ...
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
            };
    return (
              <div>
            <form action="" onSubmit={handleSubmit}>
                <input placeholder="Your Email" type="email" onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
                <input placeholder="Your Password" type="password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
                <button className="btn btn-primary"type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
