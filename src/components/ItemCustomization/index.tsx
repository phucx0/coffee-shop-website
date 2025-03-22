"use client"
import { useEffect, useState } from "react";
import { ToppingList } from "./ToppingList";
// Component childs 
import { CountQuantity } from "./CountQuantity";
import { OptionSelector } from "./OptionSelector";
import { ItemNote } from "./ItemNote";

import { GenerateID } from "@/lib/helper/generateID";
import { getPrice } from "@/lib/helper/getPrice";

import { CartItem } from "@/interface/Cart"

import { useCart } from "@/hook/useCart";
import { useItems } from "@/hook/useItems";
import { useNotification } from "@/hook/useNotification";
import {addToast, Button} from "@heroui/react";

import '@/style/DrinkOptions.css'
import { Icons } from "@/constants";
import Image from "next/image";

type Size = "S" | "M" | "L" | null
type Level = 0 | 50 | 100 


export default () => {
    const {selectedItem, handleSelectItem} = useItems() 
    const {add} = useNotification()
    const [sugarLevel, setSugarLevel] = useState<Level>(50)
    const [iceLevel, setIceLevel] = useState<Level>(50)
    const [size, setSize] = useState<Size>(null)
    const [quantity , setQuantity ] = useState(1)
    const [price, setPrice] = useState(0)
    const [note, setNote] = useState<string | null>(null)
    const {addToCart} = useCart()
    const HandleSugarLevel = (level : Level) => {
        if(level === sugarLevel) return
        setSugarLevel(level)
    }

    const handleIceLevel = (level : Level) => {
        if(level === iceLevel) return
        setIceLevel(level)
    }

    const handleSize = (newSize : Size) => {
        if(newSize === size) return
        setSize(newSize)
    }
    const handleQuantity = (number : number) => {
        setQuantity(number)
    }

    const handleSaveNote = (value: string | null) => {
        setNote(value)
    }

    const handleCancle = () => {
        handleSelectItem(null)
    }

    const handleAddToCart = () => {
        if(quantity <= 0) {
            add({type:"error", content: "Hãy chọn ít nhất 1 ly"})
        }
        else {
            if(selectedItem){
                if(price === 0 && selectedItem?.ItemType !== "cake"){
                    addToast({
                        title: "Thông báo",
                        description: "Vui lòng chọn kích cỡ ly",
                        color: 'default'
                    })
                    return
                }

                const item : CartItem = {
                    CartItemId: GenerateID(),
                    IceLevel: iceLevel,
                    SugarLevel: sugarLevel,
                    CupSize: size || null,
                    ItemNote: note,
                    price: price,
                    Qty: quantity,
                    ...selectedItem
                }

                console.log("Item: ",item)
                addToCart(item)
                addToast({
                    title: "Thông báo",
                    description: "Đã thêm vào giỏ hàng",
                    color: 'default'
                })
                handleSelectItem(null)
            }
        }
    }

    useEffect(() => {
        if(selectedItem && size || selectedItem && quantity){
            const newPrice = getPrice(selectedItem, size);
            setPrice(newPrice * quantity)
        }
    }, [size, quantity])

    if (!selectedItem) return null

    return(
        <div className="z-20 fixed right-0 bottom-0 h-screen w-full pointer-events-none">
            <div className="relative w-full h-full ItemCustomization-container pointer-events-none">
                <div className="bg-[#ffffff] ItemCustomization-inner pointer-events-auto absolute sm:bottom-0 sm:right-0 sm:m-3 card-shadow  tablet:w-[40%] tablet:mr-5 laptop:w-[35%] desktop:w-[20%] rounded-lg overflow-hidden flex flex-col">
                    <div className="p-2 flex items-center justify-between bg-primary-300">
                        <div className="font-bold text-base">
                            Chi tiết nước uống
                        </div> 
                        <div className="text-black cursor-pointer"
                            onClick={handleCancle}
                        >
                            <Image 
                                src={Icons.CloseIcon}
                                alt="close"
                            />
                        </div>
                    </div>
                    <div className="font-bold text-base p-2">
                        {selectedItem.ItemName}
                    </div>
                    <div className="overflow-x-hidden flex-1">
                        <div className="flex flex-col gap-2 p-2">
                            <div className="flex flex-col gap-2 divide-y divide-gray-100">
                                {/* Drink Name */}

                                {selectedItem.ItemType !== "cake" && (
                                    <>
                                        <OptionSelector
                                            label="Lượng đường"
                                            options={[
                                                {label: "0%", value: 0},
                                                {label: "50%", value: 50},
                                                {label: "100%", value: 100}
                                            ]}
                                            selected={sugarLevel}
                                            onSelect={(value) => HandleSugarLevel(value as Level)}
                                        />

                                        <OptionSelector
                                            label="Lượng đá"
                                            options={[
                                                {label: "0%", value: 0},
                                                {label: "50%", value: 50},
                                                {label: "100%", value: 100}
                                            ]}
                                            selected={iceLevel}
                                            onSelect={(value) => handleIceLevel(value as Level)}
                                        />

                                        <OptionSelector
                                            label="Size"
                                            options={[
                                                {label: "S", value: "S"},
                                                {label: "M", value: "M"},
                                                {label: "L", value: "L"}
                                            ]}
                                            selected={size}
                                            onSelect={(value) => handleSize(value as Size)}
                                        />
                                        {/* Topping */}
                                        <ToppingList/>
                                    </>
                                )}

                                {/* quantity */}
                                <CountQuantity Qty={quantity} handleQuantity={handleQuantity}/>
                            </div>
                            {/* Note */}
                            <ItemNote saveItemNote={handleSaveNote}/>
                        </div>
                    </div>
                    <div className="border-t-[1px] border-gray-200 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-base">Giá</div>
                            <div className="text-base font-bold">
                                {(price.toLocaleString())} VND
                            </div>
                        </div>
                        <Button
                            className="w-full rounded-2xl p-1 text-center bg-primary-300 cursor-pointer"
                            onPress={handleAddToCart}
                        >
                            Thêm vào giỏ 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}