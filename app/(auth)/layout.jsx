import {createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


import Link from 'next/link';

export default async function AuthLayout({children}) {

  // if user logged in then redirect to dashboard
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.auth.getSession();

  if(data.session){
    redirect('/')
  }

  return (
    <>
        <nav>
            <Link href="/"><h2>Helpdesk</h2></Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
        </nav>
        {children}
    </>
  )
}
