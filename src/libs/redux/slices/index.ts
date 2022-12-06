import { combineReducers } from '@reduxjs/toolkit'

import counterSlice from './counter'

const reducers = combineReducers({
  count: counterSlice,
})

export default reducers
