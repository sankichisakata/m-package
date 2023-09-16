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

export default function DrawerContents () {
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
          <DrawerOverlay className="bg-gray-100">
            <DrawerContent overflow='scroll'>
                
                <DrawerHeader
                className="
                pt-4 pb-4
                flex flex-col justify-between items-center
                "
                >
                  <DrawerCloseButton className="w-full text-lg font-bold text-gray-900 py-8"/>
                </DrawerHeader>

    
                <DrawerBody className="w-full shadow-xl">
                <div className='
                bg-gray-900 mx-5 px-5 py-10
                rounded-xl
                '
                >
                      <nav className='
                      w-full
                      flex flex-col justify-center items-center
                      '
                      >
                          <ul className="
                          w-full
                          text-xl divide-y divide-gray-600 gap-5
                          flex justify-center items-center flex-col
                          "
                          >
                              {/* <li>
                              <Link href="/">
                                  <p className='text-slate-100'>株式会社エムパッケージ</p>
                              </Link>
                              </li> */}
                              <li>
                              <Link href="/service" className="w-full inline-block">
                                  <p className='text-slate-100'>事業内容</p>
                              </Link>
                              </li>
                              <li>
                              <Link href="/equipment">
                                  <p className='text-slate-100 mt-5'>設備案内</p>
                              </Link>
                              </li>
                              <li>
                              <Link href="/company">
                                      <p className='text-slate-100 mt-5'>会社概要</p>
                              </Link>
                              </li>
                          </ul>

                          <div className='my-20'>
                              <Link href="/contact">
                                  相談する
                              </Link>
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