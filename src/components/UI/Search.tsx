import { Icons } from "@/constants"
import Image from "next/image"

export const SearchInput = () => {
    return(
        <div className="flex flex-row items-center bg-white p-2 rounded-lg">
            <input 
                className="flex-1 border-none outline-none text-sm text-black" 
                type="text" 
                placeholder="Tìm sản phẩm"
            />
            <div>
                <Image
                    className="cursor-pointer"
                    src={Icons.SearchIcon}
                    alt="search"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}