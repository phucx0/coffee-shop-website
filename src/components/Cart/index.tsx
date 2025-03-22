"use client"
import { Icons } from "@/constants"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCart } from "@/hook/useCart"
import { CartItemCard } from "./CartItemCard"

import {addToast, Button} from "@heroui/react";

import "@/style/Cart.css"

export default () => {
    const router = useRouter()
    const {CartItems, openCartTab, closeCartTab, isCartOpen} = useCart()
    const totalPrice = () => {
        return CartItems.reduce((total, item) => total + item.price*item.Qty, 0)
    } 
    const nagivate = () => {
        if(CartItems.length <= 0) {
            addToast({
                title: "Thông báo",
                description: "Vui lòng chọn ít nhất 1 sản phẩm",
                color: "default"
            })
            return
        }
        router.push('/checkout')
    }

    return(
        <div className="z-20 fixed top-0 left-0 w-full h-full pointer-events-none card-shadow">
            {isCartOpen ? (
                <div className="relative Cart-container w-full h-full pointer-events-none "> 
                    <div className="CartInner  sm:w-[450px] sm:h-[600px] absolute sm:bottom-0 sm:right-0 sm:m-3 pointer-events-auto rounded-lg overflow-hidden shadow-md flex flex-col">
                        <div className="flex items-center justify-between bg-primary-300 p-3">
                            <div className="text-base font-bold">
                                Giỏ hàng của bạn
                            </div>
                            <div className="cursor-pointer"
                                onClick={closeCartTab}
                            >
                                <Image
                                    src={Icons.CloseIcon}
                                    alt="close icon"
                                />
                            </div>
                        </div>
                        <div className=" flex flex-col flex-1 overflow-y-auto  scroll-smooth">
                            <div className="bg-white  flex-1">
                                <div className="flex flex-col gap-4 p-2">
                                    <div className="text-base font-bold">
                                        Các sản phẩm
                                    </div>
                                    {CartItems.length > 0 ? (
                                        <div className="flex flex-col gap-2 p-2">
                                            {CartItems.map((item, index) => (<CartItemCard key={index} {...item}/>))}
                                        </div>
                                    ) : (
                                        <div className="text-xs text-secondary-200/40">Chưa có sản phẩm nào!</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t-[1px] border-gray-200 bg-white text-sm">
                            <div className="flex items-center justify-between bg-white py-2">
                                <div className="font-bold">
                                    Tổng
                                </div>
                                <strong>{totalPrice().toLocaleString("vi-VN")} đ</strong>
                            </div>
                            {/* <div className="bg-primary-300 p-2 rounded-3xl text-center cursor-pointer"
                                onClick={nagivate}
                            >
                                Thanh toán
                            </div> */}
                            <Button
                                className="bg-primary-300 p-2 rounded-3xl text-center cursor-pointer w-full"
                                onClick={nagivate}
                            >
                                Thanh toán
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative w-full h-full pointer-events-none">
                    <div className="cursor-pointer absolute bottom-0 right-0 m-5 pointer-events-auto bg-primary-300 rounded-full w-10 h-10 shadow-sm
                    "
                        onClick={openCartTab}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={Icons.CartIcon}
                                alt="cart icon"
                            />
                            <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {CartItems.length}
                            </div>
                        </div>
                    </div>
                    {/* <Button 
                        className="cursor-pointer absolute bottom-0 right-0 m-5 pointer-events-auto bg-primary-300 rounded-full w-10 h-10 shadow-sm"
                        onPress={openCartTab}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={Icons.CartIcon}
                                alt="cart icon"
                            />
                            <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {CartItems.length}
                            </div>
                        </div>
                    </Button> */}
                </div>
            )}
        </div>
    )
}