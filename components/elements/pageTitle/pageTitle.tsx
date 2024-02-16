"use client";

import { usePathname } from "next/navigation";
import { FadeInBack } from "../observer/fadeInBack";

export default function PageTitle (req, res) {
    const pathname = usePathname();
    const homePage = pathname === '/'

    // const pid = req.query
    // res.end(`Post: ${pid}`);
    
    const navigation = [
        { id: 1, name: "ホーム", subName: '', href: "/" },
        { id: 2, name: "事業内容", subName: 'Our Service', href: "/service/" },
        { id: 3, name: "設備案内", subName: 'Equipment', href: "/equipment/" },
        { id: 4, name: "会社情報", subName: 'Company', href: "/company/" },
        { id: 5, name: "ニュース", subName: 'News',  href: "/news/" },
        // { id: 6, name: "ニュース詳細", subName: 'News Details',  href: "/news/[postId]/" },
        { id: 7, name: "お問い合わせ", subName: 'Contact Form',  href: "/contact/" },
        { id: 8, name: "お問い合わせ完了",subName: 'Complete', href: "/contact/bird/" },
        { id: 9, name: "お問い合わせ失敗",subName: 'Failed', href: "/contact/failed/" },
        { id: 10, name: "プライバシーポリシー", subName: 'Privacy Policy',  href: "/privacy/" },
    ];

    if(homePage)return null

    return(
        <div className="
        w-full h-full
        flex justify-center items-center
        ">
            <div className="
            w-full h-[8rem] md:h-[10rem] lg:h-[16rem]
            flex justify-center items-center
            ">
                <ul className="
                w-full h-auto 
                flex flex-col justify-center items-center 
                ">
                    {navigation.map(({ href, name, subName, id }) => (
                    <li 
                    className="
                    relative 
                    w-11/12 lg:w-10/12
                    "
                    key={id}>
                            <p className={`
                                ${pathname === href
                                ? "visible"
                                : "hidden"}
                                absolute bottom-0
                                `
                            }>
                                <span className="
                                    text-slate-400/10 font-semibold
                                    text-[3rem] md:text-[4rem] lg:text-[5rem]
                                    ">
                                    {subName}
                                </span>
                            </p>

                            <p
                            className={`
                                ${pathname === href
                                ? "visible"
                                : "hidden"}
                                `
                            }>
                                <span className="
                                font-bold
                                text-sub-color text-[2rem] md:text-[2.5rem] lg:text-[3rem]
                                drop-shadow-md
                                ">
                                    {name}
                                </span>
                            </p>
                    </li>
                    ))}
                    <div className="w-11/12 lg:w-10/12 pt-3 flex items-center mx-auto">
                        <div className="flex-1 border-b-2 border-sub-color"></div>  
                    </div>
                </ul>  
            </div>
        </div>
    )
}