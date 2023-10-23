"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';

export default  function LogoutButton() {
    const router = useRouter()


  const handleClick = async()=>{
    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signOut()

if(!error){
    router.push('/login')
}
if(error){
    console.log("error", error)
}

  }

  return (
   <button className="btn-primary" onClick={handleClick}>Logout</button>
  )
}
