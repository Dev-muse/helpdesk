"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {TiDelete} from 'react-icons/ti';
import { useTransition } from 'react';
import { deleteTicket } from '../actions';

export default function DeleteButton({id}) {

    // use transition hook calls server action
    const [isPending, startTransition] = useTransition()


     
    const router = useRouter();

const handleClick = async ()=>{

setIsLoading(true)
// request to api endpoint to delete record 
const response = await fetch(`http://localhost:3000/api/tickets/${id}`,{
    method: 'DELETE'
})
const json = response.json()

if(json.error){
     
    console.log(error)
}
if(!json.error){
    router.refresh()
    router.push('/tickets')
}

}

  return (
    <button 
    className='btn-primary'
    onClick={()=>startTransition(()=>deleteTicket(id))}
    disabled={isPending}
    
    >
        {!isPending && (<><TiDelete />Delete Ticket</>)}
        {isPending && (<><TiDelete />Deleting...</>)}
    </button>
  )
}
