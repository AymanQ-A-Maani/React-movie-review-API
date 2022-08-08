import React, { useState, useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import Joi from 'joi';

export default function Register() {

  let navigate = useNavigate();
  let {user, users, setUser} = useContext(UserContext);
  let [errorList,setErrorList] = useState([]);
  
  function submitFormData(e){
    e.preventDefault();
    let validateResult = validateForm();
    if(validateResult.error){
      setErrorList(validateResult.error.details);
    }else{
      users.push(user);
      localStorage.setItem(`users`, JSON.stringify(users));
      alert('Registration Successful');
      navigate('/login');
    }
  }

  function getFormValue(e){
    let myUser = {...user};
    for(let i=0;i<=users.length;i++){
      myUser.id = i
    }
    myUser[e.target.name] = e.target.value; //e.target.name is the name of the input field
    setUser(myUser);
  }

  function validateForm(){
    const schema = Joi.object({
      id: Joi.number(),
      first_name: Joi.string().required().min(3).max(30),
      last_name: Joi.string().required().min(3).max(30),
      age: Joi.number().required().min(18).max(90),
      email: Joi.string().required().email({tlds: {allow: ['com', 'net']}}),
      password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
      isLoggedIn: Joi.boolean()
    });
    return schema.validate(user, {abortEarly: false});
  }

  return (
    <div>
      <h1 className="my-5">Registration Form</h1>
      {errorList.map((error,index)=> <div key={index} className="alert alert-danger">
        {error.message}
      </div>)}
      <form onSubmit={submitFormData}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">first_name</label>
          <input onChange={getFormValue} type="text" name="first_name" className="form-control" id="first_name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">last_name</label>
          <input onChange={getFormValue} type="text" name="last_name" className="form-control" id="last_name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">age</label>
          <input onChange={getFormValue} type="number" name="age" className="form-control" id="age"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input onChange={getFormValue} type="text" name="email" className="form-control" id="email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">password</label>
          <input onChange={getFormValue} type="password" name="password" className="form-control" id="password"/>
        </div>
        <button  className='btn btn-info'>Register</button>
      </form>
    </div>
  )
}
