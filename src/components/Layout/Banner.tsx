import {BannerSwiper} from "@/components";
export const Banner = () => {
    return(
        <div className="relative">
            <div className="w-full bg-secondary-300 flex items-center justify-center">
                <div className="w-[100%] overflow-hidden ">
                    <div className="object-contain ">
                        <BannerSwiper/>
                    </div>
                </div>
                <div className="z-10 text-white pointer-events-none absolute w-full h-full backdrop-brightness-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="font-black text-3xl sm:text-7xl">
                            <p>Welcome to</p>
                            <p>Our Coffee Shop</p>
                        </div>
                        <div className="text-xs mt-5 sm:text-lg">
                            Cà phê – Hương vị của đam mê, tinh hoa đất trời Việt
                        </div>
                        <div className="mt-5">
                            <div className="text-xs sm:text-base pointer-events-auto cursor-pointer bg-primary-300 text-black px-4 py-2 inline-block">
                                Tìm hiểu thêm
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}