import type { Marker as LeafletMarker } from 'leaflet';
import { useEffect, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import CaughtFishForm from '../caughtFish/CaughtFishForm';
import { useAddFishMapClick } from '../../lib/hooks/useAddFishMapClick';

export default function LocationMarker() {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const markerRef = useRef<LeafletMarker | null>(null);

    useEffect(() => {
        if (position.latitude !== 0 && position.longitude !== 0 && markerRef.current) {
            //Wait for marker to be fully rendered before opening popup
            setTimeout(() => {
                markerRef.current?.openPopup();
            }, 0);
        }
    }, [position]);

    useAddFishMapClick(setPosition); //pans view to where the user is adding a fish

    if (position.latitude === 0 && position.longitude === 0) return null;

    return (
        <Marker
            position={[position.latitude, position.longitude]}
            ref={markerRef}
        >
            <Popup
                closeOnClick={true}
            >
                <CaughtFishForm latitude={position.latitude} longitude={position.longitude} markerRef={markerRef} />
            </Popup>
        </Marker>
    )
}