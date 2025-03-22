import { TrashIcon, PlusIcon, MinusIcon} from '@heroicons/react/24/solid'
import { CartItem } from "@/interface/Cart"
import Image from "next/image"
import { useCart} from '@/hook/useCart'

export const CartItemCard = (item : CartItem) => {
    const {removeFromCart, updateItemQuantity} = useCart()
    return(
        <div className="flex flex-row items-center justify-between border-[1px] rounded-lg ">
            <div className="flex-1 flex flex-row border-r-[1px]  p-2">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={'/images/coffee.png'}
                        alt="Coffee"
                        width={70}
                        height={70}
                    />
                    
                </div>
                <div className="space-y-2 pl-2">
                    <div>
                        <div className="text-sm xs:text-base font-bold flex items-center space-x-1">
                            <span>
                                {item.ItemName}
                            </span>
                            {item.ItemType !== "cake" && (
                                <span>({item.CupSize})</span>
                            )}
                        </div>
                        <div className="text-xs text-gray-500">
                            {item.DrinkDetails} 
                        </div>
                    </div>
                    
                    <div className="text-xs flex items-center">
                        {item.price.toLocaleString('vi-VN')} x {item.Qty} = {(item.price * item.Qty).toLocaleString('vi-VN')} đ 
                    </div>

                    <div className="flex items-center gap-2">
                        <MinusIcon className='size-4 bg-primary-300 '
                            onClick={ () => updateItemQuantity({CartItemId: item.CartItemId, value: -1})}
                        />
                        <div className='text-xs'>{item.Qty}</div>
                        <PlusIcon className='size-4 bg-primary-300 '
                            onClick={ () => updateItemQuantity({CartItemId: item.CartItemId, value: 1})}
                        />
                    </div>
                </div>
            </div>
            <div className='cursor-pointer p-2'
                onClick={() => removeFromCart(item.CartItemId)}
            >
                <TrashIcon className='size-6 text-red-600'/>
            </div>
        </div>
    )
}