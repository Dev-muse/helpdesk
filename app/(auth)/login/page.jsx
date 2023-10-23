"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// components
import AuthForm from '../AuthForm'



export default function Login() {
  // state for error handling
  const [error , setError] =useState('');


  const router = useRouter();

  const handleSubmit = async (event,email, password)=>{
    event.preventDefault();
    // removing error if user is resubmitting form 
    setError('');

    // connecto to supabase and pass in auth, destructure erro
    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signInWithPassword({
      email,password
    })
    if(!error){
      // if no error we redirect to dashboard
      router.push('/');
    }
    if(error){
      setError(error.message);
    }

  }
  return (
    <main>
      <h1 className='text-center py-2'>Login</h1>
      <AuthForm  handleSubmit={handleSubmit}/>

      {error && <div className="error">{error}</div>}

   </main>
  )
}
