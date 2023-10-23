import {createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// components
import Navbar from '../components/Navbar';

export default async function DashboardLayout({children}) {

// getting current user data after login
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.auth.getSession();

  if(!data.session){
    // can't use router on server component instead use redirect
    //signed out/new user won't see dashboard group route
    redirect('/login')
  }


  return (
    <main>
        <Navbar user = {data.session.user} />
        {children}
    </main>
  )
}
