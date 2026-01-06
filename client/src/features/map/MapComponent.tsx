import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import LocationMarker from './LocationMarker';
import { useCaughtFishes } from '../../lib/hooks/caughtFish/useCaughtFishes';
import LoadingMapPlaceholder from '../../components/placeholders/LoadingMapPlaceholder';
import CaughtFishPopup from '../caughtFish/CaughtFishPopup';
import type { CaughtFishFilters } from '../../lib/types/caughtFishTypes';
import { useAuth } from '../../AuthContext';
import type { JSX } from 'react';

type Props = {
    addingCaughtFish: boolean;
    filters?: CaughtFishFilters;
    tileLayerComponent: JSX.Element
}

export default function MapComponent({ addingCaughtFish, filters, tileLayerComponent }: Props) {
    const { user } = useAuth();
    const { allCaughtFishes } = useCaughtFishes(filters, user?.id);

    if (!allCaughtFishes) return <LoadingMapPlaceholder />;

    return (
        <MapContainer
            center={[48.0, -91.0]}
            zoom={9}
            scrollWheelZoom={true}
            style={{ height: "55vh", width: "90%" }}
            className='mx-auto z-1'
        >
            {tileLayerComponent}
            <MarkerClusterGroup
                chunkedLoading
                // disableClusteringAtZoom={1}
                showCoverageOnHover={false}
                spiderfyOnMaxZoom={false}
            >
                {allCaughtFishes.map((caughtFish) => (
                    <CaughtFishPopup caughtFish={caughtFish} />
                ))}
            </MarkerClusterGroup>

            {addingCaughtFish ? <LocationMarker /> : null}
        </MapContainer>
    )
}
