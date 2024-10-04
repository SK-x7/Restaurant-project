import React, { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, login } from "../../actions/userAction";
import Loader from "../layouts/Loader";

const Login = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const alert=useAlert()
  const dispatch=useDispatch()
  const navigate=useNavigate();
  
  const {isAuthenticated,loading,error}=useSelector((state)=>state.auth)
  
  useEffect(() => {
    if(isAuthenticated){
      navigate("/")
    }
  
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    
  }, [isAuthenticated,navigate,dispatch,alert,error])
  
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(email,password))
  }
  

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value)
  }
  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value)
    
  }
  
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={handleSubmit}>
                <h1 className="mb-3">Login</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    
                  ></input>
                </div>
                <div className="form-group ">
                  <label htmlFor="password_field">
                    Password <span>( not less than 8 character)</span>
                  </label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                  ></input>
                </div>
                <Link className="float-right mb-4" to="/users/forgotPassword">Forgot Password</Link>
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py3"
                >
                  LOGIN
                </button>
                <Link to="/users/signup" className="float-right mt-3">NEW USER?</Link>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
