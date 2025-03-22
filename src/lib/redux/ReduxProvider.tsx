"use client"
import { Provider } from "react-redux"
import { ReactNode } from "react"
import {persistor, store} from '@/lib/redux/store'
import { PersistGate } from "redux-persist/integration/react"
export const ReduxProvider = ({children} : {children : ReactNode}) => {
    return(
        <Provider store={store}>
            <PersistGate loading={<div>Đang tải...</div>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}