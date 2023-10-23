"use server"

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function addTicket(formData) {

    // get values from entries 
 const tickets = Object.fromEntries(formData);
 // connect to supabase
const supabase = createServerActionClient({cookies})
// get session
const {data:{session}} = await supabase.auth.getSession()

// insert data into database
const {error} = await supabase.from('tickets').insert({
    ...tickets,user_email: session.user.email
})

if(error){
    throw new Error('could not add new ticket')
}

//revalidate path aka refresh then redirect user to tickets page
revalidatePath('/tickets')
redirect('/tickets')

}


export async function deleteTicket(id){
     // connect to supabase
const supabase = createServerActionClient({cookies})
 
// delete data from database
const {error} = await supabase.from('tickets').delete().eq('id',id)

if(error){
    throw new Error('could not delete ticket')
}

//revalidate path aka refresh then redirect user to tickets page
revalidatePath('/tickets')
redirect('/tickets')

}