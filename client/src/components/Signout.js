import React from 'react'
import firebase from 'firebase'
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/signup/signupActions'
import { logOut } from '../redux/login/loginActions'

function Signout() {
    
    const dispatch = useDispatch();


    const handleClick = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          dispatch(logOut);
          dispatch(signOut);
          
    }

    return (
        <div>
            <input type="button" value='Sign out' onClick={handleClick} />
        </div>
    )
}

export default Signout
