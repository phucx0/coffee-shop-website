"use client"
import { createSlice } from "@reduxjs/toolkit";
export const TabBarSlice = createSlice({
    name: 'tabbar',
    initialState: {
        value: false
    },
    reducers: {
        open: (state) => {
            state.value = true
        },
        close: (state) => {
            state.value = false
        },
        toggle: (state) => {
            state.value = !state.value
        }
    }
})

export const { open, close, toggle } = TabBarSlice.actions;
export default TabBarSlice.reducer