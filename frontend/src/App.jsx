import React from "react";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Menu from "./components/layouts/Menu";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useEffect } from "react";
import Cart from "./components/cart/Cart";
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components//order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "./actions/cartActions";



const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}



export default function App() {
  
  const dispatch=useDispatch();
  
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  const {user}=useSelector((state)=>state?.auth)
  if(user){
    dispatch(fetchCartItems())
  }
  
  
  
  return <BrowserRouter>
  <AlertProvider template={AlertTemplate} {...options}>
    
  <div className="App">
    <Header/>
    <div className="container container-fluid">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/eats/stores/:id/menus" element={<Menu/>}></Route>
        <Route path="/users/login" element={<Login/>}></Route>
        <Route path="/users/signup" element={<Register/>}></Route>
        <Route path="/users/me" element={<Profile/>}></Route>
        <Route path="/users/me/update" element={<UpdateProfile/>}></Route>
        <Route path="/users/forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="/users/resetPassword/:token" element={<NewPassword/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/success" element={<OrderSuccess/>}></Route>
        <Route path="/eats/orders/me/myOrders" element={<ListOrders/>}></Route>
        <Route path="/eats/orders/:id" element={<OrderDetails/>}></Route>
        <Route path="*" element={<h1>This page doesnt exist</h1>}></Route>
      </Routes>
    
    {/* <Menu/> */}
    </div>
    <Footer/>
  </div>;
  </AlertProvider>
  </BrowserRouter>
}
