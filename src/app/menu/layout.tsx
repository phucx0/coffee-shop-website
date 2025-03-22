import { MainLayout, MenuSideBar, ProductOptions } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coffee Shop",
    description: "Coffee Shop",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return(
        <div className="bg-white">
            <MainLayout
                // className="relative"
                flexDirection="row"
                gap={16}
            >
                <MenuSideBar/>
                {children}
                <ProductOptions/>
            </MainLayout>
        </div>
    )
}