import { POPULAR_CATEGORIES_REQUEST, POPULAR_CATEGORIES_SUCCESS , POPULAR_CATEGORIES_FAILURE } from "./popularCategoriesTypes";

const initialState = {
    gettingCategories : false ,
    categoriesRecieved : false ,
    popularCategories : ""
}

const popularCategoriesReducer = (state = initialState, action ) => {
    switch(action.type){
        case POPULAR_CATEGORIES_REQUEST : return {
            ...state,
            gettingCategories : true,
            categoriesRecieved : false
        }
        case POPULAR_CATEGORIES_SUCCESS : return {
            ...state,
            gettingCategories : false,
            categoriesRecieved : true,
            popularCategories : action.payload.data
        }
        case POPULAR_CATEGORIES_FAILURE : return {
            ...state,
            gettingCategories : false,
            categoriesRecieved : false,
            popularCategories : ""
        }
        default : return state
    }
}

export default popularCategoriesReducer;
