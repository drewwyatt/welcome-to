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
const pool = card(Effect.PoolManufacturer)
const realEstate = card(Effect.RealEstateAgent)
const surveyor = card(Effect.Surveyor)
const temp = card(Effect.TempAgency)

const deck: ConstructionCard[] = [
  surveyor(6),
  surveyor(7),
  pool(9),
  surveyor(10),
  surveyor(14),
  landscaper(9),
  realEstate(6),
  surveyor(9),
  pool(4),
  bis(8),
  realEstate(11),
  realEstate(4),
  realEstate(15),
  realEstate(2),
  landscaper(15),
  bis(12),
  landscaper(8),
  landscaper(14),
  temp(6),
  surveyor(8),
  temp(10),
  bis(9),
  landscaper(11),
  realEstate(10),
  realEstate(8),
]

export default deck
