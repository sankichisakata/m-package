'use client'

import React, { useRef } from "react"
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
    Divider,
  } from '@chakra-ui/react'

export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
  
    return (
      <div 
      className="
      m-1 lg:hidden
      "
      >
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon color='black'></HamburgerIcon>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay className="bg-gray-900">
            <DrawerContent>
                
                <DrawerHeader
                className="
                pt-6 pb-10
                flex flex-col justify-between items-center
                "
                >
                  <DrawerCloseButton className="w-full py-5"/>
                  <Divider borderColor="slate.100" orientation="vertical" />
                    <div >
                      <Link href="/">
                        <p className='text-base p-3 text-slate-100'>株式会社エムパッケージ</p>
                      </Link>
                    </div>
                </DrawerHeader>

    
                <DrawerBody>
                <div className='py-10'>
                      <nav className='flex flex-col justify-center items-center'>
                          <ul className="
                          text-xl 
                          flex flex-col gap-8
                          "
                          >
                              <li>
                              <Button variant='outline' mr={3} onClick={onClose}>
                              <Link href="/service">
                                      <p className='text-slate-100'>事業内容</p>
                                  </Link>
                                  </Button>
                              </li>
                              <li>
                              <Link href="/equipment">
                                  <p className='text-slate-100'>設備案内</p>
                              </Link>
                              </li>

                              <li>
                              <Link href="/company">
                                      <p className='text-slate-100'>会社概要</p>
                              </Link>
                              </li>
                          </ul>

                          <div className='my-20'>
                              <Button variant="outlined" size="large">
                              <Link href="/contact">
                                  相談する
                              </Link>
                              </Button>
                          </div>

                          <div className='flex flex-col justify-center items-center gap-4'>
                              <Link href="#">
                                          <p className='text-xs text-slate-100'>プライバシーポリシー</p>
                              </Link>
                              <small className='text-xs text-slate-400'>©️2023&nbsp;株式会社エムパッケージ</small>
                          </div>

                      </nav>
                  </div>
                </DrawerBody>
                
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </div>
    )
  }