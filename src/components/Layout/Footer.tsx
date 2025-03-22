import "@/style/GridLayout.css"
import Link from "next/link"

export const Footer = () => {
    return(
      <div className="w-full flex items-center justify-center ">
        <div className="container max-w-none md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <div className=" a bg-secondary-400 p-8  space-y-4" style={{ gridArea: "a" }}>
            <div className="text-primary-300 font-playfair text-3xl font-bold flex items-center justify-center p-4">
              Coffee Shop
            </div>
            <h2 className="text-base xs:text-lg font-semibold text-primary-300 uppercase">Về Chúng Tôi</h2>
            <div className="text-xs sm:text-sm space-y-2">
              <p className="text-gray-400 leading-relaxed">
                Chúng tôi mang đến những ly cà phê chất lượng nhất với sự tận tâm và đam mê.
              </p>
              <p className="text-gray-400">Địa chỉ: 123 Đường ABC, TP.HCM</p>
              <p className="text-gray-400">Hotline: 0987 654 321</p>
            </div>
          </div>

          {/* Sản phẩm */}
          <div className="b bg-secondary-400 p-8 space-y-4" style={{ gridArea: "b" }}>
            <h2 className="text-base xs:text-lg font-semibold text-primary-300 uppercase">Sản Phẩm</h2>
            <ul className="text-gray-400 space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-gray-100 transition">Cà phê</a></li>
              <li><a href="#" className="hover:text-gray-100 transition">Trà sữa</a></li>
              <li><a href="#" className="hover:text-gray-100 transition">Bánh ngọt</a></li>
            </ul>
          </div>

          {/* Chất lượng */}
          <div className="c bg-secondary-400 p-8 space-y-4 " style={{ gridArea: "c" }}>
            <h2 className="text-base xs:text-lg font-semibold text-primary-300 uppercase">Chất Lượng</h2>
            <ul className="text-xs sm:text-sm text-gray-400  space-y-2">
              <li className="hover:text-gray-100 transition">100% nguyên liệu sạch</li>
              <li className="hover:text-gray-100 transition">Không chất bảo quản</li>
              <li className="hover:text-gray-100 transition">Hương vị tự nhiên, thuần khiết</li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="d bg-secondary-400 p-8  space-y-4" style={{ gridArea: "d" }}>
            <h2 className="text-base xs:text-lg font-semibold text-primary-300 uppercase">Liên Hệ</h2>
            
            <div className="text-gray-400 text-xs sm:text-sm space-y-2">
              {/* Mail */}
              <Link href={'/#'} className="hover:text-gray-100 fill-gray-400 hover:fill-primary-300 transition flex gap-2 items-center">
                <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <div>support@coffee.com</div>
              </Link>

              {/* Facebook */}
              <Link href={'/#'} className="hover:text-gray-100 fill-gray-400 hover:fill-primary-300 transition flex gap-2 items-center">
                <svg  width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
                </svg>
                <div>
                  Facebook
                </div>
              </Link>

              {/* Instagram */}
              <Link href={'/#'} className="hover:text-gray-100 fill-gray-400 hover:fill-primary-300 transition flex gap-2 items-center">
                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
                </svg>
                <div>
                  Instagram
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}