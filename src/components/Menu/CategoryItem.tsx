"use client"
import { ArrowDownCircleIcon, ChevronDownIcon} from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { useState } from "react"

type CategoryItemType = {
    categoryName: string
    items: string[]
}
export const CategoryItem = ({categoryName, items} : CategoryItemType) => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(true)
    const handleNavigate = (categoryName : string, item: string) => {
        router.push(`/menu/${categoryName.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`)
    }
    return (
        <>
            <div className="flex items-center justify-between font-semibold text-lg pb-4 border-b-1 bg-white">
                <p>
                    {categoryName}
                </p>
                <ChevronDownIcon 
                    className={`size-6 cursor-pointer ${!isOpen && 'rotate-180'} transition-all duration-300`}
                    onClick={() => setOpen(!isOpen)}
                />
            </div>
            <div className="overflow-hidden">
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 max-h-[1000px] opacity-100' : '-translate-y-full max-h-0 opacity-0'}`}>
                    {items.map((item, index) => (
                        <div
                            key={index} 
                            className="group flex items-center gap-2 md:block md:space-y-2 cursor-pointer" 
                            onClick={() => handleNavigate(categoryName, item)}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={'/images/coffee.png'}
                                    alt="coffee"
                                    className="w-[100px] aspect-auto md:w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <p className="text-bodyLarge font-semibold text-gray-600 pb-2">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}