interface ItemNoteProps {
    saveItemNote: (value : string) => void 
}
export const ItemNote = ({saveItemNote} : ItemNoteProps) => {
    return (
        <div className="flex flex-col gap-2 pt-2">
            <div className="text-sm">Chú thích (không bắt buộc)</div>
            <div className="p-2">
                <input 
                    className="w-full rounded-lg outline-none text-sm p-2 border-[1px] border-gray"
                    type="text"
                    placeholder="Điền chú thích cho quán"
                    onChange={(e) => {
                        saveItemNote(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}