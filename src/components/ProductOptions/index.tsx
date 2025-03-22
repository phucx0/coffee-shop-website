"use client"
import { useItems } from "@/hook/useItems"
import { useEffect, useState } from "react"

export const ProductOptions = () => {
    const {selectedItem, handleSelectItem} = useItems() 
    const [isOpen, setOpen] = useState(true)

    useEffect(() => {
        setOpen(true)
    }, [selectedItem])
    return (
        <div className={`absolute top-0 left-0 w-full h-full ${isOpen ? 'backdrop-brightness-50  pointer-events-auto' : 'pointer-events-none'}`}
            onClick={() => setOpen(true)}
        >
            <div className="relative h-full w-full ">
                <div className={`absolute top-0 right-0 h-full bg-white w-[100%] md:w-[20%] pointer-events-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300`}>
                    <div
                        onClick={() => setOpen(false)}
                    >close</div>
                </div>
            </div>
        </div>
    )
}