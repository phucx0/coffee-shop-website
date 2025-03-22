"use client"
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector} from "react-redux";
import { addItem, removeItem, updateQuantity, openCart, closeCart, toggleCart} from "@/lib/redux/CartSlice";
import { CounterProps } from "@/interface/Counter";
import { CartItem } from "@/interface/Cart"

export const useCart = () => {
    const dispatch = useDispatch()

    const isCartOpen = useSelector((state : RootState) => state.cart.isCartOpen)
    const CartItems = useSelector((state : RootState) =>  state.cart.CartItems)

    const addToCart = (cartItem : CartItem) => dispatch(addItem(cartItem))
    const removeFromCart = (id : string) => dispatch(removeItem(id))
    const updateItemQuantity = (payload : CounterProps) => dispatch(updateQuantity(payload))

    const openCartTab = () => dispatch(openCart())
    const closeCartTab = () => dispatch(closeCart())
    const toggleCartVisibility = () => {dispatch(toggleCart())}

    return {addToCart, removeFromCart, CartItems, updateItemQuantity, openCartTab, closeCartTab, toggleCartVisibility, isCartOpen}
}