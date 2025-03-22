import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Product} from "@/interface/Item"

interface ItemState{
    Items: Product[]; // Item giúp gộp cả 3 interface
    selectedItem: Product | null
}
const initialState: ItemState = {
    Items : [],
    selectedItem: null
}
export const ItemsSlice = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<Product[]>) => {
            if (JSON.stringify(state.Items) !== JSON.stringify(action.payload)) {
                state.Items = action.payload; // Chỉ cập nhật nếu khác nhau
            }
        },
        selectItem: (state, action: PayloadAction<Product | null>) => {
            state.selectedItem = action.payload
        },
    }
})

export const { setItems, selectItem} = ItemsSlice.actions
export default ItemsSlice.reducer