// import { ConnectionStates } from 'mongoose'
import { LOGIN_REQUEST } from './loginTypes.js'
import { LOGIN_SUCCESS } from './loginTypes.js'
import { LOGIN_FAILURE } from './loginTypes.js'
import axios from 'axios'

import firebase from 'firebase'

export const loginRequest = (loginInfo) => {
   return{
        type: LOGIN_REQUEST,
        payload: loginInfo
   }    
}

export const loginFailure = (errorMsg) => {
     return{
         type: LOGIN_FAILURE,
         payload: errorMsg
     }    
  }

export const loginSuccess = (response) => {
    return{
         type: LOGIN_SUCCESS,
         payload : response
         
    }    
 }



 export const login = (data) => {
     return async (dispatch)=>{
         dispatch(loginRequest);

         let userInfo;
         let userIdToken;

         await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          userInfo=user;
          console.log(userCredential);
          dispatch(loginSuccess(user));
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          dispatch(loginFailure(errorMessage));
        });

    //     await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //       userIdToken=idToken;
    //     }).catch(function(error) {
    //       // Handle error
    //     });

    //     axios.post(`/users` , {
    //       username : data.username,
    //       email : data.email,
    //       // password : data.password
    //      // is_active: false
    //       token : userIdToken
          
    //   })
    //    .then(response => {
    //         console.log(response);
    //         dispatch(loginSuccess(response));
    //    })
    //    .catch(error => {
    //     const errorMsg = error.message;
    //     dispatch(loginFailure(errorMsg));
    // })
     }  
 }

 export const alreadyLoggedIn = (data) => {
   return (dispatch) =>{
     dispatch(loginSuccess(data));
   }
 }
 export const logOut = () => {
  return (dispatch) =>{
    dispatch(loginFailure());
  }
}