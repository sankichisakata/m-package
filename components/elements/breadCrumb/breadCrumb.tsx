"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { id: 1, name: "ホーム", href: "/" },
  { id: 2, name: "事業内容", href: "/service/" },
  { id: 3, name: "設備案内", href: "/equipment/" },
  { id: 4, name: "会社情報", href: "/company/" },
  { id: 5, name: "ニュース", href: "/news/" },
  // { id: 6, name: "ニュース詳細", href: "/news/`*`" },
  { id: 7, name: "お問い合わせ", href: "/contact/" },
  { id: 8, name: "お問い合わせ完了", href: "/contact/bird/" },
  { id: 9, name: "お問い合わせ失敗", href: "/contact/failed/" },
  { id: 10, name: "プライバシーポリシー", href: "/privacy/" },
];

export default function BreadCrumb() {
  const pathname = usePathname();
  const homePage = pathname === "/";
  const notFound = pathname === "/404.html/";

  if (homePage) return null;
  if (notFound) return null;

  return (
    <nav
      className="
        w-11/12 lg:w-10/12
        mx-auto pt-28 md:pt-36 lg:pt-40
        "
    >
      <ul
        className="
            flex 
            text-xxs md:text-xs lg:text-sm font-semibold
            "
      >
        <li
          className="
                flex justify-center items-center
                "
        >
          <Link href="/">TOP</Link>
        </li>
        <span className="mx-2 md:mx-3 lg:mx-4">|</span>
        {navigation.map(({ href, name, id }) => (
          <li key={id}>
            <span className={pathname === href ? "visible" : "hidden"}>
              {name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// "use client";

// import { notFound } from 'next/navigation';
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { SlideInLeft } from "../observer/slideInLeft";
// import { client, getList, getDetail } from '@/components/elements/libs/microcms'

// type Props = {
//     postId: { id: string }
//     params: { [key: string]: string | string[] | undefined }
//   }

// export async function generateStaticParams() {
//     const { contents } = await getList();

//     return contents.map((post) => ({
//         postId: post.id,
//     }));
// }

// export default async function BreadCrumb({ params }: { params: { postId: string } }) {

//     const post = await getDetail(params.postId);
//     const pathname = usePathname();
//     const homePage = pathname === '/'

//     const navigation = [
//         { id: 1, name: "ホーム", href: "/" },
//         { id: 2, name: "事業内容", href: "/service" },
//         { id: 3, name: "設備案内", href: "/equipment" },
//         { id: 4, name: "会社情報", href: "/company" },
//         { id: 5, name: "ニュース", href: "/news" },
//         { id: 6, name: "ニュース詳細", href: `"/news/[${post}]"` },
//         { id: 7, name: "お問い合わせ", href: "/contact" },
//         { id: 8, name: "お問い合わせ完了", href: "/contact/bird" },
//         { id: 9, name: "お問い合わせ失敗", href: "/contact/failed" },
//         { id: 10, name: "プライバシーポリシー", href: "/privacy" },
//     ];

//     if(homePage)return null

//     return(
//         <nav className="
//         w-11/12 lg:w-10/12
//         mx-auto mt-28 md:mt-36 lg:mt-40
//         ">
//             <ul className="
//             flex
//             text-xxs md:text-xs lg:text-sm font-semibold
//             ">
//                 <li className="
//                 flex justify-center items-center
//                 ">
//                     <Link href="/">
//                     TOP
//                     </Link>
//                 </li>
//                 <span className="mx-2 md:mx-3 lg:mx-4">|</span>
//                 {navigation.map(({ href, name, id }) => (
//                 <li key={id}>
//                     <span
//                     className={
//                         pathname === href
//                         ? "visible"
//                         : "hidden"
//                     }
//                     >
//                     {name}
//                     </span>
//                 </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }
