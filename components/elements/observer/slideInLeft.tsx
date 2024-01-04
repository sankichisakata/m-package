'use client'

import { useInView } from 'react-intersection-observer';

const SlideInLeft = ({ children }) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-100px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-x-[-10%]"} duration-[1500ms] w-full`}
        >
            {children}
        </div>
    )
}

export default SlideInLeft;