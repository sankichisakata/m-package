'use client'

import { useState } from 'react';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function USP({ children }) {

const [showHeader, setShowHeader] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    const visible = currPos.y > prevPos.y;
    setShowHeader(visible);
  }, []);

return(
      <header className={`fixed top-0 z-10 bg-opacity-75 w-full duration-700 overscroll-contain
        ${showHeader ? "" : "translate-y-[-100%]"}`}>
       { children }
      </header>
  )
}