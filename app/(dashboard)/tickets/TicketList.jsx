 
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

async function getTickets(){
   const supabase= createServerComponentClient({cookies})
   const {data,error} = await supabase.from('tickets').select()
   if(error){
    console.log(error)
   }
   return data
}


async function TicketList() {
    const tickets = await getTickets()
 
    

  return (
   <>
    
   {tickets.map(
    (ticket)=>(
        <div key={ticket.id} className="card">
            <Link href={`/tickets/${ticket.id}`}>
        
            <h1>{ticket.title}</h1>
            <p>{ticket.body.slice(0,200)}...</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority}
            </div>
            </Link>
        </div>
    )
   )}
   
   {tickets.length === 0 && (
    <div className="text-center">There are no open tickets🎉🎉 </div>
   )}
   
   </>


  )
}

export default TicketList