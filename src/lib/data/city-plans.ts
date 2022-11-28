import { CityPlan } from '~/lib/models'

const toPlan = (
  objective: string,
  firstPoints: number,
  otherPoints: number,
  advanced = false,
): CityPlan => ({
  objective,
  firstPoints,
  otherPoints,
  claimed: false,
  advanced,
})

export const n1: CityPlan[] = [toPlan('[3] [3] [3]', 8, 4), toPlan('[6] [6]', 10, 6)]

export const n2: CityPlan[] = [
  toPlan('7 temp agencies', 6, 3, true),
  toPlan('[3] [3] [5]', 8, 4),
]

export const n3: CityPlan[] = [toPlan('All Edges', 7, 4, true), toPlan('Top Row', 6, 3)]

/**
 * N1
 * [3] [3] [3]
 *
 * 8 / 4
 */

/**
 * N1
 * [6] [6]
 *
 * 10/6
 */

/**
 * N1
 * 7 temp agnecy
 * advanced
 *
 * 6/3
 */

/**
 * N1
 * all edges
 * advanced
 *
 * 7/4
 */

/**
 * N1
 * top row
 *
 * 6/3
 */
