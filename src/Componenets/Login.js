import React, { useContext } from 'react'
import { AuthenticationContext } from './Context'

function Login() {
    const {isLoggedIn, setIsLoggedIn}=useContext(AuthenticationContext)
  return (
    <div>
        <h3>Login</h3>
        <h2>{isLoggedIn ? "Welcome back, user!" : "Please log in "}</h2>
      <button onClick={()=>{setIsLoggedIn(isLoggedIn?"Login":"Logut")}}>Authentication
      </button>
    </div>
  )
}

export default Login