interface OptionProps<T extends string | number> {
    label: string,
    options: { label : string, value: string | number }[]
    selected: string | number | null;
    onSelect: (value: string | number) => void;
}
export const OptionSelector =  <T extends string | number>({label, options, selected, onSelect} : OptionProps<T>) => {
    const circleClass = `w-[35px] h-[35px] flex items-center justify-center border-[1px] border-gray 
    rounded-full p-1 cursor-pointer text-xs hover:bg-primary-300/60`
    return(
        <div className="flex items-center justify-between pt-2">
            <div className="text-sm">{label}</div>
            <div className="flex items-center gap-1">
                {options && (
                    options.map((item, index) => (
                        <div key={index} className={`${selected === item.value && 'bg-primary-300/50'} ${circleClass}`}
                            onClick={() => onSelect(item.value)}
                        >
                            {item.label}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}