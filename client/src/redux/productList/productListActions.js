import { PRODUCT_LIST_REQUEST } from "./productListTypes";
import { PRODUCT_LIST_SUCCESS } from "./productListTypes";
import { PRODUCT_LIST_FAILURE } from "./productListTypes";
import axios from 'axios';

export const productListRequest = (productListInfo) => {
    return{
         type: PRODUCT_LIST_REQUEST,
         payload: productListInfo
    }    
 }
 
 export const productListFailure = (errorMsg) => {
      return{
          type: PRODUCT_LIST_FAILURE,
          payload: errorMsg
      }    
   }
 
 export const productListSuccess = (response) => {
     return{
          type: PRODUCT_LIST_SUCCESS,
          payload : response
          
     }    
  }

export const getproductList = () => {
    return (dispatch) => {
        dispatch(productListRequest());

        axios.get('products')
            .then(response => {
                dispatch(productListSuccess(response));
            })
            .catch(error => {
                const errorMsg = "Error sending axios request for product list";
                dispatch(productListFailure(errorMsg));
            })
    }
}


 