import Image from "next/image"

export const MenuCategories = () => {
    return(
        <div className="grid grid-cols-4 gap-4 sm:flex">
            <div className="flex flex-col items-center space-y-2 shadow-md rounded-lg p-2">
                <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]   rounded-full relative overflow-hidden cursor-pointer hover:scale-90 transition">
                    <Image
                        src={'/images/coffeeBanner.jpg'}
                        alt="coffee"
                        fill
                    />
                </div>
                <p className="font-semibold text-sm">Cà phê</p>
            </div>
            <div className="flex flex-col items-center space-y-2 shadow-md rounded-lg p-2">
                <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]   rounded-full relative overflow-hidden cursor-pointer hover:scale-90 transition">
                    <Image
                        src={'/images/milkTea.jpg'}
                        alt="milkTea"
                        fill
                    />
                </div>
                <p className="font-semibold text-sm">Cà phê</p>
            </div>
            <div className="flex flex-col items-center space-y-2 shadow-md rounded-lg p-2">
                <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]   rounded-full relative overflow-hidden cursor-pointer hover:scale-90 transition">
                    <Image
                        src={'/images/coffeeBanner.jpg'}
                        alt="coffee"
                        fill
                    />
                </div>
                <p className="font-semibold text-sm">Cà phê</p>
            </div>
            <div className="flex flex-col items-center space-y-2 shadow-md rounded-lg p-2">
                <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]   rounded-full relative overflow-hidden cursor-pointer hover:scale-90 transition">
                    <Image
                        src={'/images/milkTea.jpg'}
                        alt="milkTea"
                        fill
                    />
                </div>
                <p className="font-semibold text-sm">Cà phê</p>
            </div>
        </div>
    )
}