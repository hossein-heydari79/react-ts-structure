import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { CounterSlice } from './interface'

const initialState: CounterSlice = {
  value: 0,
  price: 100,
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    increasePrice: (state, action: PayloadAction<number>) => {
      state.price += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, increasePrice } =
  counterSlice.actions

export default counterSlice.reducer
