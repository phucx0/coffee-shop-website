import { ReactNode } from "react"

type MainLayoutType = {
    className?: string
    flexDirection: "column" | "row"
    gap?: number
    children: ReactNode
}

export default ({className, children, flexDirection, gap} : MainLayoutType) => {
    return(
        <div className="relative w-full flex items-center justify-center">
            <div className={`md:w-[80%] lg:w-[70%] xl:w-[60%] w-[95%] flex ${className}`}
                style={{flexDirection: flexDirection, gap: gap}}
            >
                {children}
            </div>
        </div>
    )
}