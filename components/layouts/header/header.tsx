'use client'

import Link from 'next/link';
import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { DrawerMenu } from '@/components/elements/drawer/drawerMenu';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <header>
      <nav className="
      top-0 left-0 py-3 px-4 w-full 
      bg-white/10 backdrop-blur-sm 
      fixed  
      "
      >

        <div className='
        w-full lg:w-4/6 mx-auto
        flex justify-between items-center
        '>

          <div className=''>
          <Link href="/">
            <Button colorScheme='teal'>
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
          
          <div className='flex justify-center items-center gap-5'>
          
              <Link href="/contact">
              <Stack 
              className='
              py-2 px-3
              text-sm font-normal text-gray-800
              border border-gray-800 rounded-xl
              '  
              >
                <Button rightIcon={<ArrowForwardIcon />}  variant='outline'>
                
                  相談する
                
                </Button>
              </Stack>
              </Link>
        
              <DrawerMenu/>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;