"use client"

import { useRouter } from "next/navigation"

export const ProductCard = (item : ProductCardType) =>{
    const router = useRouter()
    const handleNavigate = (categoryName : string) => {
        router.push(`/menu/${categoryName.toLowerCase()}/${item.productType.toLowerCase().replace(/\s+/g, "-")}/${item.productName.toLowerCase().replace(/\s+/g, "-")}`)
    }
    return(
        <div
            className="flex items-center gap-2 md:block md:space-y-2 cursor-pointer" 
            onClick={() => handleNavigate("drinks")}
        >
            <img
                src={'/images/coffee.png'}
                alt="coffee"
                className="rounded-lg w-[100px] aspect-auto md:w-full "
                />
            <p className="text-bodyLarge font-semibold text-gray-600 pb-2">{item.productName}</p>
        </div>
    )
}