import { LOGIN_REQUEST , LOGIN_SUCCESS , LOGIN_FAILURE } from './loginTypes'

const initialState = {
    loggingIn : false,
    loggedIn : false,
    loggedOut : false,
    //_id : "608bb2e1e17fd12de4f7953d",
    //username: "abc",
    //password : "" , 
    email : ""

   // is_active : false
}

const logInReducer = (state=initialState , action ) => {
    switch(action.type){
        case LOGIN_REQUEST : return {
            ...state,
            loggingIn : true,
            loggedIn : false,
            loggedOut:false
        }
        case LOGIN_SUCCESS : return {
            ...state,
            loggedOut:false,
            loggingIn : false,
            loggedIn : true,
           // _id : action.payload.data._id,
            //username : action.payload.data.username,
           // password : action.payload.data.password,
            email : action.payload
           // is_active : false
        }
        case LOGIN_FAILURE : return {
            ...state,
            loggingIn : false,
            loggedIn : false,
            loggedOut : true
        }
        default: return state
    }
}
export default logInReducer