
import React from 'react';
import DrawerLayout from '@/components/elements/drawer/drawerLayout'

const Header = () => {
  return (
      <nav className="
      fixed top-0 left-0 z-40
      w-full pt-2 md:pt-4 lg:pt-5 
      flex justify-center items-center
      "
      >
        <div className='
        z-40
        bg-white
        shadow-md 
        rounded-md
        w-11/12 h-16 md:h-20 lg:h-24 py-1 px-1 md:py-2 md:px-4
        flex justify-center items-center
        '>
            <DrawerLayout/>
        </div>
      </nav>
  );
};

export default Header;