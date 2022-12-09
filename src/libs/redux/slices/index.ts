import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { homeApi } from '../services/home'
import storage from 'redux-persist/lib/storage'
import counterSlice from './counter'

const countPersistConfig = {
  key: 'count',
  storage,
  whitelist: ['value'],
}

const reducers = combineReducers({
  count: persistReducer(countPersistConfig, counterSlice),
  [homeApi.reducerPath]: homeApi.reducer,
})

export default reducers
