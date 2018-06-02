import { combineReducers } from 'redux'

import nav from './nav'
import contactsReducer from '../contacts/reducers'
import productsReducer from '../products/reducers'

const appReducer = combineReducers({
  nav,
  contactsReducer,
  productsReducer
})

export default appReducer
