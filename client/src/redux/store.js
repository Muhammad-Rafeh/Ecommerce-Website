import { createStore, combineReducers , applyMiddleware } from 'redux' ;
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducers from './login/loginReducers'
import signupReducers from './signup/signupReducers'
import getUserInfoReducers from './getUserInfo/getUserInfoReducers'
import popularCategoriesReducers from './popularCategories/popularCategoriesReducers'
import searchReducers from './search/searchReducers';
import productListReducers from './productList/productListReducers';
import productReducers from './product/productReducers';
import boughtProductReducers from './boughtProduct/boughtProductReducers';

const rootReducer = combineReducers({loginReducers , signupReducers, getUserInfoReducers, popularCategoriesReducers , searchReducers , productListReducers , productReducers , boughtProductReducers})

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));

export default store;