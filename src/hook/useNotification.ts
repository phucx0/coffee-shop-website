"use client"
import { useDispatch, useSelector } from "react-redux";
import {addNotification, removeNotification} from '@/lib/redux/NotificationSlice'
import { RootState } from "@/lib/redux/store";
import { NotificationProps } from "@/interface";
import { GenerateID } from "@/lib/helper/generateID";

export const useNotification = () => {
    const dispatch = useDispatch()
    const notifications = useSelector((state: RootState) => state.notification.notifications)

    const add = (payload : Omit<NotificationProps, "id">) => {
        const id = GenerateID()
        const newPayload = {id : id, ...payload}
        dispatch(addNotification(newPayload))
        setTimeout(() => {
            remove(id);
        }, 4800); 
    }
    const remove = (id : string) => {
        if (!id) {
            console.error("ID notification không hợp lệ!");
            return;
        }
        dispatch(removeNotification(id))
    }

    return {add, remove, notifications}
}

