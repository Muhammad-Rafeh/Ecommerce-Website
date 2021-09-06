import { SIGNUP_REQUEST , SIGNUP_SUCCESS , SIGNUP_FAILURE } from './signupTypes'

const initialState = {
    signingIn : false,
    signedIn : false,
    email : "",
}

const signUpReducer = (state=initialState , action ) => {
    switch(action.type){
        case SIGNUP_REQUEST : return {
            ...state,
            signingIn:true,
            signedIn : false
        }
        case SIGNUP_SUCCESS : return {
            ...state,
            signingIn:false,
            signedIn : true,
            email : action.payload.email
        }
        case SIGNUP_FAILURE : return {
            ...state,
            signingIn:false,
            signedIn : false
        }
        default: return state
    }
}
export default signUpReducer