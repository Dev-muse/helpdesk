import Link from 'next/link';
import Image from 'next/image';
import Logo from './dojo-logo.png';

import LogoutButton from './LogoutButton';


function NavBar({user}) {
  return (
    <nav  >
      <Image 
      src={Logo} alt="Helpdesk Logo" 
      width={70} quality={100}
      placeholder="blur"/>
      <h2>Helpdesk</h2> &nbsp;
      <Link href='/'>Dashboard</Link>&nbsp;
      <Link href='/tickets' className="mr-auto">Tickets</Link>
      {user && <span>Welcome:{user.email}</span>}
      {/* logoout button client component */}
      <LogoutButton />

  </nav>
  )
}

export default NavBar;