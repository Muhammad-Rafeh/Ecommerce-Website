import { SIGNUP_REQUEST } from './signupTypes.js'
import { SIGNUP_SUCCESS } from './signupTypes.js'
import { SIGNUP_FAILURE } from './signupTypes.js'
import axios from 'axios'


import firebase from 'firebase'
import { auth } from '../../firebase'


export const signUpRequest = (signUpInfo) => {
   return{
        type: SIGNUP_REQUEST,
        payload: signUpInfo
   }    
}

export const signUpFailure = (errorMsg) => {
     return{
         type: SIGNUP_FAILURE,
         payload: errorMsg
     }    
  }

export const signUpSuccess = (response) => {
    return{
         type: SIGNUP_SUCCESS,
         payload : response
         
    }    
 }



 export const signUp = (data) => {
     return async (dispatch)=>{
         dispatch(signUpRequest);
         console.log("sending signup req")
        
         let userInfo;
         let userIdToken;

        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            userInfo = user;
            console.log(userInfo);
            dispatch(signUpSuccess(user));
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            dispatch(signUpFailure(errorMessage));
            // ..
        });

        await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            userIdToken=idToken;
          }).catch(function(error) {
            // Handle error
          });

        axios.post(`/users/signup` , {
            username : "---",
            email : userInfo.email,
            // password : data.password
           // is_active: false
            token : userIdToken
            
        }
       )
         .then(response => {
              console.log(response);
              dispatch(signUpSuccess(response));
         })
         .catch(error => {
          const errorMsg = error.message;
          dispatch(signUpFailure(errorMsg));
      })
         
     }
 }

 export const signOut = () => {
    return (dispatch) =>{
      dispatch(signUpFailure());
    }
  }