import axios from "axios"
import { ADD_TO_CART, FETCH_CART, REMOVE_ITEM_CART, UPDATE_CART_ITEM } from "../constants/cartConstants"
export const fetchCartItems=(alert)=>{
    return async (dispatch)=>{
        try {
            
            let link=`/api/v1/eats/cart/get-cart`
            const res=await axios.get(link)
            dispatch({type:FETCH_CART,
                payload:res.data.data
            })
    } catch (err) {
            console.error("Fetch cart error: ",err)
            if(alert){
                alert.info("Cart is hungry!!")
            }
        }
    }   
}

export const addItemToCart=(foodItemId,restaurant,quantity,alert)=>{
    return async (dispatch,getState)=>{
        try {
            const {user}=getState().auth
            let link=`/api/v1/eats/cart/add-to-cart`
            const res=await axios.post(link,{
                userId:user?._id,
                foodItemId,
                restaurantId:restaurant,
                quantity
            })
            alert.success("Item added to cart",res.data?.cart)
            
            dispatch({
                type:ADD_TO_CART,
                payload:res?.data?.cart
            })
            
            
    } catch (err) {
            console.error("Fetch cart error: ",err)
            if(alert){
                alert.info("Cart is hungry!!")
            }
        }
    }   
}



export const updateCartQuantity=(foodItemId,quantity,alert)=>{
    return async (dispatch,getState)=>{
        try {
            const {user}=getState().auth
            if(typeof foodItemId==="object"){
                foodItemId=foodItemId?._id
            }
            
            
            let link=`/api/v1/eats/cart/update-cart-item`
            const res=await axios.post(link,{
                userId:user?._id,
                foodItemId:foodItemId,
                quantity
            })
    
            
            dispatch({
                type:UPDATE_CART_ITEM,
                payload:res?.data?.cart
            })
    } catch (err) {
            alert.error(err?.response?err?.response?.data?.message:err?.message)
        }
    }   
}



export const removeItemFromCart=(foodItemId)=>{
    return async (dispatch,getState)=>{
        try {
            const {user}=getState().auth
            if(typeof foodItemId==="object"){
                foodItemId=foodItemId?._id
            }
            
            
            let link=`/api/v1/eats/cart/delete-cart-item`
            const res=await axios.delete(link,{
                data:{
                    userId:user?._id,
                    foodItemId
                }
            })
    
            
            dispatch({
                type:REMOVE_ITEM_CART,
                payload:res?.data
            })
    } catch (err) {
            alert.error(err?.response?err?.response?.data?.message:err?.message)
        }
    }   
}



