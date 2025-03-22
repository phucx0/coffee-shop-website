"use client"
import { Icons } from "@/constants"
import Image from "next/image"
import {useTabBar} from "@/hook/useTabbar"
import "@/style/TabBar.css"

export const TabBar = () => {
    // const {open, toggleTabBar} = UseTabBar()
    const {closeTabBar, isOpen} = useTabBar()

    const classButton = "cursor-pointer p-2 border-b-[1px] border-primary-900 hover:bg-primary-300 hover:text-black"
    return(
        <div 
        className={`sm:hidden pointer-events-auto text-sm TabBar 
            fixed right-0 top-0 h-screen w-[70%] p-2 
            bg-secondary-300 text-primary-200 z-20 
            transition-transform duration-700 
            ease-linear
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="py-2 cursor-pointer"
                onClick={closeTabBar}
            >
                <Image
                    src={Icons.CloseIcon}
                    alt="close"
                />
            </div>
            <div className={classButton}>
                MENU
            </div>
            <div className={classButton}>
                LIÊN HỆ
            </div>
            <div className={classButton}>
                VỀ CHÚNG TÔI 
            </div>
            <div className={classButton}>
                BLOG 
            </div>
        </div>
    )
}