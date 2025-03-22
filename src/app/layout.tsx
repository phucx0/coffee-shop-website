
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header, Footer, ItemCustomization, NotificationManager, TabBar, Cart} from "@/components"
import { Providers } from "@/context/Providers";
import { ReduxProvider } from "@/lib/redux/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Coffee Shop",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  flex flex-col`}>
        <ReduxProvider>
          <Providers>
            <Header/>
            {children}
            <TabBar/>
            <Footer/>
            <Cart/>
            <NotificationManager/>
            <ItemCustomization/>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
