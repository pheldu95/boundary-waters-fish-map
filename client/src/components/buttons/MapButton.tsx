interface MapButtonProps {
    text: string;
    onClickProps?: () => void;
    type?: 'button' | 'submit' | 'reset';
    cancel?: boolean;
}

export default function MapButton({ text, onClickProps, type, cancel = false }: MapButtonProps) {
    return (
        <button
            className={`
            group px-8 py-4 text-yellowishbone font-mono font-bold 
            transition-all duration-300 ease-in-out
            hover:translate-x-[2px] hover:translate-y-[2px] 
            cursor-pointer
            rounded-t-xl
            shadow-2xl
            ${cancel ? 'bg-redish hover:bg-redishhover' : 'bg-foresty hover:bg-forestyhover'}
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
