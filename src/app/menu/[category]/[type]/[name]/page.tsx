"use client"
import { Button } from "@heroui/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default () => {
    const params = useParams()
    const category = params.category as string
    const type = params.type as string
    const name = params.name as string

    const productList : ProductCardType[] = [
        // Hot Coffee
        {
            productId: "0001",
            productName: "Hot Milk Coffee",
            productType: "Hot Coffee",
            productOverview: "A classic hot coffee with steamed milk.",
            urlImage: "/images/hot-milk-coffee.jpg",
            productSize: { S: 10, M: 20, L: 30 }
        },
        {
            productId: "0002",
            productName: "Espresso",
            productType: "Hot Coffee",
            productOverview: "Strong and rich espresso shot.",
            urlImage: "/images/espresso.jpg",
            productSize: { S: 15, M: 25, L: 35 }
        },
    
        // Cold Coffee
        {
            productId: "0003",
            productName: "Iced Americano",
            productType: "Cold Coffee",
            productOverview: "Chilled espresso with water and ice.",
            urlImage: "/images/iced-americano.jpg",
            productSize: { S: 12, M: 22, L: 32 }
        },
        {
            productId: "0004",
            productName: "Caramel Frappuccino",
            productType: "Cold Coffee",
            productOverview: "Blended coffee with caramel syrup and whipped cream.",
            urlImage: "/images/caramel-frappuccino.jpg",
            productSize: { S: 18, M: 28, L: 38 }
        },
    
        // Hot Tea
        {
            productId: "0005",
            productName: "Green Tea",
            productType: "Hot Tea",
            productOverview: "Refreshing and antioxproductIdant-rich hot green tea.",
            urlImage: "/images/hot-green-tea.jpg",
            productSize: { S: 10, M: 15, L: 20 }
        },
        {
            productId: "0006",
            productName: "Chai Latte",
            productType: "Hot Tea",
            productOverview: "Spiced black tea with milk and foam.",
            urlImage: "/images/chai-latte.jpg",
            productSize: { S: 14, M: 24, L: 34 }
        },
    
        // Cold Tea
        {
            productId: "0007",
            productName: "Iced Lemon Tea",
            productType: "Cold Tea",
            productOverview: "Refreshing iced tea with lemon slices.",
            urlImage: "/images/iced-lemon-tea.jpg",
            productSize: { S: 12, M: 20, L: 28 }
        },
    
        // Refreshers
        {
            productId: "0008",
            productName: "Strawberry Refresher",
            productType: "Refreshers",
            productOverview: "Sweet and tangy strawberry-infused drink.",
            urlImage: "/images/strawberry-refresher.jpg",
            productSize: { S: 16, M: 26, L: 36 }
        },
    
        // Bakery
        {
            productId: "0009",
            productName: "Croissant",
            productType: "Bakery",
            productOverview: "Buttery and flaky French-style croissant.",
            urlImage: "/images/croissant.jpg",
            productSize: { S: 15 }
        },
    
        // Treats
        {
            productId: "0010",
            productName: "Chocolate Brownie",
            productType: "Treats",
            productOverview: "Rich and fudgy chocolate brownie.",
            urlImage: "/images/chocolate-brownie.jpg",
            productSize: { S: 20 }
        },
    
        // Snacks
        {
            productId: "0011",
            productName: "Salted Almonds",
            productType: "Snacks",
            productOverview: "Crunchy and healthy salted almonds.",
            urlImage: "/images/salted-almonds.jpg",
            productSize: { S: 10, M: 18 }
        },
    
        // Breakfast
        {
            productId: "0012",
            productName: "Pancakes",
            productType: "Breakfast",
            productOverview: "Fluffy pancakes served with syrup.",
            urlImage: "/images/pancakes.jpg",
            productSize: { S: 25 }
        },
    
        // Lunch
        {
            productId: "0013",
            productName: "Chicken Sandwich",
            productType: "Lunch",
            productOverview: "Grilled chicken sandwich with fresh veggies.",
            urlImage: "/images/chicken-sandwich.jpg",
            productSize: { S: 30 }
        }
    ];

    const productFilter : ProductCardType | undefined = 
        productList.find(
            p => 
            p.productType.toLowerCase().replace(/\s+/g, "-") === type && 
            p.productName.toLowerCase().replace(/\s+/g, "-") === name
    )

    useEffect(() => {
        console.log(params)
    }, [params])

    if(!productFilter) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div>Not found product</div>
            </div>
        )
    }

    return(
        <div className="p-4 w-full h-screen">
            <div className="flex gap-4 flex-col items-center md:flex-row md:items-start">
                <div className="overflow-hidden rounded-lg w-[200px] h-[200px]">
                    <img 
                        src="/images/coffee.png" 
                        alt="coffee"
                        className="object-fill" 
                    />
                </div>
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <p className="text-bodyLarge font-semibold">{productFilter.productName}</p>
                        <p className="text-bodyMedium font-light">{productFilter.productOverview}</p>
                    </div>
                    <Button
                        title="Add to cart"
                        className="bg-primary-400"
                    >
                        Add to cart6    
                    </Button>
                </div>
            </div>

        </div>
    )
}