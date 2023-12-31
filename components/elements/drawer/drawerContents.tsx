'use client'

import React from "react"
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
import BorderWhiteFull from "../border/borderWhiteFull";

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
        block
        w-11
        py-2
        " 
        ref={btnRef} onClick={onToggle} onChange={props.isOpenChange(isOpen)}>

          { isOpen ? 
            <HiOutlineX className="mx-auto text-sub-color text-xxxl"/>
          :
            <HiOutlineMenu className="mx-auto text-sub-color text-xxxl"/>
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
              <div className="block w-11/12 lg:w-4/6 mx-auto mt-20 md:mt-28 text-left">
                  <p className='text-xxs md:txet-xs text-white font-bold '>(株)エムパッケージは、お客様第一営業を掲げております。</p>
              </div>
            </HeaderFadeInBack>
           
            <DrawerContent 
            className="
            w-full h-full h-safari-screen mx-auto
            flex flex-col gap-5
            ">
  
                <DrawerBody className="
                bg-white
                mt-24 md:mt-32 mb-5
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
                        overflow-hidden bg-fixed bg-slate-600/30
                        bottom-0 left-0 right-0 top-0 h-full w-full 
                        rounded-md
                        "
                        >
                          
                          <div className="
                            w-full pt-5
                            flex flex-col justify-center gap-2
                            "
                            >
                              <div className="text-xs md:text-sm text-white font-semibold text-center">
                                  <p>お気軽にご相談ください。</p>
                              </div>

                              {/* 電話お問い合わせ */}
                              <div className="text-center text-white">
                                  <p className="text-xxs md:text-xs">お急ぎの方は、電話でお問い合わせ</p>
                                  <p className="text-sm md:text-base font-semibold">048-287-8055</p>
                                  <p className="text-xxs md:text-xs">平日 9:00 ~ 17:30</p>
                              </div>
                          </div>

                          <div className='w-full flex justify-center items-center py-3'>
                            <Link href="/contact" onClick={onClose} className="bg-sub-color border border-sub-color rounded-full shadow-md">
                              <div className="flex justify-center items-center">
                                  <p className="px-6 py-2 text-white text-xs md:text-sm font-semibold">お問い合わせ</p>
                                  <HiMail className="border-white rounded-full p-1 md:p-0.5 m-1 md:m-2 bg-white text-xxxl"/>
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

                          <ul className="
                          w-full md:w-8/12 pt-6
                          text-primary-color text-xs md:text-base font-bold
                          flex flex-col justify-center items-center md:gap-2
                          "
                          >
                              <li className="w-full h-10">
                              <Link href="/service" onClick={onClose}
                              className="
                              w-full h-full inline-block 
                              flex items-center lg:justify-center
                              ">
                                <div className="w-full flex justify-start items-center gap-5">
                                    <HiChevronRight className="text-primary-color text-xl md:text-xxl" />
                                    <p>事業内容</p>
                                </div>
                              </Link>
                              </li>

                              <BorderWhiteFull/>

                              <li className="w-full h-10">
                              <Link href="/equipment" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p>設備案内</p>
                                  </div>
                              </Link>
                              </li>

                              <BorderWhiteFull/>

                              <li className="w-full h-10">
                              <Link href="/company" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p>会社情報</p>
                                  </div>
                              </Link>
                              </li>

                              <BorderWhiteFull/>

                              <li className="w-full h-10">
                              <Link href="/news" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p>ニュース</p>
                                  </div>
                              </Link>
                              </li>

                              <BorderWhiteFull/>

                              <li className="w-full h-10">
                              <Link href="/contact" onClick={onClose}
                              className="
                              w-full h-full inline-block
                              flex items-center lg:justify-center
                              ">
                                  <div className="w-full flex justify-start items-center gap-5">
                                  <HiChevronRight className="text-slate-600 text-xl md:text-xxl" />
                                      <p>お問い合わせ</p>
                                  </div>
                              </Link>
                              </li>
                          </ul>
                            
                          
                            <div className='
                            pt-6 mb-2
                            flex flex-col justify-center items-center gap-2
                            '>
                                <Link href="/privacy" onClick={onClose}>
                                  <p className='text-xs text-sub-color'>プライバシーポリシー</p>
                                </Link>
                                <small className='text-xxs text-primary-color'><span>©</span>&nbsp;2023&nbsp;株式会社エムパッケージ</small>
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