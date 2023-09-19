import React from 'react'
import Left from '../../components/Left'
import Right from '../../components/Right'

function Login() {
  return (
   <form>
    <h2>LOGIN</h2>
    <input type='text' placeholder='username'></input>
    <input type='text' placeholder='password'></input>
    <button>LOGIN</button>
    <p>Don't have an account</p>
    <input type='text' placeholder='username' />
    <input type='text' placeholder='password' />
    <input type='text' placeholder='email' required />
    <button type='submit'>Sign Up</button>
   </form>
  )
}

export default Login