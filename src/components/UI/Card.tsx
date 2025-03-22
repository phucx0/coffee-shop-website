"use client"
import { useEffect, useState } from "react"

import Image from "next/image"
import { Icons } from "@/constants"
import { useItems } from "@/hook/useItems"

import { Product} from "@/interface/Item"
import { getPrice } from "@/lib/helper/getPrice"

import { useRouter } from "next/navigation"

import '@/style/Card.css'

export const Card = (item: Product) => {
    const router = useRouter()
    const sizeDefault = "S"
    const [price, setPrice] = useState<number>(0)
    const {handleSelectItem} = useItems()

    const handleViewDetail = (id: string) => {
        router.push(`/items/${id}`); 
    };

    useEffect(() => {
        const a = getPrice(item, 'S')
        setPrice(a)
    }, [item])

    return(
        <div className="flex flex-col  bg-white border overflow-hidden rounded-2xl shadow-100"
        >
            {/* Hình ảnh sản phẩm */}
            <div className="w-full aspect-[1/1] card-img px-2 pt-2">
                <div className="relative w-full h-full ">
                    <img 
                        src={'/images/coffee.png'} 
                        alt={item.ItemName} 
                        className="w-full h-full rounded-lg border"
                    />
                    <div className="absolute w-full h-full backdrop-brightness-50  card-details flex items-center justify-center rounded-lg">
                        <button className="card-details-btn border px-4 py-2 text-bodyMedium text-gray-300 hover:text-white hover:border-white transition duration-300"
                            onClick={() => handleViewDetail(item.ItemId)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-grow justify-between p-2">
                {/* Nội dung sản phẩm */}
                <div className="space-y-1">
                    <div className="space-x-1 text-bodyLarge cursor-pointer block overflow-hidden text-ellipsis line-clamp-2" 
                        onClick={() => handleViewDetail(item.ItemId)}
                    >
                        <span className="font-bold transition-colors overflow-hidden">
                            {item.ItemName}
                        </span>
                        <span>
                            {item.ItemType !== "cake" && (
                                <span className="text-bodyMedium text-gray-600">({sizeDefault})</span>
                            )}
                        </span>
                    </div>

                    <p className="text-bodyLarge">
                        {price.toLocaleString('vi-VN')}đ
                    </p>
                </div>

                {/* Button thêm vào giỏ hàng */}
                <button 
                    className="bg-primary-300 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all flex-shrink-0"
                    onClick={() => handleSelectItem(item)}
                >
                    <Image src={Icons.AddIcon} alt="Add" width={20} height={20} />
                </button>
            </div>

        </div>
    )
}