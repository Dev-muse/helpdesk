"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {TiDelete} from 'react-icons/ti';


export default function DeleteButton({id}) {
    const [isLoading , setIsLoading]= useState(false);
    const router = useRouter();

const handleClick = async ()=>{

setIsLoading(true)
// request to api endpoint to delete record 
const response = await fetch(`http://localhost:3000/api/tickets/${id}`,{
    method: 'DELETE'
})
const json = response.json()

if(json.error){
    setIsLoading(false)
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
    onClick={handleClick}
    disabled={isLoading}
    
    >
        {!isLoading && (<><TiDelete />Delete Ticket</>)}
        {isLoading && (<><TiDelete />Deleting...</>)}
    </button>
  )
}
