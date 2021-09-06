import { PRODUCT_REQUEST } from "./productTypes";
import { PRODUCT_SUCCESS } from "./productTypes";
import { PRODUCT_FAILURE } from "./productTypes";


export const productRequest = (productInfo) => {
    return{
         type: PRODUCT_REQUEST,
         payload: productInfo
    }    
 }
 
 export const productFailure = (errorMsg) => {
      return{
          type: PRODUCT_FAILURE,
          payload: errorMsg
      }    
   }
 
 export const productSuccess = (response) => {
     return{
          type: PRODUCT_SUCCESS,
          payload : response
          
     }    
  }

export const getProduct = (data) => {
    return (dispatch) => {
        dispatch(productRequest());

        console.log(data);
        dispatch(productSuccess(data.product));
           
        // dispatch(productFailure("error getting product"));
            
    }
}


 