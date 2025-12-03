import React, { useState, type FormEvent } from 'react'
import { useCaughtFish } from '../../lib/hooks/useCaughtFish'
import type { CaughtFish } from '../../lib/types';
import { useFishingLure } from '../../lib/hooks/useFishingLure';
import { useFishSpecies } from '../../lib/hooks/useFishSpecies';
import DefaultButton from '../../components/buttons/DefaultButton';
import type { Marker } from 'leaflet';

type Props = {
  latitude: number;
  longitude: number;
  markerRef?: React.RefObject<Marker | null>;
}

export default function CaughtFishForm({ latitude, longitude, markerRef }: Props) {
  const { fishingLures } = useFishingLure();
  const { fishSpecies } = useFishSpecies();
  const { createCaughtFish } = useCaughtFish();
  const [selectedFishingLure, setSelectedFishingLure] = useState('');
  const [selectedFishSpecies, setSelectedFishSpecies] = useState('');
  const [addNote, setAddNote] = useState(false);

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFishSpecies(event.target.value);
  };

  const handleLureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFishingLure(event.target.value);
  };

  const toggleAddNote = () => {
    setAddNote(!addNote);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    //the name of each key come from the "name" property on each textfield
    const data: { [key: string]: FormDataEntryValue } = {}
    formData.forEach((value, key) => {
      data[key] = value;
    });

    createCaughtFish.mutate(data as unknown as CaughtFish);

    markerRef?.current?.closePopup();
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full items-center'>
      <div className="w-[90%]">
        <label htmlFor='caughtDate' className="mb-1 block text-s font-small">Date</label>
        <input
          id='caughtDate'
          name='caughtDate'
          type="date"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-small text-grey outline-none focus:border-foresty focus:shadow-md"
        />
      </div>

      <div className="w-[90%]">
        <label htmlFor='fishSpecies' className="mb-1 block text-s font-small">Species </label>
        <select
          id='fishSpecies'
          name="fishSpecies"
          value={selectedFishSpecies}
          onChange={handleSpeciesChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-small text-grey outline-none focus:border-foresty focus:shadow-md"
        >
          <option value="" disabled hidden>
            Choose...
          </option>
          {fishSpecies?.map((species) => (
            <option key={species.id} value={`/api/fish_species/${species.id}`}>{species.name}</option>
          ))}
        </select>
      </div>

      <div className="w-[90%]">
        <label htmlFor='fishingLure' className="mb-1 block text-s font-small">Lure</label>
        <select
          id='fishingLure'
          defaultValue=""
          name="fishingLure"
          value={selectedFishingLure}
          onChange={handleLureChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-small text-grey outline-none focus:border-foresty focus:shadow-md"
        >
          <option value="" disabled hidden>
            Choose...
          </option>
          {fishingLures?.map((lure) => (
            <option key={lure.id} value={`/api/fishing_lures/${lure.id}`}>{lure.name}</option>
          ))}
        </select>
      </div>

      <button className='cursor-pointer w-24 hover:text-forestyhover transition-colors' onClick={toggleAddNote} type='button'>{addNote ? 'Cancel' : 'Add Note'}</button>

      <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${addNote ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <label htmlFor='note' className="mb-1 block text-s font-small">Note</label>
        <textarea
          id='note'
          name='note'
          className='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-small text-grey outline-none focus:border-foresty focus:shadow-md'
        />
      </div>

      <input type="hidden" name="latitude" value={latitude} />
      <input type="hidden" name="longitude" value={longitude} />
      <input type="hidden" name="caughtBy" value='/api/users/67' /> {/* Temporary until auth is implemented */}

      <DefaultButton text={'Submit'} type='submit' />
    </form>
  )
}
