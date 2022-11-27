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
  pool(4),
  pool(9),
  realEstate(10),
  realEstate(11),
  realEstate(15),
  realEstate(2),
  realEstate(4),
  realEstate(6),
  realEstate(8),
  surveyor(10),
  surveyor(14),
  surveyor(6),
  surveyor(7),
  surveyor(8),
  surveyor(9),
  temp(10),
  temp(6),
]

export default deck
