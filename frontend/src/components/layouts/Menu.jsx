import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getMenus } from "../../actions/menuActions";
import FoodItem from "./FoodItem"
import Loader from "./Loader";
import Message from "./Message";

function Menu() {
    
    const dispatch =useDispatch();
    const {id}=useParams();
    console.log(id);
    useEffect(() => {
      dispatch((getMenus(id)))
    }, [dispatch,id])
    
    const {menus,loading,error}=useSelector((state)=>state?.menus)
    
    return (
        <div>
            {
                loading?<Loader/>:
                error?<Message variant="danger">{error}</Message>:
                menus&&menus?.length>0?
                (
                    menus?.map((menu)=>(
                        <div key={menu?._id}>
                            <h2>{menu?.category}</h2>
                            <hr/>
                            {menu.items&&menu.items.length>0
                            ?(
                                <div className="row">
                                    {menu?.items.map((foodItem)=>(
                                  <FoodItem key={foodItem?._id} foodItem={foodItem} restaurant={id}></FoodItem>      
                                    ))}
                                </div>
                            ):(
                                <Message variant="info">No food item found</Message>
                            )
                            
                            }
                        </div>
                    ))
                )
                :<Message variant="info">No Menus Found</Message>
            }
            
            
            
            
            
            
            
            
            
            
        
        </div>
    )
}

export default Menu
