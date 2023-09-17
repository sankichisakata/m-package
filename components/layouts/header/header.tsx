import Link from 'next/link';
import React from 'react';
import DrawerLayout from '@/components/elements/drawer/drawerLayout';
import ContactButton from '@/components/elements/button/contactButton';


const Header = () => {
  return (
    <header>
      <nav className="
      fixed top-0 left-0 z-10
      w-full pt-3
      flex justify-center items-center
      "
      >
        <div className='
        w-11/12 lg:w-4/6 lg:px-5 bg-white
        flex justify-center items-center
        border border-white rounded-md 
        '>


          <Link href="/" className='block p-3'>
              <p className='text-xxs lg:text-xs text-gray-800'>株式会社エムパッケージ</p>
          </Link>


          <div className='
          mr-0 ml-auto
          flex justify-center items-center gap-10
          '
          >
            <ul className="
            hidden lg:flex justify-center items-center
            text-gray-800 text-xs lg:text-sm 
            ">
              <li>
              <Link href="/service">
              <p className='p-5'>事業内容</p>
              </Link>
              </li>
              <li>
              <Link href="/equipment">
              
                <p className='p-5'>設備案内</p>
              
              </Link>
              </li>
              <li>
              <Link href="/company">
              <p className='p-5'>会社概要</p>
              
              </Link>
              </li>
            </ul>
          </div>

          {/* <div style={{ visibility: isOpen ? "hidden" : "visible"}}>
            <ContactButton />
          </div> */}

          <ContactButton />

          <div className='lg:hidden'>
            <DrawerLayout/>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;