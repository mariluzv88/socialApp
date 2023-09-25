import {useState} from 'react'
import Left from '../../components/Left'
import Right from '../../components/Right'
import axios from "axios"

function Login() {
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
    const res = await axios.post("/api/auth/signin", {username, password},)
    console.log(res)
    }catch(err){
     console.log(err)
    }
  }

  return (
   <form>
    <h2>LOGIN</h2>
    <input  onChange={(e) => setUsername(e.target.value)}type='text' placeholder='username'></input>
    <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='password'></input>
    <button onClick={handleSubmit}>LOGIN</button>
    <p>Don't have an account</p>
    <input type='text' placeholder='username' />
    <input type='text' placeholder='password' />
    <input type='text' placeholder='email' required  />
    <button type='submit'>Sign Up</button>
   </form>
  )
}

export default Login