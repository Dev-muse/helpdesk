"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import AuthForm from '../AuthForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Signup() {
  const [error,setError] = useState('')
  const router= useRouter()

  const handleSubmit = async(e,email,password)=>{
    e.preventDefault();
    console.log("signup", email,password)

    const supabase = createClientComponentClient();
    //  verification step
    const {error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        // create a api route for this email redirect GET req
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

  if(error){
    setError(error.message)
  }
  if(!error){
    router.push('/verify')
  }
    
  }
  return (
    <main>
      <h1 className='text-center py-2'>SignUp</h1>
      <AuthForm  handleSubmit={handleSubmit}/>
      {error && (<div className='error'>{error}</div>)}
    </main>
  )
}
