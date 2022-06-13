import React from 'react'
import { useDispatch } from 'react-redux'
import { LogoutApi } from '../store/auth/auth.actions'

const Navbar = () => {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(LogoutApi())
    }
  return (
    <div>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Navbar