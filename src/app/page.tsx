"use client"
import {Banner, SidebarFilter, ItemList, Section} from "@/components"
import { Product } from "@/interface/Item";
import { useItems } from "@/hook/useItems";
import { useEffect } from "react";

export default function Home() {
  const {updateItems} = useItems()

  const allItems: Product[] = [
  {
      "ItemId": "001",
      "ItemName": "Cappuccino",
      "ItemType": "drink",
      "ItemExist": true,
      "ItemOverview": "A smooth espresso with steamed milk.",
      "ItemImage": ["https://example.com/cappuccino.jpg"],
      "sizes": [
          {"size" : "S", "price" : 30000},
          {"size" : "M", "price" : 40000},
          {"size" : "L", "price" : 50000},
      ],
      "ItemTags": null
  },
  {
      "ItemId": "002",
      "ItemName": "Cà phê sữa",
      "ItemType": "coffee",
      "ItemExist": true,
      "ItemOverview": "A smooth espresso with steamed milk.",
      "ItemImage": ["https://example.com/cappuccino.jpg"],
      "sizes": [
          {"size" : "S", "price" : 30000},
          {"size" : "M", "price" : 40000},
          {"size" : "L", "price" : 50000},
      ],
      "ItemTags": null
  },
  {
      "ItemId": "201",
      "ItemName": "Chocolate Cake",
      "ItemType": "cake",
      "ItemExist": true,
      "ItemOverview": "Rich chocolate cake with creamy frosting.",
      "ItemImage": ["https://example.com/chocolate-cake.jpg"],
      "price": 80000,
      "ItemTags": null
  },
  {
      "ItemId": "003",
      "ItemName": "Matcha Latte",
      "ItemType": "drink",
      "ItemExist": true,
      "ItemOverview": "A creamy and smooth matcha green tea latte.",
      "ItemImage": ["https://example.com/matcha-latte.jpg"],
      "sizes": [
          {"size" : "S", "price" : 35000},
          {"size" : "M", "price" : 45000},
          {"size" : "L", "price" : 55000},
      ],
      "ItemTags": ["matcha", "latte", "tea"]
  },
  {
      "ItemId": "004",
      "ItemName": "Americano",
      "ItemType": "coffee",
      "ItemExist": true,
      "ItemOverview": "A classic espresso with hot water for a rich coffee flavor.",
      "ItemImage": ["https://example.com/americano.jpg"],
      "sizes": [
          {"size" : "S", "price" : 25000},
          {"size" : "M", "price" : 35000},
          {"size" : "L", "price" : 45000},
      ],
      "ItemTags": ["black coffee", "strong", "espresso"]
  },
  {
      "ItemId": "202",
      "ItemName": "Strawberry Cheesecake",
      "ItemType": "cake",
      "ItemExist": true,
      "ItemOverview": "A creamy cheesecake topped with fresh strawberries.",
      "ItemImage": ["https://example.com/strawberry-cheesecake.jpg"],
      "price": 90000,
      "ItemTags": ["cheesecake", "dessert", "strawberry"]
  }
];

  useEffect(() => {
    updateItems(allItems)
  },[allItems])
  return(
    <div className="bg-white">
      <Banner/>
        <Section>
          <div className="grid grid-cols-[1fr,3fr] gap-4">
            <SidebarFilter/>
            <ItemList/>
          </div>
        </Section>
    </div>
  )
}
