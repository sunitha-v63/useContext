import React, { useEffect, useState } from 'react'
import Fetchdata from './Fetchdata'
import { UserContext } from './Context'

function Fetchuser() {
    const[datas,setdata]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then((response)=>response.json())
        .then((data)=>setdata(data))

    },[])
  return (
    <>
    <h3>Fetchuser</h3>
    <ul>
        {datas.map((val)=>(<li key={val.id}>{val.name}</li>))}
    </ul>
    <UserContext.Provider value={{datas}}>
     <Fetchdata/>
    </UserContext.Provider>
    </>
  )
}

export default Fetchuser