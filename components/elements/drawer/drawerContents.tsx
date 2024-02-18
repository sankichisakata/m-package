'use client'

import React from "react"
import Link from "next/link"
import { HiArrowRight, HiChevronRight, HiMail, HiOutlineMenu, HiOutlineX} from "react-icons/hi";
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
import { FadeInBack } from "../observer/fadeInBack";

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
        w-14 md:w-16
        py-5
        px-3
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
          
          <DrawerOverlay onClick={onClose} className="z-30 bg-slate-600/50">
           
            <DrawerContent 
            className="
            z-30
            w-full h-full h-safari-screen mx-auto pb-2 md:pb-4
            flex flex-col
            ">
              <div
              className=""
              >
                  <p className='
                  break-words mt-20 md:mt-28 pb-2 md:pb-4 pl-5 md:pl-10
                  text-left text-xxs md:txet-xs text-white font-bold
                  '>
                      (株)エムパッケージは、お客様第一を掲げております。
                  </p>
              </div>
                <DrawerBody 
                overflow='scroll'
                className="
                bg-white
                w-11/12 mx-auto 
                shadow-2xl rounded-md
                overflow-auto
                "
                >
                  <div className='
                  bg-white mx-auto px-5 py-5
                  rounded-md
                  '
                  >
                      <div className="
                      bg-tell01 bg-cover bg-top
                      w-full md:w-8/12 h-auto mx-auto 
                      rounded-md
                      ">

                        {/* マスク */}
                        <div className="
                        overflow-hidden bg-fixed bg-slate-600/60
                        bottom-0 left-0 right-0 top-0 h-full w-full 
                        rounded-md
                        "
                        >
                          <Link 
                          href="/contact/"
                          className="
                          w-full py-6 md:py-8
                          flex flex-col justify-center gap-3 md:gap-5
                          hover:bg-sub-color/10 text-slate-600
                          transition-all duration-500
                          "
                          >
                              
                              <div className='flex flex-col justify-center items-center text-white'>
                                  <p className="text-base md:text-lg text-center font-bold">お気軽にご相談ください</p>
                                  {/* <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold">CONTACT</p> */}
                              </div>
                              

                              
                              <div className="text-center text-white text-xs md:text-base font-bold">
                                  <p>梱包から配送まで</p>
                                  <p>エムパッケージにお任せください。</p>
                              </div>
                            

                              
                              {/* 電話お問い合わせ */}
                              <div className="text-center text-white text-xxs md:text-sm lg:text-lg">
                                  <p>お急ぎの方は、電話でお問い合わせ</p>
                                  <p className="text-base lg:text-lg font-semibold">048-287-8055</p>
                                  <p>平日 9:00 ~ 17:30</p>
                              </div>

                              {/* 問い合わせボタン */}
                              <div className="
                              flex justify-center items-center mx-auto h-[2.5rem] md:h-[3rem]
                              text-white text-sm md:text-base lg:text-xl font-bold
                              bg-sub-color border border-sub-color rounded-full shadow-md
                              ">
                                <div className="flex justify-center items-center">
                                  <HiMail className="bg-white border-white rounded-full text-sub-color p-1 md:p-0.5 m-1 md:m-2 text-xxxl"/>
                                  <p className="px-6 py-2 text-white text-xs md:text-sm font-semibold">お問い合わせ</p>
                                  <HiArrowRight className="text-white text-lg md:text-xxl pr-1" />
                                </div>
                                  
                              </div>

                          </Link>                          
                        </div>                        
                      </div>


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
                              <Link href="/service/" onClick={onClose}
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
                              <Link href="/equipment/" onClick={onClose}
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
                              <Link href="/company/" onClick={onClose}
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
                              <Link href="/news/" onClick={onClose}
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
                              <Link href="/contact/" onClick={onClose}
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
                                <Link href="/privacy/" onClick={onClose}>
                                  <p className='text-xs text-sub-color'>プライバシーポリシー</p>
                                </Link>
                                <small className='text-xxs text-primary-color'><span>©</span>&nbsp;株式会社エムパッケージ</small>
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