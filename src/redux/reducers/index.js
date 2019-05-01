import {combineReducers} from 'redux'
import contactsReducer from './contactsReducer'
import uiReducer from './uiReducer'

/**
 * @desc all the app reducers are combined into a single via redux's combineReducers 
 * @param contactsReducer, uiReducer
 * @returns rootReducer
 * 
 */
const rootReducer = combineReducers({
  contacts: contactsReducer,
  ui: uiReducer,
})

export default rootReducer