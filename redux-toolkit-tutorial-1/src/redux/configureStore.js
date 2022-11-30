import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from './CounterSlice'
import testSlice from './TestSlice'

const reducer = combineReducers({
    counter: counterSlice,
    test: testSlice
})

export const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware({thunk: false})]
})

export default store