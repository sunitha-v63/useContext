import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Uers() {
    const {theme}=useContext(ThemeContext)

    const style={
        backgroundColor:theme==="light"?"white":"black",
        color:theme==="light"?"black":"white"
    }
  return (
    <div>
      <h6>Mini-project 1:toggle</h6>
        <h1 style={style}>output:Uers Toggle</h1>

    </div>
  )
}

export default Uers