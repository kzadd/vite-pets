import { configureStore } from '@reduxjs/toolkit'
import Reducers from './reducers'

const store = configureStore({ reducer: Reducers })

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export default store
