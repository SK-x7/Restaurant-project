import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../actions/restaurantAction";

function CountRestaurant() {
    const dispatch=useDispatch();
    useEffect(() => {
    dispatch(getRestaurants)
      
    }, [dispatch])
    const  {loading,error,count,showVegOnly,pureVegRestaurantsCount}=useSelector((state)=>state.restaurants)
    
    return (
        <div>
            
            {
                loading?<p>Loading Restaurant Count....</p>:error?<p>Error :{error}</p>:
                
            
            <p className="NumOfRestro">
                {showVegOnly?pureVegRestaurantsCount:count} <span className="Restro">{showVegOnly?pureVegRestaurantsCount===1?"Restaurant":"Restaurants":count===1?"Restaurant":"Restaurants"}</span>
            </p>
            }
            <hr/>
        </div>
    )
}

export default CountRestaurant
