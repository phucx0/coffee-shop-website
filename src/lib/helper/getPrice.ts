import { Product, CupSize, Drink, Coffee} from "@/interface/Item"

export const getPrice = (item : Product, size: CupSize['size'] | null) => {
    if(item.ItemType === "cake") {
        return item.price
    }
    const sizes = (item as Coffee | Drink).sizes
    if(sizes) {
        const found = sizes.find(s => s.size === size);
        return found ? found.price : 0;
    }
    return 0
}