"use client"
import { useEffect, useState } from "react";
import Checkbox from "../UI/Checkbox"
import { useCheckboxGroup } from "@/hook/useCheckBoxGroup"

export const ToppingList = () => {
    const Toppings = [
        {name: "Kem phô mai", price: 5000, isFree: false},
        {name: "Kem muối", price: 7000, isFree: false},
        {name: "Kem trứng", price: 9000, isFree: false}
    ]

    const [totalPrice, setTotalPrice] = useState(0)
    const { checkedItems, toggleCheckbox, selectedItems} = useCheckboxGroup(Toppings);

    const handleTotalPrice = () => {
        const total = selectedItems.reduce((sum, item) => {
            const topping = Toppings.find((t) => t.name === item)
            return sum + (topping && !topping.isFree ? topping.price : 0)
        }, 0);
        setTotalPrice(total)
    }

    useEffect(() => {
        handleTotalPrice()
    }, [checkedItems, selectedItems])

    return(
        <div className="flex flex-col pt-2">
            <div>
                Topping
            </div>
            <div className="text-sm divide-y divide-gray-100 pl-2">
                {Toppings.map((topping, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                        <div className="flex gap-1 items-center">
                        <Checkbox 
                            checked={checkedItems[topping.name] ?? false} 
                            onChange={() => toggleCheckbox(topping.name)} 
                            label={topping.name} 
                        />
                        </div>
                        <div> {topping.price} VND</div>
                    </div>
                ))}
            </div>
            {/* <div>Tổng : {totalPrice}</div>   */}
        </div>
    )
}