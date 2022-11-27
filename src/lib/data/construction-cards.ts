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
]

export default deck
