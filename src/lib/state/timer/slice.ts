import {
  createListenerMiddleware,
  createSlice,
  createAction,
  PayloadAction,
} from '@reduxjs/toolkit'
import { cardsDidAdvance } from '../construction-cards/guards'

export enum TimerState {
  Stopped = 'stopped',
  Running = 'running',
  Paused = 'paused',
}

export interface TimerSlice {
  seconds: number
  state: TimerState
  remaining: number
  lastTick: number
  delta: number
}

const initialState: TimerSlice = {
  seconds: 10,
  state: TimerState.Stopped,
  remaining: 0,
  lastTick: -1,
  delta: 0,
}

const hasTimerState = (state: unknown): state is { timer: TimerSlice } =>
  !!state && typeof state === 'object' && 'timer' in state
const timerIs = (
  expected: TimerState | TimerState[],
  state: unknown,
): state is { timer: TimerSlice } =>
  hasTimerState(state) &&
  (Array.isArray(expected)
    ? expected.includes(state.timer.state)
    : state.timer.state === expected)
const isTimerComplete = (state: unknown): boolean =>
  hasTimerState(state) && state.timer.remaining === 0

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<number>) => {
      state.lastTick = Date.now()
      state.remaining = action.payload
      state.seconds = action.payload
      state.state = TimerState.Running
    },
    stop: state => {
      state.state = TimerState.Stopped
    },
    toggle: state => {
      if (state.state === TimerState.Running) {
        state.state = TimerState.Paused
        state.delta = 0
      } else {
        state.state = TimerState.Running
        state.lastTick = Date.now()
      }
    },
    tick: state => {
      if (state.state === TimerState.Running) {
        state.delta += Math.abs(state.lastTick - Date.now())
        state.lastTick = Date.now()

        if (state.remaining <= 0) {
          state.remaining = state.seconds
        } else {
          state.remaining -= Math.floor(state.delta / 1000)
          state.remaining = Math.max(state.remaining, 0)
        }

        state.delta = state.delta % 1000
      }
    },
    reset: state => ({
      ...state,
      remaining: state.seconds,
      lastTick: Date.now(),
    }),
  },
})

export const complete = createAction('timer/complete')
export const timerListener = createListenerMiddleware()
timerListener.startListening({
  predicate: (_, state, prevState) =>
    timerIs(TimerState.Running, state) &&
    timerIs([TimerState.Stopped, TimerState.Paused], prevState),
  effect: async (_, { dispatch }) => {
    dispatch(timerSlice.actions.tick())
  },
})
timerListener.startListening({
  actionCreator: timerSlice.actions.tick,
  effect: async (_, { delay, dispatch, getState }) => {
    await delay(1000)
    if (timerIs(TimerState.Running, getState())) {
      dispatch(timerSlice.actions.tick())

      if (isTimerComplete(getState())) {
        dispatch(complete())
      }
    }
  },
})
timerListener.startListening({
  predicate: cardsDidAdvance,
  effect: (_, { dispatch, getState }) => {
    const state = getState()
    if (timerIs(TimerState.Running, state)) {
      dispatch(timerSlice.actions.reset())
    }
  },
})

export const { start, stop, toggle, reset } = timerSlice.actions
export default timerSlice.reducer
