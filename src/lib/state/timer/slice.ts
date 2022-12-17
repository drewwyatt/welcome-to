import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export enum TimerState {
  Stopped = 'stopped',
  Running = 'running',
}

export interface TimerSlice {
  seconds: number
  state: TimerState
  remaining: number
  lastTick: number
}

const initialState: TimerSlice = {
  seconds: 10,
  state: TimerState.Stopped,
  remaining: 0,
  lastTick: -1,
}

const INTERVAL = 1000

const hasTimerState = (state: unknown): state is { timer: TimerSlice } =>
  !!state && typeof state === 'object' && 'timer' in state
const isTimerRunning = (getState: () => unknown): boolean => {
  const state = getState()
  return hasTimerState(state) && state.timer.state === TimerState.Running
}

const tick = createAsyncThunk(
  'timer/tick',
  (_, { dispatch, getState }) =>
    new Promise<void>(resolved => {
      setTimeout(() => {
        resolved()
        if (isTimerRunning(getState)) {
          dispatch(tick())
        }
      }, INTERVAL)
    }),
)

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    run: state => {
      state.state = TimerState.Running
    },
    stop: state => {
      state.state = TimerState.Stopped
    },
    toggle: state => {
      state.state === TimerState.Running ? TimerState.Stopped : TimerState.Running
    },
  },
  extraReducers: builder => {
    builder.addCase(tick.fulfilled, state => {
      if (state.state === TimerState.Running) {
        if (state.remaining <= 0) {
          state.remaining = state.seconds
        } else {
          state.remaining--
        }
      }
    })
  },
})

export const start = createAsyncThunk('timer/start', async (_, { dispatch }) => {
  dispatch(timerSlice.actions.run())
  dispatch(tick())
})

export const { stop, toggle } = timerSlice.actions

export default timerSlice.reducer
