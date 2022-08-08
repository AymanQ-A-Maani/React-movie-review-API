import React, {useContext, useState} from 'react'
import { Link} from 'react-router-dom'
import { UserContext } from '../Context/UserContext';


export default function Navbar() {


    let {user, users, setUser} = useContext(UserContext);

    function logOut(){
        localStorage.removeItem('isLoggedIn');
        let currentUser = {...user};
        currentUser.isLoggedIn = false;
        users.splice(currentUser.id, 1, currentUser);
        localStorage.setItem('users', JSON.stringify(users));
        setUser(currentUser);
    }

  return (
<nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Noxe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {user.isLoggedIn ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="Home">Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="Movie">Movies</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="TV">Tv Shows</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="People">People</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="About">About</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="Network">Networks</Link>
            </li>
        </ul>: null} 
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>

            <li className="nav-item d-flex">
                <a className="nav-link" href="#">
                    <i className='fa-brands fa-facebook'></i>
                </a>
                <a className="nav-link" href="#">
                    <i className='fa-brands fa-youtube'></i>
                </a>
                <a className="nav-link" href="#">
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>

            <li className="nav-item"> 
            {user.isLoggedIn ? <Link className="nav-link" to="Login" onClick={logOut}>Logout</Link> : <Link className="nav-link" to="Login">login</Link>}
        
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="Register">Register</Link>
            </li>
        </ul>
    </div>
  </div>
</nav>

  )
}
