import axios from "axios"
import { CLEAR_ERROR, FORGOT_PASSWORD_Fail, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOAD_USER_Fail, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_Fail, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, NEW_PASSWORD_Fail, NEW_PASSWORD_REQUEST, NEW_PASSWORD_SUCCESS, REGISTER_USER_Fail, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, UPDATE_PASSWORD_REQUEST, UPDATE_PROFILE_Fail, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"
import { CLEAR_CART } from "../constants/cartConstants"
export const login=(email,password)=>{
    return async (dispatch)=>{
        try {
            
            dispatch({type:LOGIN_REQUEST})
            const config ={
                headers:{
                    "Content-Type": "application/json"
                }
            }
            
            let link=`/api/v1/users/Login`
            const {data}=await axios.post(link,{
                email,password
        },config)
            // console.log(data);
            // const {restaurants,count}=data;
            // console.log(restaurants)
            dispatch({type:LOGIN_SUCCESS,
                payload:data?.data?.user}) 
    } catch (err) {
            dispatch({
                type:LOGIN_Fail,
                payload:"Login failed"
            })
        }
    }   
}



export const register=(userData)=>{
    return async (dispatch)=>{
        try {
            
            dispatch({type:REGISTER_USER_REQUEST})
            const config ={
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            }
            
            let link=`/api/v1/users/signup`
            const {data}=await axios.post(link,userData,config)
            // console.log(data);
            // const {restaurants,count}=data;
            // console.log(restaurants)
            dispatch({type:REGISTER_USER_SUCCESS,
                payload:data?.data?.user}) 
                
                return data?.data?.user
    } catch (err) {
        console.log(err)
        
            dispatch({
                type:REGISTER_USER_Fail,
                payload:err.response.data.message
            })
        }
    }   
}




export const loadUser=(userData)=>{
    return async (dispatch)=>{
        try {
            
            dispatch({type:LOAD_USER_REQUEST})
            
            let link=`/api/v1/users/me`
            const {data}=await axios.get(link)
            // console.log(data);
            // const {restaurants,count}=data;
            // console.log(restaurants)
            dispatch({type:LOAD_USER_SUCCESS,
                payload:data?.user}) 
    } catch (err) {
            dispatch({
                type:LOAD_USER_Fail,
                payload:err.response.data.message
            })
        }
    }   
}

export const updateProfile=(userData)=>{
    return async (dispatch)=>{
        try {
            
            dispatch({type:UPDATE_PROFILE_REQUEST})
            const config ={
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            }
            
            let link=`/api/v1/users/me/update`
            const {data}=await axios.put(link,userData,config)
            // console.log(data);
            // const {restaurants,count}=data;
            // console.log(restaurants)
            dispatch({type:UPDATE_PROFILE_SUCCESS,
                payload:data?.success}) 
    } catch (err) {
            dispatch({
                type:UPDATE_PROFILE_Fail,
                payload:err.response.data.message
            })
        }
    }   
}





export const logout=(userData)=>{
    return async (dispatch)=>{
        try {
            
            
            let link=`/api/v1/users/logout`
            await axios.get(link)
            dispatch({type:LOGOUT_SUCCESS})
            dispatch({type:CLEAR_CART})
            
            
            // console.log(data);
            // const {restaurants,count}=data;
            // console.log(restaurants)
    } catch (err) {
            dispatch({
                type:LOGOUT_FAIL,
                payload:err.response.data.message
            })
        }
    }   
}


export const clearErrors=(userData)=>{
    return async (dispatch)=>{
        dispatch({type:CLEAR_ERROR})
    }
}   



export const updatePassword=(passwords)=>{
    return async (dispatch)=>{
        
        try {
            dispatch({type:UPDATE_PASSWORD_REQUEST})
        const config ={
            headers:{
                "Content-Type": "application/json"
            }
        }
        let link=`/api/v1/users/password/update`
        const {data}=await axios.put(link,passwords,config)
        // console.log(data);
        // const {restaurants,count}=data;
        // console.log(restaurants)
        dispatch({type:UPDATE_PROFILE_SUCCESS,
            payload:data?.success}) 
            
        } catch (error) {
            dispatch({type:UPDATE_PROFILE_Fail,
            payload:error.response.data.message})
        }
    }
}   


export const forgotPassword=(email)=>{
    return async (dispatch)=>{
        
        try {
            dispatch({type:FORGOT_PASSWORD_REQUEST})
        const config ={
            headers:{
                "Content-Type": "application/json"
            }
        }
        let link=`/api/v1/users/forgetPassword`
        const {data}=await axios.post(link,email,config)
        // console.log(data);
        // const {restaurants,count}=data;
        // console.log(restaurants)
        dispatch({type:FORGOT_PASSWORD_SUCCESS,
            payload:data?.success}) 
            
        } catch (error) {
            dispatch({type:FORGOT_PASSWORD_Fail,
            payload:error.response.data.message})
        }
    }
}  


export const resetPassword=(token,passwords)=>{
    return async (dispatch)=>{
        
        try {
            dispatch({type:NEW_PASSWORD_REQUEST})
        const config ={
            headers:{
                "Content-Type": "application/json"
            }
        }
        let link=`/api/v1/users/resetPassword/${token}`
        const {data}=await axios.patch(link,passwords,config)
        // console.log(data);
        // const {restaurants,count}=data;
        // console.log(restaurants)
        dispatch({type:NEW_PASSWORD_SUCCESS,
            payload:data?.success}) 
            
        } catch (error) {
            dispatch({type:NEW_PASSWORD_Fail,
            payload:error.response.data.message})
        }
    }
}   