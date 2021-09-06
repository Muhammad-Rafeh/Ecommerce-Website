import { GETUSERINFO_REQUEST , GETUSERINFO_SUCCESS , GETUSERINFO_FAILURE } from './getUserInfoTypes'

const initialState = {
    gettingInfo : false,
    infoRecieved : false,
    userInfo : "",
}

const getUserInfoReducer = (state=initialState , action ) => {
    switch(action.type){
        case GETUSERINFO_REQUEST : return {
            ...state,
            gettingInfo:true,
            infoRecieved : false
        }
        case GETUSERINFO_SUCCESS : return {
            ...state,
            gettingInfo:false,
            infoRecieved : true,
            userInfo : action.payload
        }
        case GETUSERINFO_FAILURE : return {
            ...state,
            gettingInfo:false,
            infoRecieved : false,
            userInfo : ""
        }
        default: return state
    }
}
export default getUserInfoReducer