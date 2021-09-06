import { SEARCH_REQUEST, SEARCH_SUCCESS , SEARCH_FAILURE } from "./searchTypes";

const initialState = {
    searching : false ,
    searched : false ,
    searchResults : ""
}

const searchReducer = (state = initialState, action ) => {
    switch(action.type){
        case SEARCH_REQUEST : return {
            ...state,
            searching : true,
            searched : false
        }
        case SEARCH_SUCCESS : return {
            ...state,
            searching : false,
            searched : true,
            searchResults : action.payload.data
        }
        case SEARCH_FAILURE : return {
            ...state,
            searching : false,
            searched : false
        }
        default : return state
    }
}

export default searchReducer;
