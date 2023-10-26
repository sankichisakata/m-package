import Link from 'next/link';
import React from 'react';
import DrawerLayout from '@/components/elements/drawer/drawerLayout'

const Header = () => {
  return (
      <nav className="
      fixed top-0 left-0 z-40
      w-full lg:pt-5 
      flex justify-center items-center
      "
      >
        <div className='
        z-40
        w-full lg:w-11/12 h-16 md:h-20  py-1 px-1 md:py-2 md:px-4 bg-white
        flex justify-center items-center
        border border-white shadow-md lg:rounded-lg
        '>
            <DrawerLayout/>
        </div>
      </nav>
  );
};

export default Header;