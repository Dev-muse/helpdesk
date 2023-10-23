import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';


// components
import DeleteButton from './DeleteButton';




export const dynamicParams = true; 
// =false returns 404 if page id doesn't match id of pages already cached.
//= true tries to render page but if no match then you get default 404 page

export async function generateMetadata({params}){
    // supabase instance
    const supabase = createServerComponentClient({cookies})
    // .select gets all records .single (data in single doc not array) 
    //.eq (gets some records id== params.id)
    const {data:ticket} = await supabase.from('tickets').select().eq('id',params.id).single()

    return  {
        title: `Help desk | ${ticket?.title || 'Ticket not found'}`
    }
}
// can't generate static pages cos of auth, now done dynamically
// async function getStaticParams(){
//     // must return array of objects [{routeparam: value , id: 1, id:2 }]

//     const response = await fetch('http://localhost:4000/tickets');
//     const tickets = await response.json();
//     return tickets.map(ticket =>(
//         { id: ticket.id}
//     ))
// }



async function getTicket(id){
     // supabase instance
     const supabase = createServerComponentClient({cookies})
     // .select gets all records .single (data in single doc not array) 
     //.eq (gets some records id== params.id)
     const {data} = await supabase.from('tickets').select().eq('id',id).single()
 

    if(!data){
        notFound()
    }

    return data
}


export default async function TicketDetails({params}) {
  
    const ticket = await getTicket(params.id);
    const supabase = createServerComponentClient({cookies})
    const {data} = await supabase.auth.getSession();


  return (
    <main>
        <nav>
            <h2>Ticket Details:</h2>
        </nav>
        <div className="ml-auto">
            {data.session.user.email === ticket.user_email && (
                <DeleteButton  id={ticket.id}/>
            )}
        </div>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>created by: {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority}
            </div>
        
        </div>
    </main>
  )
}
