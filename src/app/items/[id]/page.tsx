"use client"
import { Section, ViewItemDetails} from "@/components"
import { useItems } from "@/hook/useItems"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ItemDetails({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const params = React.use(paramsPromise); // Unwrap Promise
    const {Items} = useItems()
    
    useEffect(() => {
        console.log("Items: ", Items)
    }, [Items])
    
    const item = Items.find((item) => item.ItemId === params.id)
    
    if (!params.id) {
        return <p>Đang tải...</p>;  // Nếu chưa có id từ URL
    }

    if (!item) {
        return <p>Không tìm thấy sản phẩm</p>;  // Nếu không tìm thấy item trong Items
    }
    return(
        <div className="h-screen bg-white w-full">
            {item ? (
                <ViewItemDetails item={item}/>
            ) : (
                <Section width={60}>
                    <div>Không tìm thấy sản phẩm</div>
                </Section>
            )}
        </div>
    )
}