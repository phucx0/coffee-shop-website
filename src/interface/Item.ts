interface Item {
    ItemId: string
    ItemName: string
    ItemType: "coffee" | "drink" | "cake"
    ItemExist: boolean;
    ItemOverview: string;
    ItemImage: string[];
    ItemTags: string[] |  null
}

export interface CupSize {
    size: "S" | "M" | "L"
    price: number
}

export interface Coffee extends Item{
    ItemType: "coffee"
    sizes: CupSize[]
}

export interface Drink extends Item{
    ItemType: "drink"
    sizes: CupSize[]
}

export interface Cake extends Item{
    price: number
}


export type Product = Coffee | Drink | Cake
