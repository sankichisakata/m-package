'use client'

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Button, Stack } from '@chakra-ui/react';

const ContactButton = () => {
    return(
        <div className='
        w-32
        flex justify-center items-center gap-5
        '
        >
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
      
            
        </div>
    )
}

export default ContactButton;