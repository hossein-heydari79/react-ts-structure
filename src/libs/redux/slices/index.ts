import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterSlice from './counter'

const countPersistConfig = {
  key: 'count',
  storage,
  whitelist: ['value'],
}

const reducers = combineReducers({
  count: persistReducer(countPersistConfig, counterSlice),
})

export default reducers
