import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setItems, selectItem } from "@/lib/redux/ItemSlice";
import { Product } from "@/interface/Item";

export const useItems = () => {
    const dispatch = useDispatch()
    const Items = useSelector((state : RootState) => state.items.Items)
    const selectedItem = useSelector((state : RootState) => state.items.selectedItem)

    const updateItems = (newItems : Product[]) => {
        dispatch(setItems(newItems))
    }
    
    const handleSelectItem  = (newItem : Product | null) =>  dispatch(selectItem(newItem))
    
    return {Items, selectedItem, updateItems, handleSelectItem}
}
