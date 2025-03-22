"use client"
import { useState } from "react";

export function useCheckboxGroup(defaultToppings: { name : string}[]) {
    const initialState = defaultToppings.reduce((acc, item) => {
        acc[item.name] = false; // Tạo object từ danh sách topping
        return acc;
    }, {} as Record<string, boolean>);

    const [checkedItems, setCheckedItems] = useState(initialState);

    const toggleCheckbox = (name: string) => {
        setCheckedItems((prev) => ({
        ...prev,
        [name]: !prev[name],
        }));
    };

    const selectedItems = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    
    return { checkedItems, toggleCheckbox, selectedItems};
}
