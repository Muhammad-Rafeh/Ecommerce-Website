import { PRODUCT_REQUEST, PRODUCT_SUCCESS , PRODUCT_FAILURE } from "./productTypes";

const initialState = {
    gettingproduct : false ,
    productRecieved : false ,
    product : ""
}

const productReducer = (state = initialState, action ) => {
    switch(action.type){
        case PRODUCT_REQUEST : return {
            ...state,
            gettingproduct : true,
            productRecieved : false
        }
        case PRODUCT_SUCCESS : return {
            ...state,
            gettingproduct : false,
            productRecieved : true,
            product : action.payload
        }
        case PRODUCT_FAILURE : return {
            ...state,
            gettingproduct : false,
            productRecieved : false
        }
        default : return state
    }
}

export default productReducer;
