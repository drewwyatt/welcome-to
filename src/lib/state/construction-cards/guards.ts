import type { ConstructionCardsSlice } from './slice'

export const hasCardState = (
  state: unknown,
): state is { constructionCards: ConstructionCardsSlice } =>
  !!state && typeof state === 'object' && 'constructionCards' in state

export const cardsDidAdvance = (
  _: unknown,
  state: unknown,
  prevState: unknown,
): state is { constructionCards: ConstructionCardsSlice } =>
  hasCardState(state) &&
  hasCardState(prevState) &&
  state.constructionCards.index > 0 &&
  state.constructionCards.index > prevState.constructionCards.index
