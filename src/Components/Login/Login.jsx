import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { IsLoggedInContext } from '../Context/IsLoggedInContext';
import style from './Login.module.css';


export default function Login() {
let navigate = useNavigate();

  let {user} = useContext(UserContext);
  let [loginUser,setLoginUser] = useState({});
  let {setIsLoggedIn} = useContext(IsLoggedInContext);

  function submitFormData(e){
  
    e.preventDefault();
    if(loginUser.email==user.email && loginUser.password==user.password){
      
      alert('Login Successful');
      localStorage.setItem('isLoggedIn',true);
      setIsLoggedIn(localStorage.getItem('isLoggedIn'));
      navigate('/home');
    }else{
      alert('Login Failed');
    }
    }
  

  function getFormValue(e){
    let currentUser = {...loginUser};
    currentUser[e.target.name] = e.target.value;
    setLoginUser(currentUser);
  }

  return (
    <div>
      <h1 className="my-5">Login</h1>
      <form onSubmit={submitFormData}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input onChange={getFormValue} type="text" name="email" className="form-control" id="email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">password</label>
          <input onChange={getFormValue} type="password" name="password" className="form-control" id="password"/>
        </div>
        <div className="d-flex align-items-center">
          <button  className='btn btn-info me-3'>Login</button>
          <p className ={`me-3 ${style.LoginButtomPara}`} >Dont have an account ?</p>
          <Link className='text-info' to="/Register">Create account here</Link>
        </div>
      </form>
    </div>
  )
}
