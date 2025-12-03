import { useMapEvents } from 'react-leaflet';

interface Position {
    latitude: number;
    longitude: number;
}

export const useAddFishMapClick = (setPosition: (pos: Position) => void) => {
    const map = useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setPosition({
                latitude: lat,
                longitude: lng,
            });
            
            //map dimensions
            const mapHeight = map.getContainer().offsetHeight;
            const pixelOffset = mapHeight / 3;
            
            //Convert pixel offset to lat/lng offset
            const targetPoint = map.project(e.latlng, map.getZoom());
            targetPoint.y = targetPoint.y - pixelOffset;
            const offsetLatLng = map.unproject(targetPoint, map.getZoom());
            
            map.flyTo(offsetLatLng, map.getZoom());
        },
    });
    
    return map;
};