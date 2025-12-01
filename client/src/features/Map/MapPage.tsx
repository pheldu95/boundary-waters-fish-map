import { useState } from 'react'
import MapComponent from './MapComponent'

export default function MapPage() {
    const [addingCaughtFish, setAddingCaughtFish] = useState(false);
    return (
        <div>
            <h1>Map Page</h1>
            {addingCaughtFish ?
                <button onClick={() => setAddingCaughtFish(false)}>Cancel</button>
                :
                <button onClick={() => setAddingCaughtFish(true)}>Add a Caught Fish</button>
            }
            <div className={addingCaughtFish ? 'map-container-crosshair' : ''}>
                <MapComponent addingCaughtFish={addingCaughtFish} />
            </div>
        </div>
    )
}
