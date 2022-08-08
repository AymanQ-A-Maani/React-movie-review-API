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
import Details from '../Details/Details'


export default function App() {
  
  let users = [];
  let userId= '';

  if(localStorage.getItem(`users`)){
    users = JSON.parse(localStorage.getItem(`users`));
    }
  

  let [user, setUser] = useState({
    id: 0,
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
    isLoggedIn: localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false,
  })

console.log( "this is users array", users)
console.log( "this is user object", user)
  return (
    <div>
      <UserContext.Provider value={{users, userId, user, setUser}}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={user.isLoggedIn?<Home />:<Login />} />
          <Route path='Home' element={user.isLoggedIn?<Home />:<Login />} />
          <Route path='Movie' element={user.isLoggedIn?<Movie />:<Login />} />
          <Route path='details' element={user.isLoggedIn?<Details />:<Login />} />
          <Route path='TV' element={user.isLoggedIn?<TV />:<Login />} />
          <Route path='People' element={user.isLoggedIn?<People />:<Login />} />
          <Route path='About' element={user.isLoggedIn?<About />:<Login />} />
          <Route path='Login' element={user.isLoggedIn?<Login />:<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='Network' element={user.isLoggedIn?<Network />:<Login />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
      </UserContext.Provider>
    </div>
  )
}

