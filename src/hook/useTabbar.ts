import { RootState } from "@/lib/redux/store"
import { useSelector, useDispatch } from "react-redux"
import {open, close} from '@/lib/redux/TabBarSlice'

export const useTabBar = () => {
    const isOpen = useSelector((state : RootState) => state.tabbar.value)
    
    const dispatch = useDispatch()
    const openTabBar = () =>  dispatch(open())
    const closeTabBar = () => dispatch(close())
    
    return {isOpen, openTabBar, closeTabBar}
}