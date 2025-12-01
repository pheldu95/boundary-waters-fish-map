import type { Marker as LeafletMarker } from 'leaflet';
import { useEffect, useRef, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

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

    const map = useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setPosition({
                latitude: lat,
                longitude: lng,
            });
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    if (position.latitude === 0 && position.longitude === 0) return null;

    return (
        <Marker
            position={[position.latitude, position.longitude]}
            ref={markerRef}
        >
            <Popup>
                <form className='flex flex-col gap-2'>
                    <label>Date</label>
                    <input type="text" />
                    <label>Species </label>
                    <input type="text" />
                    <label>Lure</label>
                    <input type="text" />
                    <button type="submit" className="w-full text-gray-900 bg-foresty focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 max-w-sm text-center cursor-pointer">
                        Submit
                    </button>
                </form>
            </Popup>
        </Marker>
    )
}