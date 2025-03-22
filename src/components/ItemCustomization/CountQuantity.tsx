interface CountQuantityProps {
    Qty : number
    handleQuantity: (value : number) => void
}

export const CountQuantity = ({Qty, handleQuantity} : CountQuantityProps) => {
    return(
        <div className="flex items-center justify-between pt-2">
            <div className="text-sm">
                Số lượng
            </div>
            <input
                className="outline-none border-[1px] border-gray w-[50px] rounded-lg text-center"
                type="number"
                min={1}
                max={100}
                value={Qty}
                onChange={(e) => {
                    handleQuantity(Number(e.target.value))
                }}
            />
        </div>
    )
}