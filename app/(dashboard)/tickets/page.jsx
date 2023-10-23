import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';


export const metadata = {
  title: 'Help Desk | Tickets'
}

export default function tickets() {
  return (
    <main>
       <nav>
           
            <div>
              <h2>Tickets</h2>
              <p><small>Current open tickets</small></p>
            </div>
            
            <Link href="/tickets/create" className='ml-auto'>
              <button className='btn-primary'>New Ticket</button>
            </Link>
          
       
       </nav>
       {/*loading suspense wrapper around components that need loading  */}
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  )
}
