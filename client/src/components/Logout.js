import React from 'react'
import firebase from 'firebase';
import { getAuth, signOut } from "firebase/auth";
import { Redirect } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { logOut } from '../redux/login/loginActions';
import { clearUserInfo } from '../redux/getUserInfo/getUserInfoActions';
import { clearPopularCategories } from '../redux/popularCategories/popularCategoriesActions'



function Logout() {

    const loggedOut = useSelector(state => state.loginReducers.loggedOut);

    const dispatch = useDispatch();

    const handleClick = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            dispatch(logOut());
            dispatch(clearUserInfo());
            dispatch(clearPopularCategories())
          }).catch((error) => {
            // An error happened.
            console.log("error signing out");
          });
          

    }

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
            {
                loggedOut ? <Redirect exact to='/login' /> : ""
            }
        </div>
    )
}

export default Logout
