import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import style from './Login.module.css';


export default function Login() {
  let navigate = useNavigate();

  let {users, userId, setUser} = useContext(UserContext);
  let [loginUser,setLoginUser] = useState({});


  function submitFormData(e){
    e.preventDefault();
    for(let i =0; i<users.length; i++){
      if(users[i].email==loginUser.email && users[i].password==loginUser.password){
        localStorage.setItem('isLoggedIn',true);
        userId = users[i].id;
        let currentUser = {...users[i]};
        currentUser.isLoggedIn = localStorage.getItem('isLoggedIn');
        users.splice(i,1,currentUser);
        localStorage.setItem('users',JSON.stringify(users));
        setUser(currentUser);
        alert('Login Successful');
        navigate('/home');
      }else if( i == users.length-1 && users[i].email != loginUser.email && users[i].password != loginUser.password){
        alert('username or password is incorrect');
      }
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
