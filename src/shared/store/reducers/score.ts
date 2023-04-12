import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface ScoreState {
  correct: number
  wrong: number
}

const initialState: ScoreState = {
  correct: 0,
  wrong: 0
}

export const scoreSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    correctAnswer: (state) => {
      state.correct += 1
    },
    wrongAnswer: (state) => {
      state.wrong += 1
    }
  },
})

export const { correctAnswer, wrongAnswer } = scoreSlice.actions

export const selectScore = (state: RootState) => state.score

export default scoreSlice.reducer