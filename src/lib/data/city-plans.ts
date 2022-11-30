import { CityPlan, HousingEstatePlan } from '~/lib/models'

const estatePlan = (
  firstPoints: number,
  otherPoints: number,
  ...estates: number[]
): HousingEstatePlan => ({
  claimed: false,
  firstPoints,
  otherPoints,
  estates,
})

export const n1: CityPlan[] = [
  estatePlan(8, 4, 1, 1, 1, 1, 1, 1),
  estatePlan(9, 3, 4, 4),
  estatePlan(8, 4, 3, 3, 3),
  estatePlan(10, 6, 6, 6),
  estatePlan(8, 4, 5, 5),
  estatePlan(8, 4, 2, 2, 2, 2),
]

export const n2: CityPlan[] = [
  estatePlan(8, 4, 3, 6),
  estatePlan(10, 6, 5, 2, 2),
  estatePlan(12, 7, 3, 3, 4),
  estatePlan(9, 5, 4, 1, 1, 1),
  estatePlan(9, 5, 4, 5),
  estatePlan(11, 6, 1, 6),
]

export const n3: CityPlan[] = [
  estatePlan(7, 3, 3, 4),
  estatePlan(7, 3, 3, 4),
  estatePlan(13, 7, 2, 3, 5),
  estatePlan(13, 7, 1, 4, 5),
  estatePlan(12, 7, 1, 2, 6),
  estatePlan(7, 3, 2, 5),
  estatePlan(11, 6, 1, 2, 2, 3),
]
