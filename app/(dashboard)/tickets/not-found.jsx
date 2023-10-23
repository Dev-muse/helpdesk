import Link from 'next/link';

export default function NotFound() {
  return (
   <main className="text-center">
    <h2 className="text-3xl">There was a problem :(</h2>
    <p>We could not find the ticket you are looking for</p>
    <p>Back to <Link href='/tickets'>all tickets</Link></p>
   </main>
  )
}