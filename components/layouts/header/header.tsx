import Link from 'next/link';
import React from 'react';
import DrawerLayout from '@/components/elements/drawer/drawerLayout';
import ContactButton from '@/components/elements/button/contactButton';


const Header = () => {
  return (
    <header>
      <nav className="
      top-0 left-0 py-3 px-4 w-full 
      bg-white backdrop-blur-sm shadow-sm
      fixed  
      "
      >
        <div className='
        w-full lg:w-4/6 mx-auto
        flex items-center
        '>

          <div className='left-0 w-32'>
            <Link href="/">
                <p className='text-sm p-3 text-gray-800'>エムパッケージ</p>
            </Link>
          </div>

            <div className='
            mr-0 ml-auto
            flex justify-center items-center gap-10
            '
            >
              <ul className="
              hidden lg:flex justify-center items-center gap-10
              text-gray-800 text-xs lg:text-sm 
              ">
                <li>
                <Link href="/service">
                  
                  事業内容
                  
                </Link>
                </li>
                <li>
                <Link href="/equipment">
                
                  設備案内
                
                </Link>
                </li>
                <li>
                <Link href="/company">
                    会社概要
                
                </Link>
                </li>
              </ul>
              <ContactButton/>
            </div>
            <div className='lg:hidden'>
              <DrawerLayout/>
            </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;