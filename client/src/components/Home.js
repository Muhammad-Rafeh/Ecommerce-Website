import React, { useState  ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { alreadyLoggedIn } from '../redux/login/loginActions';
import { logOut } from '../redux/login/loginActions';
import { getUserInfo } from '../redux/getUserInfo/getUserInfoActions';
import firebase from 'firebase'
import { Link, Redirect } from 'react-router-dom';
import CategoryBar from './CategoryBar/CategoryBar'
import Nav from './Navigation/NavParent'
import Slider from './Slider'
import RecentlyViewed from './RecentlyViewed/RecentlyViewed';
import PopularCategories from './PopularCategories/PopularCategories';
import Search from './Search/Search'
import ProductList from './ProductPage/ProductList';
import Product from './Product/Product';
import Logout from './Logout'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Home() {

    const infoRecieved = useSelector(state => state.getUserInfoReducers.infoRecieved)
    const loggedOut = useSelector(state => state.loginReducers.loggedOut);
    const dispatch = useDispatch();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;
              console.log("already logged in");
              dispatch(alreadyLoggedIn(user));
              dispatch(getUserInfo());
              // ...
            } else {
              
              dispatch(logOut());

              console.log("not logged in");

            }
          });
          
          console.log("home")

    },[])

    
    return (
      
        <div>
          {infoRecieved ? 
           
            <div>
              <Nav />
              <CategoryBar />
              
                <Slider />
                <RecentlyViewed />
                <PopularCategories part={0}/>
                <PopularCategories part={7} />
                <Search />
              
              
              <div>this is home</div>
              <Link to='/signout'>Sign Out?</Link>
              <Logout />
            </div>
            
            
            : ""
          }
          {
            loggedOut ? <Redirect exact to="/login" /> : ""
          }
          {console.log("thsi is the home render")}

        </div>
      
      
        
    )
}

export default Home
