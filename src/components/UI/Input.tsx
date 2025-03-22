interface InputProps{
    placeholder?: string | number ;
}
export const Input = (info : InputProps) => {
    return(
        <input 
            className="w-full rounded-lg outline-none text-sm p-2 border-[1px]"
            type="text"
            placeholder={info.placeholder?.toString()}
        />
    )
}