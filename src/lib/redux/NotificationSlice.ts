"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationProps } from "@/interface";


interface NotificationState{
    notifications: NotificationProps[]
}

const initialState: NotificationState = {
    notifications: [],
};

export const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<NotificationProps>) =>{
            state.notifications.push(action.payload)
        }, 
        removeNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter((n) => {
                return n.id !== action.payload
            });
        },
    }
})

export const {addNotification, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer