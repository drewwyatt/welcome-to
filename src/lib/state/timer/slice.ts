import { createListenerMiddleware, createSlice, createAction } from '@reduxjs/toolkit'

export enum TimerState {
  Stopped = 'stopped',
  Running = 'running',
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
const timerIs = (expected: TimerState, state: unknown): boolean =>
  hasTimerState(state) && state.timer.state === expected
const isTimerComplete = (state: unknown): boolean =>
  hasTimerState(state) && state.timer.remaining === 0

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: state => {
      state.state = TimerState.Running
      state.lastTick = Date.now()
    },
    stop: state => {
      state.state = TimerState.Stopped
    },
    toggle: state => {
      state.state === TimerState.Running ? TimerState.Stopped : TimerState.Running
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
    reset: state => {
      state.remaining = 0
    },
  },
})

export const complete = createAction('timer/complete')
export const timerListener = createListenerMiddleware()
timerListener.startListening({
  predicate: (_, state, prevState) =>
    timerIs(TimerState.Running, state) && timerIs(TimerState.Stopped, prevState),
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

export const { start, stop, toggle, reset } = timerSlice.actions
export default timerSlice.reducer
