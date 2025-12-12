interface MapButtonProps {
    text: string
    onClickProps?: () => void
    type?: 'button' | 'submit' | 'reset'
    color?: string
    hoverColor?: string
}

export default function MapButton({ text, onClickProps, type, color='bg-foresty', hoverColor='bg-forestyhover' }: MapButtonProps) {
    return (
        <button
            className={`
            group px-8 py-4 ${color} text-secondary font-bold 
            hover:${hoverColor} transition-colors 
            hover:translate-x-[2px] hover:translate-y-[2px] 
            transition-all cursor-pointer
            rounded-t-lg
            shadow-md
            `}
            onClick={onClickProps}
            type={type ? type : 'button'}
        >
            <span className="inline-block transition-all duration-300">
                {text}
            </span>
        </button>
    )
}
