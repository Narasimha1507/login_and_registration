import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import Button from '@mui/material/Button';
import './navbar.css'

export default function Login() {
  return (
    <div className='logincontainer'>
      <form >
        <h1>Login</h1>
        <div className='input-box'>
          <input type='email' placeholder='Enter Email' required></input>
          <a><MdEmail /></a>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Enter Password' required></input>
          <a><FaUserLock /></a>
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot Password?</a>
        </div>
        <Button variant="outlined" type='login' className="btn"><a>Login</a></Button>
        <div className='register-link'>
            <p>Dont have an account?<a href='./register'>Register</a></p>
        </div>
        </form>
    </div>
  )
}
