import { ReactNode } from "react"

import "@/style/Section.css"

interface SectionProps {
    children: ReactNode
    width?: number
}

export const Section = ({children, width} : SectionProps) => {
    return(
        <div className="w-full py-10 flex items-center justify-center">
            <div className="section-inner">
                {children}
            </div>
        </div>
    )
}