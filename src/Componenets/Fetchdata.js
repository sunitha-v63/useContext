import React, { useContext } from 'react'
import { UserContext } from './Context'

function Fetchdata() {
    const {datas}=useContext(UserContext)
  return (
    <>
 <ul>
        {datas.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </>
  )
}

export default Fetchdata