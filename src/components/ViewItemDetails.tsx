"use client"
import { Section } from "./Section"
import { Product } from "@/interface/Item"
import Image from "next/image"

import { getPrice } from "@/lib/helper/getPrice"
import { useItems } from "@/hook/useItems"

export const ViewItemDetails = ({ item }: { item: Product }) => {
    const {handleSelectItem} = useItems()

    return(
        <Section>
            <div className="grid sm:grid-cols-[2fr,1fr]">
                <div className="flex gap-4 p-2 border rounded-2xl">
                    <div className="flex-shrink-0">
                        <img 
                            src={'/images/coffee.png'} 
                            alt={item.ItemName} 
                            className="w-[125px] h-[125px] sm:w-[150px] sm:h-[150px] rounded-lg border"
                        />
                    </div>
                    <div className="flex flex-col flex-grow justify-between gap-2">
                        {/* Nội dung sản phẩm */}
                        <div className="space-y-1">
                            <p className="text-bodyLarge font-bold">{item.ItemName}</p>
                            <p className="text-bodySmall text-gray-600">{item.ItemOverview}</p>
                            <p className="text-bodyLarge font-bold">{getPrice(item, 'S').toLocaleString('vi-VN')}đ</p>
                        </div>

                        {/* Nút thêm vào giỏ hàng */}
                        <button 
                            className="bg-primary-300 text-bodyMedium px-2 py-1   w-fit rounded-lg border"
                            onClick={() => handleSelectItem(item)}
                        >
                            <div>Thêm vào giỏ</div>
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    )
}