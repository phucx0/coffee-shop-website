"use client"
import { NotificationProps } from "@/interface"
import React, { useEffect, useState } from "react"
import { useNotification } from "@/hook/useNotification"
import '@/style/notification.css'


export const Notification = ({id ,type, content} : NotificationProps) => {
    const [close, setClose] = useState(false)
    const { remove } = useNotification();

    return(
        <div className="w-full z-30 pointer-events-none top-0 sm:pr-5">
            <div className={`notification-inner ${close ? 'close' : ''}`}
                // onAnimationEnd={handleAnimationEnd}
            >
                <div className="w-[90%] sm:w-[50%] lg:w-[30%] xl:w-[20%]  bg-white backdrop-blur-sm border-[1px] border-gray p-2 rounded-lg">
                    <div className="font-bold text-base">
                        {type}
                    </div>
                    <div className="text-sm">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}