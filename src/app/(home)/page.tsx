"use client";

import Image  from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image 
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 50% de desconto esse mês"
      />
    </div>
  );
  
  
}
