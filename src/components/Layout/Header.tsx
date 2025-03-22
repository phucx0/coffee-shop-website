"use client"
import { Icons } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useTabBar } from "@/hook/useTabbar"

export const Header = () => {
    const {openTabBar} =  useTabBar()
    return (
      <div className="w-full z-20 pointer-events-none">
        <header className="pointer-events-auto  text-primary-200 flex flex-col items-center shadow-md  bg-secondary-400/90 backdrop-blur-sm ">
            {/* Main Header */}
            <div className="md:w-[80%] lg:w-[70%] xl:w-[60%] w-[90%] flex flex-row items-center justify-between py-4">
              {/* Logo */}
              <Link href="/" className="font-black phone:text-xl text-5xl tracking-widest cursor-pointer">
                COFFEE SHOP
              </Link>
              <div className="flex">
                {/* Navigation */}
                <nav className="hidden md:flex flex-row gap-6 text-sm tracking-wide uppercase h-full ">
                  <Link href="/menu" className="hover:text-white transition-all duration-300">
                    Thực đơn
                  </Link>
                  <Link href="/about" className="hover:text-white transition-all duration-300">
                    About Us
                  </Link>
                  <Link href="/contact" className="hover:text-white transition-all duration-300">
                    Liên hệ
                  </Link>
                  <Link href="/blog" className="hover:text-white transition-all duration-300">
                    Blog
                  </Link>
                </nav>
                <div className="md:hidden block">
                  <Image
                    className="cursor-pointer"
                    src={Icons.ListIcon}
                    alt="list"
                    onClick={openTabBar}
                  />
                </div>
              </div>
            </div>
          </header>
      </div>
    )
}