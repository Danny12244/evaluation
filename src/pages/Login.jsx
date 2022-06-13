import React, { useState } from "react";
import { LoginApi } from "../store/auth/auth.actions";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const Login = () => {

  const [login,setLogin] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let {name,value}=e.target;

    setLogin({
      ...login,
      [name]:value
    })
  }
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state=>state.auth.data)

  const handleSubmit = (e) =>{
e.preventDefault();

    dispatch(LoginApi(login))
  }

  const navigate = useNavigate()
  useEffect(()=>{

    if(isAuthenticated){
      navigate("/")
    }
  },[isAuthenticated])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" type='email' onChange={handleChange} name='email' value={login.email} /><br/>
        <input data-cy="login-password" type='password' onChange={handleChange} name='password' value={login.password} />
        <br/>
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
