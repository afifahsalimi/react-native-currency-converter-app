import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'

import { deviceReducer } from '@reducers/device'
import { currencyReducer } from '@reducers/currency'

const rootReducer = combineReducers({
    device: deviceReducer,
    currency: currencyReducer
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))