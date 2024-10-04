import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants, sortByRatings, sortByReviews, toggleVegOnly } from "../../actions/restaurantAction";
import CountRestaurant from "./CountRestaurant"
import Loader from "./Loader";
import Message from "./Message";
import Restaurant from "./Restaurant"

function Home() {
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getRestaurants())
    }, [dispatch])
    const {loading:restaurantsLoading,error:errorFetchingRestaurants,restaurants,showVegOnly}=useSelector((state)=>state.restaurants);
    
    console.log(restaurants)
    
    
    function handleSortByReviews(){
        dispatch(sortByReviews())
    }
    function handleSortByRatings(){
        dispatch(sortByRatings())
    }
    function handleToggleVegOnly(){
        dispatch(toggleVegOnly())
    }
    
    
    
    return (
        <>
            <CountRestaurant/>
            {
        restaurantsLoading?
            <Loader/>:errorFetchingRestaurants?<Message variant="error">{errorFetchingRestaurants}</Message>:
            <> 
            <section>
                <div className="sort" >
                    <button className="sort_veg p-3" onClick={handleToggleVegOnly}>{showVegOnly?"Show All":"Pure Veg"}</button>
                    <button className="sort_rev p-3" onClick={handleSortByReviews}>Sort By Reviews</button>
                    <button className="sort_rate p-3" onClick={handleSortByRatings}>Sort By Rating</button>
                </div>
                <div className="row mt-4">
                    {
                        restaurants?
                     restaurants?.map((restaurant)=>(
                        ((!showVegOnly||(showVegOnly&&restaurant.isVeg))?
                        ( <Restaurant key={restaurant?._id} restaurant={restaurant}/>)
                        
                        :null
                        ))   
                        ):<Message variant="info">No Restaurant Found</Message>
                         
                         
                         
                    }
                    {/* {!restaurants&&<div>jfihi</div>} */}
                </div>
            </section>
            </>
            }
        </>
    )
}

export default Home
