import { CategoryItem } from "./CategoryItem"

export const MenuProductList = () => {
    // const []
    const drinkTypes = ["Hot Coffee", "Cold Coffee", "Hot Tea", "Cold Tea", "Refreshers"]
    const foodTypes = ["Bakery", "Treats", "Snacks", "Breakfast", "Lunch"]
    const productTypes = {
        "Drinks" : drinkTypes,
        "Food" : foodTypes,
    }
    return (
        <div className="w-full">
            <div className="font-semibold text-lg py-4">
                <p className="hover:underline cursor-pointer">Menu</p>
            </div>
            {Object.entries(productTypes).map(([category, items]) => (
                <div key={category}>
                    <CategoryItem 
                        categoryName={category}
                        items={items}
                    />
                </div>
            ))}
        </div>
    )
}