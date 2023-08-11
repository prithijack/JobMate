import { isAsyncThunkAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { backendUrl, fronendUrl } from "../../backendUrl";
import { logout } from "../../https";
import {setAuth} from '../../slice/authSlice'
const NavigationBar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  async function logoutuser(){
    const {data}=await logout();
  
    dispatch(setAuth({user:null}))
    navigate('/')
    
  }
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <Link to="jobs/" className="logo cursor-pointer text-[25px] text-blue-500">
          {" "}
          Job <strong>Mate</strong>
        </Link>
      </div>
      <div className="flex gap-6 menu">
      { isAuth &&
       <Link to={`${fronendUrl}/appliedJobs`}>
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
           Applied Jobs
          </li>{" "}
        </Link>}
       <Link to="/">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
            Home
          </li>
        </Link>
       <Link to="/about">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">About</li>
        </Link>
       <Link to="/contact">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
            Contact
          </li>
        </Link>
        {!isAuth && (
         <Link to={`${fronendUrl}/login`}>
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Login
            </li>
          </Link>
        )}
        {!isAuth && (
         <Link to={`${backendUrl}/register`}>
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Register
            </li>
          </Link>
        )}
        {isAuth && (
         <button onClick={logoutuser}>
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Logout
            </li>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
