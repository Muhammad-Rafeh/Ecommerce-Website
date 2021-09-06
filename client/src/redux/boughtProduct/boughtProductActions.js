import { BOUGHT_PRODUCT_REQUEST } from "./boughtProductTypes";
import { BOUGHT_PRODUCT_SUCCESS } from "./boughtProductTypes";
import { BOUGHT_PRODUCT_FAILURE } from "./boughtProductTypes";


export const boughtProductRequest = (boughtProductInfo) => {
    return{
         type: BOUGHT_PRODUCT_REQUEST,
         payload: boughtProductInfo
    }    
 }
 
 export const boughtProductFailure = (errorMsg) => {
      return{
          type: BOUGHT_PRODUCT_FAILURE,
          payload: errorMsg
      }    
   }
 
 export const boughtProductSuccess = (response) => {
     return{
          type: BOUGHT_PRODUCT_SUCCESS,
          payload : response
          
     }    
  }

export const getBoughtProduct = (data) => {
    return (dispatch) => {
        dispatch(boughtProductRequest());

        console.log(data);
        dispatch(boughtProductSuccess(data));
           
        // dispatch(productFailure("error getting product"));
            
    }
}


 