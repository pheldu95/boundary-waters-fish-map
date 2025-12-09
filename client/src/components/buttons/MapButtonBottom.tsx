interface MapButtonProps {
    text: string
    onClickProps?: () => void
    type?: 'button' | 'submit' | 'reset'
}

export default function MapButtonBottom({ text, onClickProps, type }: MapButtonProps) {
    return (
        <button
            className="
            group px-8 py-4 bg-foresty text-yellowishbone font-bold 
            hover:bg-forestyhover transition-colors 
            hover:translate-x-[2px] hover:translate-y-[2px] 
            transition-all cursor-pointer
            rounded-b-lg
            shadow-md
         "
            onClick={onClickProps}
            type={type ? type : 'button'}
        >
            <span className="inline-block transition-all duration-300">
                {text}
            </span>
        </button>
    )
}
