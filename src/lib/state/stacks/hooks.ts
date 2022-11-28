import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import invariant from 'tiny-invariant'
import { Effect, HouseNumber } from '~/lib/models'

import type { RootState } from '../store'
import * as slice from './slice'

type Column = {
  effect: Effect
  houseNumber: HouseNumber
}

type Actions = {
  next(): void
  prev(): void
}

type Turn = [[Column, Column, Column], Actions]

export const useTurn = (): Turn => {
  const dispatch = useDispatch()
  const cards = useSelector<RootState, [Column, Column, Column]>(state => {
    const { index, stacks } = state.stacks
    return stacks.map((stack, i) => {
      const effect = stack[index + 1].effect
      const houseNumber = stack[index].houseNumber

      console.log(stack)

      invariant(effect, `missing effect for column ${i}`)
      invariant(houseNumber, `missing houseNumber for column ${i}`)

      return {
        effect,
        houseNumber,
      }
    }) as [Column, Column, Column]
  })

  const next = useCallback(() => dispatch(slice.next()), [dispatch])
  const prev = useCallback(() => dispatch(slice.prev()), [dispatch])

  return [cards, { next, prev }]
}
