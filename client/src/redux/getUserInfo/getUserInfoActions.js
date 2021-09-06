import { GETUSERINFO_REQUEST } from './getUserInfoTypes.js'
import { GETUSERINFO_SUCCESS } from './getUserInfoTypes.js'
import { GETUSERINFO_FAILURE } from './getUserInfoTypes.js'
import axios from 'axios'


import firebase from 'firebase'
import { auth } from '../../firebase'


export const getUserInfoRequest = (signUpInfo) => {
   return{
        type: GETUSERINFO_REQUEST,
        payload: signUpInfo
   }    
}

export const getUserInfoFailure = (errorMsg) => {
     return{
         type: GETUSERINFO_FAILURE,
         payload: errorMsg
     }    
  }

export const getUserInfoSuccess = (response) => {
    return{
         type: GETUSERINFO_SUCCESS,
         payload : response
         
    }    
 }



 export const getUserInfo = (data) => {
     return async (dispatch)=>{
         dispatch(getUserInfoRequest);
         //console.log("sending signup req")
        
         let userInfo;
         let userIdToken;

        await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            userIdToken=idToken;
          }).catch(function(error) {
            // Handle error
          });

        axios.post(`/users` , {
            token : userIdToken
        }
       )
         .then(response => {
              console.log(response);
              dispatch(getUserInfoSuccess(response));
         })
         .catch(error => {
          const errorMsg = error.message;
          dispatch(getUserInfoFailure(errorMsg));
          console.log("error axios use info request")
      })
         
     }
 }

 export const clearUserInfo = () => {

  return (dispatch) => {
    dispatch(getUserInfoFailure());
  }

   
 }
