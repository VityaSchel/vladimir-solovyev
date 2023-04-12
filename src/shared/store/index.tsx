import { configureStore } from '@reduxjs/toolkit'
import { scoreSlice } from '@/shared/store/reducers/score'

const store = configureStore({
  reducer: {
    score: scoreSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store