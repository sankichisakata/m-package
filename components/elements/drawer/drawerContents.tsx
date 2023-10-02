'use client'

import React, { FC, useRef, useState } from "react"
import Link from "next/link"
import { HiChevronRight, HiMail, HiOutlineMenu, HiOutlineX} from "react-icons/hi";
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
import { HeaderFadeInBack } from "../observer/headerFadeInBack";
import BorderFull from "../border/borderFull";

export default function DrawerContents (props) {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

    // const isOpenChange = (e) => {
    //   const value = e.target.value;
    //   props.isOpenChange(value)
    // }

  
    return (
      <>
        
        <Button className="
        block w-12
        py-3
        " ref={btnRef} onClick={onToggle} onChange={props.isOpenChange(isOpen)}>

          { isOpen ? 
            <HiOutlineX className="mx-auto text-black text-xxxl"/>
          :
            <HiOutlineMenu className="mx-auto text-black text-xxxl"/>
          }

        </Button>

        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          
          <DrawerOverlay onClick={onClose} className="bg-slate-600/50">
          <HeaderFadeInBack>
              <div className="block w-11/12 lg:w-4/6 mx-auto mt-16 text-left">
                  <p className='text-xxs md:txet-xxs text-white font-semibold '>(株)エムパッケージは、お客様第一営業を掲げております。</p>
              </div>
            </HeaderFadeInBack>
           
            <DrawerContent 
            className="
            w-full h-full h-safari-screen mx-auto
            flex flex-col gap-5" 
            
            >
                
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
                bg-white
                mt-24 mb-5
                w-11/12 mx-auto 
                shadow-2xl rounded-md
                "
                overflow='scroll'
                >
                  <div className='
                  bg-white mx-auto px-5 py-5
                  rounded-md
                  '
                  >
                    <HeaderFadeInBack>
                      <div className="
                      bg-tell01 bg-cover bg-top
                      w-10/12 md:w-8/12 h-auto mx-auto 
                      rounded-md
                      ">

                        {/* マスク */}
                        <div className="
                        overflow-hidden bg-fixed bg-slate-600/40
                        bottom-0 left-0 right-0 top-0 h-full w-full 
                        rounded-md
                        "
                        >
                          
                          <div className="
                            w-full pt-5
                            flex flex-col justify-center gap-2
                            "
                            >
                              <div className="text-xs text-white font-semibold text-center">
                                  <p>お気軽にご相談ください。</p>
                              </div>

                              {/* 電話お問い合わせ */}
                              <div className="text-center text-white">
                                  <p className="text-xs font-semibold">電話でのお問い合わせ</p>
                                  <p className="text-base font-bold">048-287-8055</p>
                                  <p className="text-xs">平日 9:00 ~ 17:30</p>
                              </div>
                          </div>

                          <div className='w-full flex justify-center items-center py-3'>
                            <Link href="/contact" onClick={onClose} className="bg-white rounded-full shadow-md">
                              <div className="flex justify-center items-center">
                                  <p className="px-8 py-2 text-black text-xs font-semibold">お問い合わせ</p>
                                  <HiMail className="border-slate-800 rounded-full p-1 m-1 bg-slate-800 text-white text-xxxl"/>
                              </div>
                            </Link>
                          </div>

                        </div>
                        
                        
                      </div>
                    </HeaderFadeInBack>
                    <HeaderFadeInBack>
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
                          text-xs md:text-sm
                          flex flex-col justify-center items-center
                          "
                          >
                              <li className="w-full h-10">
                              <Link href="/service" onClick={onClose}
                              className="
                              w-full h-full inline-block 
                              flex items-center lg:justify-center
                              ">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                    <p className='text-slate-600 font-semibold'>事業内容</p>
                                </div>
                              </Link>
                              </li>

                              <BorderFull/>

                              <li className="w-full h-10">
                              <Link href="/equipment" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p className='text-slate-600 font-semibold'>設備案内</p>
                                  </div>
                              </Link>
                              </li>

                              <BorderFull/>

                              <li className="w-full h-10">
                              <Link href="/company" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p className='text-slate-600 font-semibold'>会社概要</p>
                                  </div>
                              </Link>
                              </li>

                              <BorderFull/>

                              <li className="w-full h-10">
                              <Link href="/news" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p className='text-slate-600 font-semibold'>ニュース</p>
                                  </div>
                              </Link>
                              </li>

                              <BorderFull/>

                              <li className="w-full h-10">
                              <Link href="/contact" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p className='text-slate-600 font-semibold'>お問い合わせ</p>
                                  </div>
                              </Link>
                              </li>
                          </ul>
                            
                          
                            <div className='
                            pt-6 mb-2
                            flex flex-col justify-center items-center gap-2
                            '>
                                <Link href="#" onClick={onClose}>
                                            <p className='text-xxs text-slate-600'>プライバシーポリシー</p>
                                </Link>
                                <small className='text-xxs text-slate-400'><span className="text-slate-400">©</span>&nbsp;2023&nbsp;株式会社エムパッケージ</small>
                            </div>
                          

                      </nav>
                      </HeaderFadeInBack>
                  </div>
                </DrawerBody>
                
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }