import { Route, Routes,} from 'react-router-dom'
import About from '../About/About'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Movie from '../Movie/Movie'
import Navbar from '../Navbar/Navbar'
import Network from '../Network/Network'
import Notfound from '../Notfound/Notfound'
import People from '../People/People'
import Register from '../Register/Register'
import TV from '../TV/TV'
import React, {useState} from 'react'
import { UserContext } from '../Context/UserContext'
import { IsLoggedInContext } from '../Context/IsLoggedInContext'
import Details from '../Details/Details'


export default function App() {

  let [ user, setUser ] = useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:'',
  });

  let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));


  return (
    <div>
      <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <Navbar />
      <div className="container">
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={isLoggedIn?<Home />:<Login />} />
          <Route path='Home' element={isLoggedIn?<Home />:<Login />} />
          <Route path='Movie' element={isLoggedIn?<Movie />:<Login />} />
          <Route path='details' element={isLoggedIn?<Details />:<Login />} />
          <Route path='TV' element={isLoggedIn?<TV />:<Login />} />
          <Route path='People' element={isLoggedIn?<People />:<Login />} />
          <Route path='About' element={isLoggedIn?<About />:<Login />} />
          <Route path='Login' element={isLoggedIn?<Login />:<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='Network' element={isLoggedIn?<Network />:<Login />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </UserContext.Provider>
      </div>
      </IsLoggedInContext.Provider>
    </div>
  )
}

