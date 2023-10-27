// "use client";

import Image  from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
      where:{
        discountPercentage:{
          gt:0,
        },
      },

  });
  return (
    <div className="">
      <Image 
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 50% de desconto esse mês"
      />
      <div className="mt-8 px-5">
      <Categories/>
      </div>
      
      <div className="mt-8 px-5">
        <ProductList products={deals} />
      </div>


    </div>
    );
  
  
}
