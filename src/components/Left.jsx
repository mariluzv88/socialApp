import React from 'react'
import { Link } from 'react-router-dom'

function Left() {
  return (
    <div className='left'>
        <div className='navContainer'>
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/explore">EXPLORE</Link>
            <Link className="link" to="/profile/">PROFILE</Link>
        </div>
        <div>
            <p>USERNAME</p>
            <p>@USERNAME</p>
            <Link className="link" to="/login">LOGOUT</Link>
        </div>
    </div>
  )
}

export default Left