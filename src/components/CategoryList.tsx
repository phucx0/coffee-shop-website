import { Card } from "@/components";
import { Product } from "@/interface/Item";
import { ArrowDownIcon, ChevronDownIcon} from '@heroicons/react/24/solid'
import { tree } from "next/dist/build/templates/app-page";
import { useState } from "react";

interface CategoryListProps {
  items: Product[];
  type: Product["ItemType"];
}

export const CategoryList = ({ items, type } : CategoryListProps) => {
  const filterByCategory = () => {
    return items.filter((item) => item.ItemType === type);
  };
  const CategoryItem = {
    "coffee" : "Cà phê",
    "drink" : "Nước ...",
    "cake" : "Bánh ngọt",
  }

  const [open, setOpen] = useState(true)

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between border rounded-lg p-2 shadow-100">
        <div className="text-bodyLarge font-bold">
          {CategoryItem[type]}
        </div>
        <ChevronDownIcon className={`size-5 cursor-pointer ${!open && 'rotate-90'} transition-all duration-500`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className={`${open ? 'max-h-[1000px]' : 'max-h-0'} transition-all duration-500 grid grid-cols-2 gap-2 sm:grid-cols-3  overflow-hidden`}
        // style={{ marginTop: '8px' }}
      >
        {filterByCategory().map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
