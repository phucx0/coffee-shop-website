"use client"
import {Section} from "@/components"
import {useItems} from "@/hook/useItems"
import { CategoryList } from "./CategoryList";
export const ItemList = () => {
    const {Items} = useItems()
    const uniqueCategories = Array.from(new Set(Items.map(item => item.ItemType)));
    return(
        <>
            {Items ? (
                // Items.map((item, index) => <Card key={index} {...item}/>)
                // <Section width={50}>
                    <div className="flex flex-col gap-2">
                        {uniqueCategories.map(category => (
                            <CategoryList key={category} items={Items} type={category}/>
                        ))}
                    </div>
                // </Section>
            ) : (
                <div className="text-black">Không có sản phẩm!</div>
            )}
        </>
    )
}