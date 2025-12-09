import { Marker, Popup } from 'react-leaflet'
import type { CaughtFishRead } from '../../lib/types/caughtFishTypes'
import { DivIcon } from 'leaflet'
import { getIconFishColor } from '../../utils/fishIconColors'

type Props = {
    caughtFish: CaughtFishRead
}
export default function CaughtFishPopup({ caughtFish }: Props) {
    const iconColor = getIconFishColor(caughtFish.fishSpecies.name);

    const fishIcon = new DivIcon({
        html: `
                <div class="fish-marker">
                    <i class="fa-solid fa-fish"></i>
                </div>
            `,
        className: `custom-div-icon ${iconColor}`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    });

    return (
        <Marker
            key={caughtFish.id}
            position={[caughtFish.latitude, caughtFish.longitude]}
            icon={fishIcon}
        >
            <Popup>
                <div className="flex">
                    <div className="flex-1">
                        {caughtFish.fishSpecies.name}
                    </div>
                    <div className="flex-1">
                        {caughtFish.caughtDate}
                    </div>
                </div>

                <div>
                    {caughtFish.fishingLure ? caughtFish.fishingLure.name : ''}
                </div>

                <div>
                    {caughtFish.length} inches
                </div>
            </Popup>
        </Marker>
    )
}
