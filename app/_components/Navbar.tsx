import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white absolute inset-x-0 top-0 h-16 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0'>
        <div className='font-bold uppercase font-serif'>[Range <span className='text-rose-900'>Rover]</span></div>
        <div className='flex gap-6'>
            {/**links */}
            <Link href="#">[Air]</Link>
            <Link href="#">[Gravity]</Link>
            <Link href="#">[Experience]</Link>
            <Link href="#">[Buy]</Link>
        </div>
      
    </nav>
  )
}

export default Navbar;
