import { SEARCH_REQUEST } from "./searchTypes";
import { SEARCH_SUCCESS } from "./searchTypes";
import { SEARCH_FAILURE } from "./searchTypes";
import axios from 'axios';

export const searchRequest = (searchInfo) => {
    return{
         type: SEARCH_REQUEST,
         payload: searchInfo
    }    
 }
 
 export const searchFailure = (errorMsg) => {
      return{
          type: SEARCH_FAILURE,
          payload: errorMsg
      }    
   }
 
 export const searchSuccess = (response) => {
     return{
          type: SEARCH_SUCCESS,
          payload : response
          
     }    
  }

export const getSearch = (data) => {
    return (dispatch) => {
        dispatch(searchRequest());

        axios.post('products', {
            searchedItem  : data.searchedItem
        })
            .then(response => {
                dispatch(searchSuccess(response));
            })
            .catch(error => {
                const errorMsg = "Error sending axios request for searching item";
                dispatch(searchFailure(errorMsg));
            })
    }
}


 