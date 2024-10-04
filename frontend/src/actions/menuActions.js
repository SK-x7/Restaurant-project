import axios from "axios"
import { GET_MENU_Fail, GET_MENU_REQUEST, GET_MENU_SUCCESS } from "../constants/menuConstants"
export const getMenus=(id)=>{
    return async (dispatch)=>{
        try {
            
            dispatch({type:GET_MENU_REQUEST})
            let link=`/api/v1/eats/stores/${id}/menus`
            const res=await axios.get(link)
            console.log(res,"jhhb");
            const data=res?.data?.data[0]?.menu
            console.log(data);
            dispatch({type:GET_MENU_SUCCESS,
                payload:data}) 
    } catch (err) {
            dispatch({
                type:GET_MENU_Fail,
                payload:err.message
            })
        }
    }   
}

