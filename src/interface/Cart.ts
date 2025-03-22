import { Product } from "./Item";

export type CartItem = Product & {
    CartItemId : string
    IceLevel: number
    SugarLevel: number
    CupSize: string | null,
    ItemNote: string | null
    price: number,
    Qty: number; // số lượng 
    [key: string | number]: any;
}