'use client'

import Image from "next/image";

export default function BackImageTell01() {
    return (
        <Image 
            alt="contact"
            src="/img/tell01.jpg"
            className="object-cover position-center rounded-md bg-gray-600/50"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />        
    );
  }