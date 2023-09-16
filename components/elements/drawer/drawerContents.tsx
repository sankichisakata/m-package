'use client'

import React, { useRef } from "react"
import Link from "next/link"
import { HamburgerIcon, EmailIcon, PhoneIcon, ChevronRightIcon } from "@chakra-ui/icons"
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
          <HamburgerIcon color='black' w={23} h={23}></HamburgerIcon>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay className="bg-gray-300">
            <DrawerContent className="w-full h-screen flex flex-col gap-5" overflow='scroll'>
                
                <DrawerHeader
                className="
                w-full pt-3
                flex flex-col items-center
                "
                >
                  <div className="
                  w-11/12 
                  bg-slate-600 rounded-md shadow-2xl
                  flex justify-between items-center
                  ">
                   <div className='w-52'>
                    <Link onClick={onClose} href="/">
                          <p className='p-3 text-xxs text-white text-bold'>株式会社エムパッケージ</p>
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
                w-11/12 mx-auto overflow-scroll 
                shadow-2xl rounded-md
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
                              <Link href="/contact" onClick={onClose} className="border border-gray-100/20 rounded-full">
                                <ChakraLink>
                                  <div className="flex justify-center items-center">
                                    <p className="px-3 py-2 text-orange-400 text-xs">お問い合わせ</p>
                                    <EmailIcon
                                      className="border-gray-100 rounded-full p-1 m-1 bg-gray-100 text-slate-600"
                                      w={26} h={26}
                                      />
                                    </div>
                                </ChakraLink>
                              </Link>

                                <Link href="/contact" onClick={onClose} className="border border-gray-100/20 rounded-full">
                                  <ChakraLink>
                                    <div className="flex justify-center items-center">
                                      <p className="px-3 py-2 text-orange-400 text-xs">電話で相談する</p>
                                      <PhoneIcon 
                                      className="border-gray-100 rounded-full p-1 m-1 bg-gray-100 text-slate-600" 
                                     
                                      w={26} h={26}
                                      />
                                    </div>
                                  </ChakraLink>
                                </Link>
                            </div>

                          <ul className="
                          w-full md:w-8/12 pt-6
                          text-sm
                          flex flex-col justify-center items-center
                          "
                          >
                              <li className="w-full h-14">
                              <Link href="/service" onClick={onClose}
                              className="
                              w-full h-full inline-block 
                              flex justify-center items-center">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon w={26} h={26} />
                                    <p className='text-white text-center'>事業内容</p>
                                </div>
                              </Link>
                              </li>

                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-gray-100/30"></div>  
                              </div>

                              <li className="w-full h-14">
                              <Link href="/equipment" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex justify-center items-center
                              ">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon w={26} h={26} />
                                    <p className='text-white text-center'>設備案内</p>
                                </div>
                              </Link>
                              </li>

                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-gray-100/30"></div>  
                              </div>

                              <li className="w-full h-14">
                              <Link href="/company" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex justify-center items-center">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon w={26} h={26} />
                                    <p className='text-white text-center'>会社概要</p>
                                </div>
                              </Link>
                              </li>

                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-gray-100/30"></div>  
                              </div>

                              <li className="w-full h-14">
                              <Link href="/contact" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex justify-center items-center
                              ">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon w={26} h={26} />
                                    <p className='text-white text-center'>お問い合わせ</p>
                                </div>
                              </Link>
                              </li>
                          </ul>

                          <div className='
                          pt-6 mb-6
                          flex flex-col justify-center items-center gap-2
                          '>
                              <Link href="#" onClick={onClose}>
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