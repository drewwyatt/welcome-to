import { ConstructionCard, Effect, HouseNumber } from '~/lib/models'

const card = (effect: Effect) => (houseNumber: HouseNumber) => ({
  effect,
  houseNumber,
})

const bis = (...houseNumbers: HouseNumber[]) => houseNumbers.map(card(Effect.Bis))
const landscaper = (...houseNumbers: HouseNumber[]) =>
  houseNumbers.map(card(Effect.Landscaper))
const pool = (...houseNumbers: HouseNumber[]) =>
  houseNumbers.map(card(Effect.PoolManufacturer))
const realEstate = (...houseNumbers: HouseNumber[]) =>
  houseNumbers.map(card(Effect.RealEstateAgent))
const surveyor = (...houseNumbers: HouseNumber[]) =>
  houseNumbers.map(card(Effect.Surveyor))
const temp = (...houseNumbers: HouseNumber[]) => houseNumbers.map(card(Effect.TempAgency))

const deck: ConstructionCard[] = [
  ...bis(3, 4, 6, 7, 8, 9, 10, 12, 13),
  ...landscaper(1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15),
  ...pool(3, 4, 6, 7, 8, 9, 10, 12, 13),
  ...realEstate(1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15),
  ...surveyor(1, 2, 3, 5, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 13, 14, 15),
  ...temp(3, 4, 6, 7, 8, 9, 10, 12, 13),
]

export default deck
