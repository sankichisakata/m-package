import { Button } from '@chakra-ui/react';
import Link from 'next/link';


const MenuList = () => {
    return(
        <div className='py-10'>
            <nav className='flex flex-col justify-center items-center'>
                <ul className="
                text-xl 
                flex flex-col gap-8
                "
                >
                    <li>
                        <Link href="/service">
                            <p className='text-slate-100'>事業内容</p>
                        </Link>
                    </li>

                    <li>
                    <Link href="/equipment">
                        <p className='text-slate-100'>設備案内</p>
                    </Link>
                    </li>

                    <li>
                    <Link href="/company">
                            <p className='text-slate-100'>会社概要</p>
                    </Link>
                    </li>
                </ul>

                <div className='my-20'>
                    <Button variant="outlined" size="large">
                    <Link href="/contact">
                        相談する
                    </Link>
                    </Button>
                </div>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <Link href="#">
                                <p className='text-xs text-slate-100'>プライバシーポリシー</p>
                    </Link>
                    <small className='text-xs text-slate-400'>©️2023&nbsp;株式会社エムパッケージ</small>
                </div>

            </nav>
        </div>
    )
}

export default MenuList;