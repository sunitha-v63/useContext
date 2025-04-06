import React, { useContext } from 'react'
import { counterContext } from './Context'

function Grandchild() {
    const {count}=useContext(counterContext)
  return (
    <>
    <h6>mini project 3:counter</h6><h3>Grandchild</h3>
    <p>{count}</p></>

  )
}

export default Grandchild