import { POPULAR_CATEGORIES_REQUEST } from "./popularCategoriesTypes";
import { POPULAR_CATEGORIES_SUCCESS } from "./popularCategoriesTypes";
import { POPULAR_CATEGORIES_FAILURE } from "./popularCategoriesTypes";
import axios from 'axios';

export const popularCategoriesRequest = (popularCategoriesInfo) => {
    return{
         type: POPULAR_CATEGORIES_REQUEST,
         payload: popularCategoriesInfo
    }    
 }
 
 export const popularCategoriesFailure = (errorMsg) => {
      return{
          type: POPULAR_CATEGORIES_FAILURE,
          payload: errorMsg
      }    
   }
 
 export const popularCategoriesSuccess = (response) => {
     return{
          type: POPULAR_CATEGORIES_SUCCESS,
          payload : response
          
     }    
  }

export const getPopularCategories = () => {
    return (dispatch) => {
        //dispatch(popularCategoriesRequest());

        axios.get('categories/popular')
            .then(response => {
                dispatch(popularCategoriesSuccess(response));
            })
            .catch(error => {
                const errorMsg = "Error sending axios request for popular categories";
                dispatch(popularCategoriesFailure(errorMsg));
            })
    }
}


export const clearPopularCategories = () => {
    return (dispatch) => {
        dispatch(popularCategoriesFailure());
    }
} 