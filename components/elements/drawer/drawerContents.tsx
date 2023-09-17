'use client'

import React, { useRef } from "react"
import Link from "next/link"
import { HamburgerIcon, EmailIcon, PhoneIcon, ChevronRightIcon, SmallCloseIcon } from "@chakra-ui/icons"
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
    Fade,
    ScaleFade,
    Slide,
    SlideFade,
    Collapse
  } from '@chakra-ui/react'
import BackImageTell01 from "../image/backImageTell01"

export default function DrawerContents () {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
  
    return (
      <>
        
        <Button className="
        block w-16
        p-3
        " ref={btnRef} onClick={onToggle}>

          { isOpen ? 
            <SmallCloseIcon color='black' w={23} h={23}/>
          :
            <HamburgerIcon color='black' w={23} h={23}/>
          }

        </Button>

        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          
          <DrawerOverlay onClick={onClose} className="bg-slate-600/50">
            <DrawerContent className="w-full h-full safari-screen mx-auto flex flex-col gap-5" overflow='scroll'>
                
                {/* <DrawerHeader
                className="
                w-full pt-3
                flex flex-col items-center
                "
                >
                  <div className="
                  w-11/12 
                  bg-white rounded-md shadow-2xl
                  flex justify-between items-center
                  ">
                   <div className='w-52'>
                    <Link onClick={onClose} href="/">
                          <p className='p-3 text-xxs text-slate-600 text-bold'>株式会社エムパッケージ</p>
                    </Link>
                  </div>
                  <DrawerCloseButton className="
                  w-16
                  inline-block p-3
                  text-lg font-bold text-slate-600
                  "
                  />
                  </div>
                </DrawerHeader> */}

    
                <DrawerBody className="
                mt-20 mb-5
                w-11/12 mx-auto overflow-scroll 
                shadow-2xl rounded-md
                "
                >
                  <div className='
                  w-full
                  bg-white mx-auto px-5 py-8
                  '
                  >

                      <div className="
                      w-10/12 md:w-8/12 h-auto mx-auto 
                      rounded-md relative
                      ">
                        
                        

                        <div className="
                          w-full pt-5
                          flex flex-col justify-center gap-2
                          "
                          >
                            <div className="text-xs text-center">
                                <p>お気軽にご相談ください。</p>
                            </div>

                            {/* 電話お問い合わせ */}
                            <div className="text-center">
                                <p className="text-xs">電話でのお問い合わせはこちらから</p>
                                <p className="text-base font-semibold">048-287-8055</p>
                                <p className="text-xs">平日 9:00 ~ 17:30</p>
                            </div>
                        </div>

                        <div className='w-full flex justify-center items-center py-5'>
                          <Link href="/contact" onClick={onClose} className="border border-slate-500/20 rounded-full">
                            <div className="flex justify-center items-center">
                                <p className="px-3 py-2 text-white text-xs">お問い合わせ</p>
                                <EmailIcon
                                  className="border-slate-800 rounded-full p-1 m-1 bg-slate-800 text-white"
                                  w={26} h={26}
                                  />
                            </div>
                          </Link>
                        </div>

                        <div className="w-full h-full">
                          <BackImageTell01/>
                        </div>
                        
                      </div>

                      <nav className='
                      w-full
                      flex flex-col justify-center items-center
                      '
                      >

                            {/* <div className='w-full md:w-5/6 flex justify-center items-center gap-2 md:gap-6'>
                              <Link href="/contact" onClick={onClose} className="border border-slate-500/20 rounded-full">
                                <div className="flex justify-center items-center">
                                    <p className="px-3 py-2 text-slate-800 text-xs">お問い合わせ</p>
                                    <EmailIcon
                                      className="border-slate-800 rounded-full p-1 m-1 bg-slate-800 text-white"
                                      w={26} h={26}
                                      />
                                </div>
                              </Link>

                                <Link href="/contact" onClick={onClose} className="border border-slate-500/20 rounded-full">
                                    <div className="flex justify-center items-center">
                                      <p className="px-3 py-2 text-slate-800 text-xs">電話で相談する</p>
                                      <PhoneIcon 
                                      className="border-slate-800 rounded-full p-1 m-1 bg-slate-800 text-white" 
                                     
                                      w={26} h={26}
                                      />
                                    </div>
                                </Link>
                            </div> */}

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
                                    <ChevronRightIcon className="text-slate-600" w={26} h={26} />
                                    <p className='text-slate-600 text-center'>事業内容</p>
                                </div>
                              </Link>
                              </li>

                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-slate-500-20"></div>  
                              </div>

                              <li className="w-full h-14">
                              <Link href="/equipment" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex justify-center items-center
                              ">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon className="text-slate-600" w={26} h={26} />
                                    <p className='text-slate-600 text-center'>設備案内</p>
                                </div>
                              </Link>
                              </li>

                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-slate-500-20"></div>  
                              </div>

                              <li className="w-full h-14">
                              <Link href="/company" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex justify-center items-center">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon className="text-slate-600" w={26} h={26} />
                                    <p className='text-slate-600 text-center'>会社概要</p>
                                </div>
                              </Link>
                              </li>

                              <div className="w-full flex items-center">
                                <div className="flex-1 border-b border-slate-500-20"></div>  
                              </div>

                              <li className="w-full h-14">
                              <Link href="/contact" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex justify-center items-center
                              ">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <ChevronRightIcon className="text-slate-600" w={26} h={26} />
                                    <p className='text-slate-600 text-center'>お問い合わせ</p>
                                </div>
                              </Link>
                              </li>
                          </ul>

                          <div className='
                          pt-6 mb-6
                          flex flex-col justify-center items-center gap-2
                          '>
                              <Link href="#" onClick={onClose}>
                                          <p className='text-xxs text-slate-600/50'>プライバシーポリシー</p>
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