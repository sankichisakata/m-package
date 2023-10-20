"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SlideInLeft } from "../observer/slideInLeft";

const navigation = [
    { id: 1, name: "ホーム", href: "/" },
    { id: 2, name: "事業内容", href: "/service" },
    { id: 3, name: "設備案内", href: "/equipment" },
    { id: 4, name: "会社概要", href: "/company" },
    { id: 5, name: "ニュース", href: "/news" },
    { id: 6, name: "お問い合わせ入力画面", href: "/contact" },
    { id: 7, name: "プライバシポリシー", href: "/privacypolicy" },
  ];

export default function BreadCrumb () {
    const pathname = usePathname();
    const homePage = pathname === '/'

    if(homePage)return null

    return(
        <SlideInLeft>
        <nav className="
        w-full lg:w-11/12
        mx-auto mt-20 md:mt-24 lg:mt-36
        px-4 md:px-8 py-4
        ">
            <ul className="flex text-xs md:text-sm lg:text-lg">
                <li>
                <Link href="/">ホーム</Link>
                </li>
                <span className="mx-2 md:mx-3 lg:mx-4">|</span>
                {navigation.map(({ href, name, id }) => (
                <li key={id}>
                    <span
                    className={
                        pathname === href
                        ? "visible"
                        : "hidden"
                    }
                    >
                    {name}
                    </span>
                </li>
                ))}
            </ul>
        </nav>
        </SlideInLeft>
    )
}