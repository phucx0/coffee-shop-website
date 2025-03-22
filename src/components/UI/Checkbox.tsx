type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
};
  
export default({ checked, onChange, label }: CheckboxProps) => {
return (
    <label className="flex items-center gap-2 cursor-pointer">
    <input 
      type="checkbox" checked={checked} onChange={onChange} className="hidden peer" />
    <div className={`w-4 h-4 border-[1px] rounded-full flex items-center justify-center transition-all 
                    ${checked ? "bg-primary-300 border-primary-300" : "border-gray"}`}>
        {checked && "✔"}
    </div>
    <span>{label}</span>
    </label>
);
}
