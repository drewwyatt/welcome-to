export enum Effect {
  Bis,
  Landscaper,
  PoolManufacturer,
  RealEstateAgent,
  Surveyor,
  TempAgency,
}

export type HouseNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15

export interface ConstructionCard {
  effect: Effect
  houseNumber: HouseNumber
}

export interface CityPlan {
  objective: string
  image: string // ?
  advanced: boolean
}
