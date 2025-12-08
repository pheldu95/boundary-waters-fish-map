import LoadingSpinner from './LoadingSpinner'

export default function LoadingMapPlaceholder() {
    return (
        <div
            className='h-[500px] w-[90%] bg-yellowishbone mx-auto z-0 justify-center flex items-center'
        >
            <LoadingSpinner />
        </div>
    )
}
