import LoadingSpinner from '../../components/placeholders/LoadingSpinner'
import type { FishSpecies } from '../../lib/types'
import type { CaughtFishFilters } from '../../lib/types/caughtFishTypes'
import { getIconFishColor } from '../../utils/fishIconColors'

type Props = {
    caughtFishFilters: CaughtFishFilters
    handleSpeciesChange: (speciesId: string) => void
    fishSpecies?: FishSpecies[]
}

export default function MapActiveFiltersSection({ caughtFishFilters, handleSpeciesChange, fishSpecies }: Props) {
    if (!fishSpecies) return <LoadingSpinner />

    const fishIconColors: Record<string, string> = {};

    fishSpecies.forEach(species => {
        fishIconColors[species.id] = getIconFishColor(species.name);
    });

    return (
        <div>
            {caughtFishFilters.fishSpeciesIds &&
                caughtFishFilters.fishSpeciesIds.map((speciesId) => (
                    <button onClick={() => handleSpeciesChange(speciesId)}>
                        <i className={`fa-solid fa-fish ${fishIconColors[speciesId]} cursor-pointer`}></i>
                    </button>
                ))
            }
        </div>
    )
}
