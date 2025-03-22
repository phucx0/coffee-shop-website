"use client"
import {Input} from "@/components"
import { useState } from "react"
export const AddressForm = () => {
    const [change, setChange] = useState(false)
    const address = true
    return(
        <div className="">
            <div className="flex items-center justify-between">
                <div className="text-base font-bold">
                    Địa chỉ nhận hàng
                </div>
                <div className="text-xs"
                    onClick={() =>  setChange(!change)}
                >
                    Thay đổi
                </div>
            </div>
            {(address && change) ? (
                <div className="border-[1px] rounded-lg p-2 text-sm">
                    <div>
                        Giao đến: 111 Lê Trọng Tấn
                    </div>
                    <div>
                        Người nhận: <strong>Văn A</strong>
                    </div>
                    <div>
                        SĐT: <strong>09090001231</strong>
                    </div>
                </div>
            ): (
                <div className="m-2 text-sm flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <div>
                            Số điện thoại
                        </div>
                        <Input placeholder="Nhập số điện thoại"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            Tên người nhận
                        </div>
                        <Input placeholder="Nhập tên người nhận"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div >
                            Địa chỉ nhận hàng
                        </div>
                        <div>
                            <Input placeholder="Nhập địa chỉ"/>
                        </div>
                    </div>
                    <div className="bg-primary-300 rounded-lg text-center p-2"
                        onClick={() =>  setChange(!change)}
                    >
                        Lưu địa chỉ
                    </div>
                </div>
            )}
            
        </div>
    )
}