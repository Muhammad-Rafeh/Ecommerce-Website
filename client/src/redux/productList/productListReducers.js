import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS , PRODUCT_LIST_FAILURE } from "./productListTypes";

const initialState = {
    gettingProductList : false ,
    productListRecieved : false ,
    productList : ""
}

const productListReducer = (state = initialState, action ) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST : return {
            ...state,
            gettingProductList : true,
            productListRecieved : false
        }
        case PRODUCT_LIST_SUCCESS : return {
            ...state,
            gettingProductList : false,
            productListRecieved : true,
            productList : action.payload.data
        }
        case PRODUCT_LIST_FAILURE : return {
            ...state,
            gettingProductList : false,
            productListRecieved : false
        }
        default : return state
    }
}

export default productListReducer;
