// typescript definition file
type FishSpecies = {
  id: number
  name: string
  caughtFish: string[]
};

type CaughtFish = {
  id: number
  latitude: string
  longitude: string
  caughtDate: string
  caughtBy: string
  fishSpecies: string
  fishingLure: string
};

type FishingLure = {
  id: number
  name: string
  color: string
  addedBy: string
  createdAt: string
  caughtFish: string[]
};

type User = {
    id: number
    email: string
}

export type { FishSpecies, CaughtFish, FishingLure, User };