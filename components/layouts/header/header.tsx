import Link from 'next/link';
import React from 'react';
import DrawerLayout from '@/components/elements/drawer/drawerLayout';
import ContactButton from '@/components/elements/button/contactButton';
import USP from '@/components/elements/useScrollPosition/USP';


const Header = () => {
  return (
    <USP>
      <nav className="
      top-0 left-0 z-10
      w-full pt-3
      flex justify-center items-center
      "
      >
        <div className='
        w-11/12 lg:w-9/12 lg:px-5 bg-white
        flex justify-center items-center
        border border-white rounded-md shadow-md
        '>
          
            <DrawerLayout/>
        </div>
      </nav>
    </USP>
  );
};

export default Header;