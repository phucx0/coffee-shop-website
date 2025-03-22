"use client";
import { useEffect, useState } from "react";
import { Notification } from "./Notification";
import { useNotification } from "@/hook/useNotification";

export const NotificationManager = () => {
    const { notifications } = useNotification();
    
    useEffect(() => {
        // console.log("noti: ", notifications);
    }, [notifications]);

    return (
        <div className="fixed pointer-events-none w-full top-0 flex flex-col gap-2 p-2 z-10">
            {notifications.map((value, index) => (
                <Notification
                    key={index}
                    id={value.id}
                    type={value.type}
                    content={value.content}
                />
            ))}
        </div>
    );
};
