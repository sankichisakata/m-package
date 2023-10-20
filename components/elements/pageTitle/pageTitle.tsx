"use client";

import { usePathname } from "next/navigation";
import { FadeInBack } from "../observer/fadeInBack";

const navigation = [
    { id: 1, name: "ホーム", subName: '', href: "/" },
    { id: 2, name: "事業内容", subName: 'Our Service', href: "/service" },
    { id: 3, name: "設備案内", subName: 'Equipment', href: "/equipment" },
    { id: 4, name: "会社概要", subName: 'Company', href: "/company" },
    { id: 5, name: "ニュース", subName: 'News',  href: "/news" },
    { id: 6, name: "お問い合わせ入力画面", subName: 'Contact Form',  href: "/contact" },
    { id: 7, name: "プライバシポリシー", subName: 'Privacy Policy',  href: "/privacypolicy" },
  ];

export default function PageTitle () {
    const pathname = usePathname();
    const homePage = pathname === '/'

    if(homePage)return null

    return(
        <>
        <div className="
        w-full h-full
        flex justify-center items-center
        ">

            <FadeInBack>
            <div className="
            w-full h-[4rem] md:h-[5rem] lg:h-[6rem]
            flex flex-col justify-center items-center
            ">
                <ul className="
                relative
                w-full h-auto
                flex justify-center items-center 
                ">
                    {navigation.map(({ href, name, subName, id }) => (
                    <li key={id}>

                        <p className={
                                pathname === href
                                ? "visible"
                                : "hidden"
                            }>
                            <span className="
                                absolute
                                text-slate-400/10 text-[3rem] md:text-[4rem] lg:text-[5rem]">
                                {subName}
                            </span>
                        </p>

                        <span
                        className={
                            pathname === href
                            ? "visible"
                            : "hidden"
                        }
                        >
                            <p className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
                                {name}
                            </p>
                        </span>

                    </li>
                    ))}
                </ul>
                
            </div>
            </FadeInBack>
        </div>
        </>
    )
}