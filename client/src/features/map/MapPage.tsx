import { useState } from 'react'
import MapComponent from './MapComponent'
import DefaultButton from '../../components/buttons/DefaultButton';

export default function MapPage() {
    const [addingCaughtFish, setAddingCaughtFish] = useState(false);
    return (
        <div className='flex'>

            <div className='h-full w-[90%] bg-fishblue mx-auto my-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]'>
                <h1>Map Page</h1>
                <div className='flex w-[90%] mx-auto'>
                    <div className='justify-items-start flex-none'>
                        {addingCaughtFish ?
                            <DefaultButton onClickProps={() => setAddingCaughtFish(false)} text='Cancel' />
                            :
                            <DefaultButton onClickProps={() => setAddingCaughtFish(true)} text='Add a Caught Fish' />
                        }
                        <DefaultButton text='Species'/>
                        <DefaultButton text='Lure'/>
                    </div>
                </div>
                <div className={addingCaughtFish ? 'map-container-add-fish' : ''}>
                    <MapComponent addingCaughtFish={addingCaughtFish} />
                </div>
            </div>
        </div>
    )
}
