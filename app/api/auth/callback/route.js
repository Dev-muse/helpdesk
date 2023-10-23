import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

 
 
// handle GET request
export async function GET(request){
// get url from request obj and code back from supabase
// to run new session & log user in
   const url = new URL(request.url);
   const code = url.searchParams.get('code');

   if(code){
    const supabase = createRouteHandlerClient({cookies});
    await supabase.auth.exchangeCodeForSession(code)
    //after exchanging code to supabase get new session 
   }

//    redirect user back to base url for app
   return NextResponse.redirect(url.origin)
}