import React, { useState, type FormEvent } from 'react'
import { useCaughtFish } from '../../lib/hooks/useCaughtFish'
import type { CaughtFish } from '../../lib/types';
import { useFishingLure } from '../../lib/hooks/useFishingLure';

type Props = {
  latitude: number;
  longitude: number;
}

export default function CaughtFishForm({ latitude, longitude }: Props) {
  const { fishingLures, isPending } = useFishingLure();
  const { createCaughtFish } = useCaughtFish();
  const [selectedFishingLure, setSelectedFishingLure] = useState();

  const handleChange = (event) => {
    setSelectedFishingLure(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    //the name of each key come from the "name" property on each textfield
    const data: {[key: string]: FormDataEntryValue} = {}
    formData.forEach((value, key) => {
      data[key] = value;
    });

    createCaughtFish.mutate(data as unknown as CaughtFish);
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <label>Date</label>
      <input name='caughtDate' type="date" />

      <label>Species </label>
      <input name='fishSpecies' type="text" />

      <label>Lure</label>
      <input name='fishingLure' type="text" />
      <select name="fishingLure" value={selectedFishingLure} onChange={handleChange}>
        {fishingLures?.map((lure) => (
          <option key={lure.id} value={`/api/fishing_lures/${lure.id}`}>{lure.name}</option>
        ))}
      </select>

      <input type="hidden" name="latitude" value={latitude} />
      <input type="hidden" name="longitude" value={longitude} />
      <input type="hidden" name="caughtBy" value='/api/users/61' /> {/* Temporary until auth is implemented */}
      <button type="submit" className="w-full text-gray-900 bg-foresty focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 max-w-sm text-center cursor-pointer">
        Submit
      </button>
    </form>
  )
}
