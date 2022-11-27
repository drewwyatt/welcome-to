import { ConstructionCard, Effect } from '~/lib/models'

const card = (effect: Effect) => (houseNumber: number) => ({
  effect,
  houseNumber,
})

const bis = (...houseNumbers: number[]) => houseNumbers.map(card(Effect.Bis))
const landscaper = (...houseNumbers: number[]) =>
  houseNumbers.map(card(Effect.Landscaper))
const pool = (...houseNumbers: number[]) =>
  houseNumbers.map(card(Effect.PoolManufacturer))
const realEstate = (...houseNumbers: number[]) =>
  houseNumbers.map(card(Effect.RealEstateAgent))
const surveyor = (...houseNumbers: number[]) => houseNumbers.map(card(Effect.Surveyor))
const temp = (...houseNumbers: number[]) => houseNumbers.map(card(Effect.TempAgency))

const deck: ConstructionCard[] = [
  ...bis(3, 4, 6, 7, 8, 9, 10, 12, 13),
  ...landscaper(1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15),
  ...pool(4, 9, 3, 6, 8, 10, 13, 7, 12),
  ...realEstate(10, 11, 15, 2, 4, 6, 8, 5, 9, 7, 14, 5, 12, 1, 7, 9, 11, 8),
  ...surveyor(10, 14, 6, 7, 8, 9, 1, 2, 3, 5, 5, 6, 10, 11, 11, 13, 15, 8),
  ...temp(10, 6, 4, 8, 9, 12, 13, 7, 3),
]

export default deck
