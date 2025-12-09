import type { CaughtFishFilters } from '../../lib/types/caughtFishTypes'

type Props = {
    caughtFishFilters: CaughtFishFilters
    handleSpeciesChange: (speciesId: string) => void
}

export default function MapActiveFiltersSection( {caughtFishFilters, handleSpeciesChange}: Props ) {
  return (
    <div>
        {caughtFishFilters.fishSpeciesIds &&
            caughtFishFilters.fishSpeciesIds.map((speciesId) => (
                <button onClick={() => handleSpeciesChange(speciesId)}>{speciesId}</button>
            ))
        }
    </div>
  )
}
