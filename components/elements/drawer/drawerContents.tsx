'use client'

import React, { useRef } from "react"
import Link from "next/link"
import { HamburgerIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons"
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
    Link as ChakraLink,
    Divider,
  } from '@chakra-ui/react'

export default function DrawerContents () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
  
    return (
      <>
        <Button className="
        block w-16
        p-3
        " ref={btnRef} onClick={onOpen}>
          <HamburgerIcon color='black' w={26} h={26}></HamburgerIcon>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay className="bg-gray-300">
            <DrawerContent className="w-full h-screen" overflow='scroll'>
                
                <DrawerHeader
                className="
                m-2 pt-3
                flex flex-col items-center
                "
                >
                  <div className="
                  w-full 
                  bg-slate-600 rounded-xl
                  flex justify-between items-center
                  ">
                   <div className='w-1/2'>
                    <Link href="/">
                          <p className='w-52 p-3 text-base text-white text-bold'>株式会社エムパッケージ</p>
                    </Link>
                  </div>
                  <DrawerCloseButton className="
                  w-16
                  inline-block p-3
                  text-lg font-bold text-slate-100
                  "
                  />
                  </div>
                </DrawerHeader>

    
                <DrawerBody className="
                md:w-4/6 m-2 md:mx-auto overflow-scroll 
                shadow-2xl rounded-xl
                "
                >
                  <div className='
                  w-full
                  bg-slate-600 mx-auto px-5 py-8
                  '
                  >
                      <nav className='
                      w-full
                      flex flex-col justify-center items-center
                      '
                      >

                            <div className='w-full md:w-5/6 flex justify-center items-center gap-2 md:gap-6'>
                              <Link href="/contact" className="border border-gray-100/20 rounded-full">
                                <ChakraLink>
                                  <div className="flex justify-center items-center">
                                    <p className="px-3 py-2 text-orange-400 text-sm">お問い合わせ</p>
                                    <EmailIcon
                                      className="border-gray-100 rounded-full p-1 m-1 bg-gray-100 text-slate-600"
                                      w={26} h={26}
                                      />
                                    </div>
                                </ChakraLink>
                              </Link>

                                <Link href="/contact" className="border border-gray-100/20 rounded-full">
                                  <ChakraLink>
                                    <div className="flex justify-center items-center">
                                      <p className="px-3 py-2 text-orange-400 text-sm">電話で相談する</p>
                                      <PhoneIcon 
                                      className="border-gray-100 rounded-full p-1 m-1 bg-gray-100 text-slate-600" 
                                     
                                      w={26} h={26}
                                      />
                                    </div>
                                  </ChakraLink>
                                </Link>
                            </div>

                          <ul className="
                          w-full pt-6
                          text-sm gap-3
                          flex flex-col justify-center items-center
                          "
                          >
                              <li>
                              <Link href="/service" className="">
                                  <p className='text-white'>事業内容</p>
                              </Link>
                              </li>
                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-gray-100/30"></div>  
                              </div>
                              <li>
                              <Link href="/equipment">
                              <p className='text-white'>設備案内</p>
                              </Link>
                              </li>
                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-gray-100/30"></div>  
                              </div>
                              <li>
                              <Link href="/company">
                                      <p className='text-white'>会社概要</p>
                              </Link>
                              </li>
                          </ul>

                          <div className='
                          pt-6 mb-6
                          flex flex-col justify-center items-center gap-2
                          '>
                              <Link href="#">
                                          <p className='text-xxs text-slate-100'>プライバシーポリシー</p>
                              </Link>
                              <small className='text-xxs text-slate-400'><span className="text-slate-400">©</span>&nbsp;2023&nbsp;株式会社エムパッケージ</small>
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