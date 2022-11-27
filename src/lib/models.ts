export enum Effect {
  Bis,
  Landscaper,
  PoolManufacturer,
  RealEstateAgent,
  Surveyor,
  TempAgency,
}

export interface ConstructionCard {
  effect: Effect
  houseNumber: number
}

export interface CityPlan {
  objective: string
  image: string // ?
  advanced: boolean
}
