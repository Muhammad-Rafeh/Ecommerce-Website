import { BOUGHT_PRODUCT_REQUEST, BOUGHT_PRODUCT_SUCCESS , BOUGHT_PRODUCT_FAILURE } from "./boughtProductTypes";

const initialState = {
    toBuy : false,
    id : "",
    quantity : "",
    color : "",
    size : ""
}

const productReducer = (state = initialState, action ) => {
    switch(action.type){
        case BOUGHT_PRODUCT_REQUEST : return {
            ...state
        }
        case BOUGHT_PRODUCT_SUCCESS : return {
            ...state,
            toBuy : true,
            id : action.payload.id,
            quantity : action.payload.quantity,
            color : action.payload.color,
            size : action.payload.size
        }
        case BOUGHT_PRODUCT_FAILURE : return {
            ...state,
           
        }
        default : return state
    }
}

export default productReducer;
