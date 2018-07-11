import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import nav from './nav'
import galerysReducer from "../galery/reducers";

const appReducer = combineReducers({
  nav,
  form,
  galerysReducer
});

export default appReducer
