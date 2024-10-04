
import { CLEAR_ERROR,FORGOT_PASSWORD_Fail,FORGOT_PASSWORD_REQUEST,FORGOT_PASSWORD_SUCCESS,LOAD_USER_Fail,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOGIN_Fail,LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT_FAIL,LOGOUT_SUCCESS,NEW_PASSWORD_Fail,NEW_PASSWORD_REQUEST,NEW_PASSWORD_SUCCESS,REGISTER_USER_Fail,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,UPDATE_PASSWORD_Fail,UPDATE_PASSWORD_REQUEST,UPDATE_PASSWORD_RESET,UPDATE_PASSWORD_SUCCESS,UPDATE_PROFILE_Fail,UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_RESET,UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"

const initialState ={
    user:null,
    loading:false,
    isAuthenticated:false,
    data:{}
}
const initialUserState ={
    loading:false,
    isUpdated:false,
    error:null,
}
const initialforgotPasswordState ={
    loading:false,
    error:null,
    success:false,
    message:null,
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
         case LOGIN_REQUEST:
            case REGISTER_USER_REQUEST:
                case LOAD_USER_REQUEST:
                    return{
                        ...state,
                        loading:true,
                        isAuthenticated:false
                    }
            
            case LOGIN_SUCCESS:
                case REGISTER_USER_SUCCESS:
                    case LOAD_USER_SUCCESS:
                        return {
                        ...state,
                        loading:false,
                        isAuthenticated:true,
                        user:action.payload
                    }
                    
            case LOGOUT_SUCCESS:
                        return {
                            ...state,
                            loading:false,
                            isAuthenticated:false,
                            user:null,
                        }
            case LOGIN_Fail:
                case REGISTER_USER_Fail:
                    case LOAD_USER_Fail:
                        return{
                            ...state,
                            loading:false,
                            user:null,
                            error:action.payload
                            
                        }
                        
            case LOGOUT_FAIL:{
                return{
                    ...state,
                    error:action.payload
                }
            }
                        
            case CLEAR_ERROR:
                return{
                    ...state,
                    error:null
                }
            
            default:
                return state;
             
    }
}


export const userReducer=(state=initialUserState,action)=>{
    switch(action.type){
         case UPDATE_PROFILE_REQUEST:
            case UPDATE_PASSWORD_REQUEST:
                    return{
                        ...state,
                        loading:true,
                    }
            
            case UPDATE_PROFILE_SUCCESS:
                case UPDATE_PASSWORD_SUCCESS:
                        return {
                        ...state,
                        loading:false,
                        isUpdated:action.payload
                    }
                    
            case UPDATE_PROFILE_RESET:
                case UPDATE_PASSWORD_RESET:
                        return {
                            ...state,
                            isUpdated:false,
                        }
            case UPDATE_PROFILE_Fail:
                case UPDATE_PASSWORD_Fail:
                        return{
                            ...state,
                            error:action.payload
                            
                        }
                        
            case CLEAR_ERROR:
                return{
                    ...state,
                    error:null
                }
            
            default:
                return state;
             
    }
}


export const forgotPasswordReducer=(state=initialforgotPasswordState,action)=>{
    switch(action.type){
         case FORGOT_PASSWORD_REQUEST:
            case NEW_PASSWORD_REQUEST:
                    return{
                        ...state,
                        loading:true,
                        error:null
                    }
            
            
                case NEW_PASSWORD_SUCCESS:
                        return {
                        ...state,

                        success:action.payload
                    }
                    
            case FORGOT_PASSWORD_SUCCESS:
                        return {
                            ...state,
                            loading:false,
                            message:action.payload
                        }
            case FORGOT_PASSWORD_Fail:
                case NEW_PASSWORD_Fail:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                            
                        }
                        
            case CLEAR_ERROR:
                return{
                    ...state,
                    error:null
                }
            
            default:
                return state;
             
    }
}












const calculatePureVegCount=(restaurants,showVegOnly)=>{
    if(!showVegOnly){
        return restaurants.length
    }else{
        return restaurants.filter((restaurant)=>restaurant?.isVeg).length
    }
}