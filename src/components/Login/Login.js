import React, { useContext } from 'react';
import logo from '../../images/Group 1329.png';
import './Login.css';
import googleIcon from '../../images/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div className="login-bg">
            <div>
            <div className="reg-img">
                <Link to="/"> <img src={logo} alt=""/></Link>
            </div>
            <div className="login-text">
                <div style={{height:' 148px',paddingTop: '154px'}}>
                    <h2 style={{marginBottom:'32px'}}>Login with</h2>
                    <div className="login-google">
                        <img src={googleIcon} alt="" style={{height:'31px',width:'31px'}}/>
                        <p onClick={handleGoogleSignIn}>Continue with Google</p>
                    </div>
                    <p>Do you have an account? <a href="#">Create an account</a></p>
                </div> 
            </div>
            </div>
        </div>
    );
};

export default Login;