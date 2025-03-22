"use client"
import {Checkbox} from "@/components"
import { useState } from "react"
export const PaymentMethod = () => {
    const [open, setOpen] = useState(false) // text
    return(
        <>
            <div className="text-base font-bold">
                Phương thức thanh toán
            </div>
            <div className="border-[1px] rounded-lg m-2 p-2 divide-y-2 divide-gray-100 ">
                <div className="py-1">
                    <Checkbox 
                        checked={false} 
                        onChange={() => setOpen(false)} // text
                        label="Thanh toán bằng Banking"
                    />
                </div>
                <div className="pt-1">
                    <Checkbox 
                        checked={false} 
                        onChange={() => setOpen} // text
                        label="Thanh toán bằng tiền mặt"
                    />
                </div>
            </div>
        </>
    )           
}