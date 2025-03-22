"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
export const MenuSideBar = () => {
    const router = useRouter()
    const params = useParams()
    
    // const category = params.category as string;
    const type = params.item as string;

    const [selected, setSelected] = useState("")
    const handleNavigate = (categoryName : string, item: string) => {
        router.push(`/menu/${categoryName.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`)
    }


    const drinkTypes = ["Hot Coffee", "Cold Coffee", "Hot Tea", "Cold Tea", "Refreshers"]
    const foodTypes = ["Bakery", "Treats", "Snacks", "Breakfast", "Lunch"]
    const productTypes = {
        "Drinks" : drinkTypes,
        "Food" : foodTypes,
    }

    useEffect(() => {
        if(type){
            setSelected(type.replace(/\s+/g, "-"))
        }else{
            setSelected("")
        }
        // console.log("Params menu: ", params)
    }, [params])


    return (
        <div className="relative hidden md:block w-[200px] ">
            <div className="sticky top-0">
                {Object.entries(productTypes).map(([categoryName, items]) => (
                    <div key={categoryName}>
                    <div className="font-semibold px-2 py-4 text-lg ">{categoryName}</div>
                        {items.map((item, index) => (
                            <div key={index}>
                                <div
                                    className={`${selected === item.toLowerCase().replace(/\s+/g, "-") ? 'bg-gray-100 font-semibold' : 'font-light'} hover:bg-gray-100 text-base`}
                                    onClick={() => handleNavigate(categoryName, item)}
                                >
                                    <p className=" text-gray-900 cursor-pointer p-2">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}