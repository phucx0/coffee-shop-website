"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"

import { HeroUIProvider } from "@heroui/react";
import {ToastProvider} from "@heroui/toast";
import { persistor, store } from '@/lib/redux/store'
import { PersistGate } from "redux-persist/integration/react"

export const Providers = ({children} : {children : ReactNode}) => {
    return(
        <HeroUIProvider>
            <ToastProvider placement={"top-right"} toastOffset={"top-right".includes("top") ? 60 : 0}/>
            {children}
        </HeroUIProvider>
    )
}