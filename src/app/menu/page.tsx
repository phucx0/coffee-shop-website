"use client"

import { Loading, MenuProductList } from "@/components"
import { useEffect, useState } from "react"
import { MenuSideBar } from "@/components"
export default () => {
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })

    if(isLoading){
        return(
            <Loading/>
        )
    }

    return(
        <MenuProductList/>
    )
}