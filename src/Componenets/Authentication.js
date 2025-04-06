import React, { useState } from 'react'
import { AuthenticationContext } from './Context';
import Login from './Login'


function Authentication() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <h6>mini project 3:Authentication</h6>
    <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Login</button>
    <AuthenticationContext.Provider value={{ isLoggedIn,setIsLoggedIn }}>
    <Login/>
    </AuthenticationContext.Provider>
    </>
  )
}

export default Authentication