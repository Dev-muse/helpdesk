"use client"

import {useState} from 'react';

export default function AuthForm({handleSubmit}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <form onSubmit={(e)=>handleSubmit(e,email,password)} >
        <label>
            <span>Email</span>
            <input type="email" required 
            onChange={(e)=>setEmail(e.target.value)}
            value={email} placeholder='enter email' 
            />
        </label>
        <label>
            <span>Password</span>
            <input type="Password" required 
            onChange={(e)=>setPassword(e.target.value)}
            value={password} placeholder='enter Password' 
            />
        </label>
        <button className="btn-primary">Submit</button>
    </form>
  )
}
