'use client'

import { useInView } from 'react-intersection-observer';

const FadeInBack = ({ children }) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-100px', // ref要素が現れてから⚪︎⚪︎px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[-10%]"} duration-[1000ms] w-full`}
        >
            {children}
        </div>
    )
}

export default FadeInBack;