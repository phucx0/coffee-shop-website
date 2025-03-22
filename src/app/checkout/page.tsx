"use client"
import { AddressForm, MainLayout, PaymentMethod, VoucherFrom } from "@/components"
import { CartItem } from "@/interface/Cart"
import Image from "next/image"
import { useCart } from "@/hook/useCart"

const cartItem = (info : CartItem) => {
    return(
        <div className="flex items-center p-2 bg-white rounded-lg">
            <div className="flex flex-1 ">
                <div className="relative">
                    <Image
                        src={'/images/coffee.png'}
                        alt="coffee"
                        width={70}
                        height={70}
                        className="rounded-lg overflow-hidden"
                    />
                    <div className="absolute bottom-0 right-0 -translate-x-1 -translate-y-1 text-xs bg-primary-300 rounded-full w-6 h-6 flex items-center justify-center font-semibold">
                        x {info.Qty}
                    </div>
                </div>
                <div className="px-2">
                    <div>
                        <strong>{info.ItemName}</strong> - <strong>{info.CupSize}</strong> 
                    </div>
                    <div className="text-gray-500 text-xs">
                        Topping, lượng đường ..
                    </div>
                </div>
            </div>
            <div className="p-2 text-sm font-bold">
                {info.price.toLocaleString("vi-VN")} đ 
            </div>
        </div>
    )
}

export default function CheckoutPage() {
    const {CartItems} = useCart()
    return (
        <div className="bg-white w-full h-screen">
            <MainLayout
                flexDirection="column"
            >
                    <div className="text-center text-xl font-semibold">
                        Thanh toán 
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[3fr,2fr] gap-4">
                        <div className="border rounded-lg bg-gray-50">
                            <div className="font-bold p-2 bg-primary-300">Món đã chọn</div>
                            <div className="space-y-2 p-2">
                                {CartItems.map((item, index) => (
                                    <div key={index}>{cartItem (item)}</div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="border rounded-lg p-2">
                                <AddressForm/>
                                <PaymentMethod/>
                            </div>
                            <div className="border rounded-lg p-2">
                                <VoucherFrom/>
                                {/* Nút thanh toán */}
                            </div>
                        </div >
                    </div>
                    <div>
                        {/* Tiếp tục mua */}
                    </div>
            </MainLayout>
        </div>
    )
}