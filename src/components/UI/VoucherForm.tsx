import {Input} from "@/components"
export const VoucherFrom = () => {
    return(
        <div>
            <div className="text-base font-bold">
                Áp dụng mã giảm giá
            </div>
            <div className="p-2">
                <Input placeholder="Nhập mã giảm giá"/>
            </div>
        </div>
    )
}