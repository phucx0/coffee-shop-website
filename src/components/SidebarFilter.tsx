"use client"
import {Slider} from "@heroui/slider";
import { useState } from "react";

export const SidebarFilter = () => {
    const [price, setPrice] = useState(0.5);
    const categories = ["Cà phê", "Nước ép", "Sinh tố", "Trà sữa", "Bánh ngọt"];

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white h-fit">
            <div className="font-semibold text-lg mb-4">Bộ lọc</div>

            {/* Danh mục sản phẩm */}
            <div className="mb-4">
                <div className="font-semibold text-base">Danh mục</div>
                <div className="space-y-2 text-sm mt-2">
                    {categories.map((category, index) => (
                        <label key={index} className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4" />
                            {category}
                        </label>
                    ))}
                </div>
            </div>

            {/* Bộ lọc giá */}
            <div>
                <div className="font-semibold text-base mb-2">Giá</div>
                <Slider
                    aria-label="Price"
                    className="max-w-md"
                    defaultValue={price}
                    maxValue={1}
                    minValue={0}
                    step={0.01}
                    size="sm"
                    onChange={(value) => setPrice(Number(value))}
                />
                <div className="text-sm mt-2">Giá hiện tại: {Math.round(price * 100)}K</div>
            </div>
        </div>
    );
};