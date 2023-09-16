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
      <>
        <Button className="p-2" ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <HamburgerIcon color='black' w={25} h={25}></HamburgerIcon>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay className="bg-gray-900/60">
            <DrawerContent className="w-full h-screen" overflow='scroll'>
                
                <DrawerHeader
                className="
                m-2
                flex flex-col justify-between items-center
                "
                >
                  <DrawerCloseButton className="
                  w-full md:w-4/6 py-8 
                  bg-gray-900 rounded-xl
                  text-lg font-bold text-slate-100
                  "
                  />
                </DrawerHeader>

    
                <DrawerBody className="
                m-2 overflow-scroll shadow-2xl rounded-xl
                "
                >
                  <div className='
                  w-full md:w-4/6
                  bg-gray-900 mx-auto px-5 py-10
                  '
                  >
                      <nav className='
                      w-full
                      flex flex-col justify-center items-center
                      '
                      >
                          <ul className="
                          w-full
                          text-base divide-y divide-gray-600 gap-5
                          flex flex-col justify-center items-center
                          "
                          >
                              {/* <li>
                              <Link href="/">
                                  <p className='text-slate-100'>株式会社エムパッケージ</p>
                              </Link>
                              </li> */}
                              <li>
                              <Link href="/service" className="">
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
                                  <p className="text-orange-500 text-2xl">相談する</p>
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
      </>
    )
  }