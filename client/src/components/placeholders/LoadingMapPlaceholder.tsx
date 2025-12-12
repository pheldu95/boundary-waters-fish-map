import LoadingSpinner from './LoadingSpinner'

export default function LoadingMapPlaceholder() {
    return (
        <div
            className='h-[480px] w-[90%] bg-secondary mx-auto z-0 justify-center flex items-center'
        >
            <LoadingSpinner />
        </div>
    )
}
