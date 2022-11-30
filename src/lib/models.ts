export enum Effect {
  Bis = 'Bis',
  Landscaper = 'Landscaper',
  PoolManufacturer = 'Pool Manufacturer',
  RealEstateAgent = 'Real Estate Agent',
  Surveyor = 'Surveyor',
  TempAgency = 'Temp Agency',
}

export type HouseNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15

export interface ConstructionCard {
  effect: Effect
  houseNumber: HouseNumber
}

export interface HousingEstatePlan {
  estates: number[]

  firstPoints: number
  otherPoints: number
  claimed: boolean
}

export type CityPlan = HousingEstatePlan
