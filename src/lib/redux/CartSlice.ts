"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CounterProps} from "@/interface/Counter"
import { CartItem } from "@/interface/Cart"

interface CartItemState{
    CartItems : CartItem[],
    isCartOpen: boolean,
}

const initialState : CartItemState = {
    CartItems: [],
    isCartOpen: false,
}

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem: (state, action : PayloadAction<CartItem>) => {
            const comparison : {[key : string | number] : any}= {
                ItemId: action.payload.ItemId,
                SugarLevel: action.payload.SugarLevel,
                IceLevel: action.payload.IceLevel,
                CupSize: action.payload.CupSize ?? undefined,
            }

            const existingItem = state.CartItems.find((item) =>
                Object.keys(comparison).every((key) => item[key] === comparison[key])
            )

            if(existingItem){
                existingItem.Qty += action.payload.Qty
            }else{
                
                state.CartItems.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.CartItems = state.CartItems.filter((item) => {
                // console.log(action.payload)
                return item.CartItemId !== action.payload
            })
        },
        updateQuantity: (state, action : PayloadAction<CounterProps>) => {
            state.CartItems = state.CartItems
                .map((item) =>
                item.CartItemId === action.payload.CartItemId 
                    ? {...item, Qty : item.Qty + action.payload.value} // chỉnh sửa Qty bên trong Item nếu khớp CartItemId 
                    : item // Trả về cả Item nếu không khớp CartItemId
                )
                .filter((item) => item.Qty > 0) // giữ lại các Item có Quantity > 0  
                
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        openCart: (state) => {
            state.isCartOpen = true
        },
        closeCart: (state) => {
            state.isCartOpen = false
        }
    }
})

export const {addItem, removeItem, updateQuantity, openCart, closeCart, toggleCart} = CartSlice.actions
export default CartSlice.reducer
