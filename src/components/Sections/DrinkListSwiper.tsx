// "use client"
// import React, {useEffect, useRef, useState } from 'react';
// import { Card } from '@/components';
// import { CardProps } from '@/interface';
// import { Icons } from '@/constants';
// import Image from 'next/image';

// interface DrinkListProps {
//     drinks: CardProps[]; 
//   }

// export default ({drinks} : DrinkListProps) => {
//     const containerRef = useRef<HTMLDivElement | null>(null)
//     const cardRef = useRef<HTMLDivElement | null>(null)
//     const [cardWidth, setCardWidth] = useState(0)
//     const [phone, setPhone] = useState(false)
//     const [disable, setDisable] = useState<"left" | "right" | null>("left")
//     useEffect(() => {
//         setCardWidth(cardRef.current ? cardRef.current.offsetWidth : 0)
//         // console.log("width: ", cardWidth)
//     }, [cardRef.current]);
    
//     const scrollLeft = () => {
//         if (containerRef.current) {
//             containerRef.current.scrollLeft -= cardWidth*2 + 16*2; // +16 là khoảng cách giữa các card
//             // console.log(containerRef.current.scrollLeft)
//         }
//     };
//     const scrollRight = () => {
//         if (containerRef.current) {
//             containerRef.current.scrollLeft += cardWidth*2 + 16*2;
//             // console.log(containerRef.current.clientWidth)
//         }
//     };

//     const NavigationClass = (navigation : "left" | "right") => {
//         return `w-10 h-10 absolute ${navigation}-0 top-1/2 -translate-y-1/2  rounded-full p-2 cursor-pointer flex items-center justify-center bg-secondary-300 bg-opacity-75 backdrop-blur-sm`
//     }

//     useEffect(() => {
//         const checkPhone = () => setPhone(window.innerWidth < 700)
//         checkPhone()
//         window.addEventListener('resize', checkPhone)
//     },[])

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return;

//             const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

//             if (scrollLeft === 0) {
//                 setDisable("left");
//                 // console.log("left");
//             } else if (scrollLeft + clientWidth >= scrollWidth) {
//                 setDisable("right");
//                 // console.log("right");
//             } else{
//                 setDisable(null)
//             }
//         };

//         const container = containerRef.current;
//         if (container) {
//             container.addEventListener("scroll", handleScroll);
//             handleScroll(); // Kiểm tra trạng thái ngay khi component mount
//         }

//         return () => {
//             if (container) {
//                 container.removeEventListener("scroll", handleScroll);
//             }
//         };
//     }, []);

//     return(
//             <>
//                 {/* Width < 768px */}
//                 <div className='block md:hidden'>
//                     <div className='grid grid-cols-2 gap-4'>
//                         {drinks.slice(0,5).map((item, index) => (
//                             <div 
//                                 // ref={index === 0 ? cardRef : null}
//                                 key={index} 
//                             >
//                                 <Card {...item} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Width > 768px */}
//                 <div className='hidden md:block relative'>
//                     <div ref={containerRef} className="w-full flex gap-4 overflow-y-hidden  scroll-smooth scrollbar-hide">
//                         {drinks.map((item, index) => (
//                             <div 
//                                 ref={index === 0 ? cardRef : null}
//                                 key={index} 
//                                 className="flex-shrink-0 snap-center"
//                             >
//                                 <Card {...item} />
//                             </div>
//                         ))}
//                     </div>
//                     <div className={NavigationClass('left')  + `${disable === "left" && ' hidden'}`}
//                         onClick={scrollLeft}
//                     >
//                         <Image
//                             src={Icons.LeftIcon}
//                             alt='left icon'
//                         />
//                     </div>
//                     <div className={NavigationClass('right') + `${disable === "right" && ' hidden'}`}
//                         onClick={scrollRight}
//                     >
//                         <Image
//                             src={Icons.RigthIcon}
//                             alt='right icon'
//                         />
//                     </div>
//                 </div>
//             </>
//     )
// }