'use client'

import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { DrawerMenu } from '@/components/elements/drawer/drawerMenu';

const Header = () => {
  return (
    <header>
      <nav className="
      top-0 left-0 py-2 px-4 w-full 
      bg-white/10 backdrop-blur-sm 
      fixed  
      "
      >

        <div className='
        w-full lg:w-3/6 mx-auto
        flex justify-between items-center
        '>

          <div className='border-2 border-gray-800'>
          <Link href="/">
            <Button colorScheme='teal' variant='ghost'>
              <p className='text-sm p-3 text-gray-800'>株式会社エムパッケージ</p>
            </Button>
          </Link>
          </div>

          <ul className="
          hidden lg:flex justify-center items-center gap-2
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
          
          <div className='flex justify-center items-center'>
            <Link 
            className='text-sm font-normal text-gray-800'
            href="/contact">
              相談する
            </Link>

            <div className='text-[28px] lg:hidden'>
              <DrawerMenu/>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;