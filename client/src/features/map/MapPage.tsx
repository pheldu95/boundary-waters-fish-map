import { useState } from 'react'
import MapComponent from './MapComponent'
import DefaultButton from '../../components/buttons/DefaultButton';

export default function MapPage() {
    const [addingCaughtFish, setAddingCaughtFish] = useState(false);
    return (
        <div>
            <h1>Map Page</h1>
            {addingCaughtFish ?
                <DefaultButton onClickProps={() => setAddingCaughtFish(false)} text='Cancel' />
                :
                <DefaultButton onClickProps={() => setAddingCaughtFish(true)} text='Add a Caught Fish'/>
            }
            <div className={addingCaughtFish ? 'map-container-add-fish' : ''}>
                <MapComponent addingCaughtFish={addingCaughtFish} />
            </div>
        </div>
    )
}
