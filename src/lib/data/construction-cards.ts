import { ConstructionCard, Effect } from '~/lib/models'

// Bis,
//   Landscaper,
//   PoolManufacturer,
//   RealEstateAgent,
//   Surveyor,
//   TempAgency,

const card = (effect: Effect) => (houseNumber: number) => ({
  effect,
  houseNumber,
})

const bis = card(Effect.Bis)
const landscaper = card(Effect.Landscaper)
// const pool = card(Effect.PoolManufacturer)
const pool = (...houseNumbers: number[]) =>
  houseNumbers.map(houseNumber => card(Effect.PoolManufacturer)(houseNumber))

// const realEstate = card(Effect.RealEstateAgent)
const realEstate = (...houseNumbers: number[]) =>
  houseNumbers.map(houseNumber => card(Effect.RealEstateAgent)(houseNumber))

// const surveyor = card(Effect.Surveyor)
const surveyor = (...houseNumbers: number[]) =>
  houseNumbers.map(houseNumber => card(Effect.Surveyor)(houseNumber))

// const temp = card(Effect.TempAgency)
const temp = (...houseNumbers: number[]) =>
  houseNumbers.map(houseNumber => card(Effect.TempAgency)(houseNumber))

const deck: ConstructionCard[] = [
  bis(12),
  bis(8),
  bis(9),
  bis(6),
  bis(10),
  bis(7),
  bis(4),
  bis(13),
  bis(3),
  landscaper(11),
  landscaper(14),
  landscaper(15),
  landscaper(8),
  landscaper(9),
  landscaper(1),
  landscaper(5),
  landscaper(5),
  landscaper(7),
  landscaper(8),
  landscaper(12),
  landscaper(9),
  landscaper(10),
  landscaper(2),
  landscaper(7),
  landscaper(6),
  landscaper(4),
  landscaper(11),
  ...pool(4, 9, 3, 6, 8, 10, 13, 7, 12),
  ...realEstate(10, 11, 15, 2, 4, 6, 8, 5, 9, 7, 14, 5, 12, 1, 7, 9, 11, 8),
  ...surveyor(10, 14, 6, 7, 8, 9, 1, 2, 3, 5, 5, 6, 10, 11, 11, 13, 15, 8),
  ...temp(10, 6, 4, 8, 9, 12, 13, 7, 3),
]

export default deck
