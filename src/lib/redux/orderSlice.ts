import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShippingInfo } from "@/interface/ShippingInfo";

interface orderState {
    order: []
    ShippingInfo: ShippingInfo | null
}

const initialState: orderState = {
    order: [],
    ShippingInfo: null
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        ShipInfo: (state, action: PayloadAction<ShippingInfo>) => {
            state.ShippingInfo === action.payload
        }
    }
})

export const {ShipInfo} = orderSlice.actions

export default orderSlice.reducer

