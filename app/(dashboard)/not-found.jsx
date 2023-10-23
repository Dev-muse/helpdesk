import Link from 'next/link';

export default function NotFound() {
  return (
   <main className="text-center">
    <h2 className="text-3xl text-primary">There was a problem :(</h2>
    <p>We could not find the page you are looking for</p>
    <p>Back to <Link href='/'>Dashboard</Link></p>
   </main>
  )
}
