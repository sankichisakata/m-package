"use client";

import React from "react"
import { HamburgerIcon } from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    useDisclosure,
    Link,
  } from '@chakra-ui/react'
import MenuList from "../menuList/menuList";

function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon color='black'></HamburgerIcon>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay backgroundColor='black'>
            <DrawerContent>
                
                <DrawerHeader
                 className="flex justify-between items-center">
                    <div className='border-2 border-gray-800'>
                    <Link href="/">
                        <Button colorScheme='teal' variant='ghost'>
                            <p className='text-sm p-3 text-gray-800'>株式会社エムパッケージ</p>
                        </Button>
                    </Link>
                    </div>
                    <DrawerCloseButton/>
                </DrawerHeader>

    
                <DrawerBody>
                <MenuList/>
                </DrawerBody>
                
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  export default DrawerMenu;