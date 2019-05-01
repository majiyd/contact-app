import initialState from '../initialState/initialState'
import * as actionTypes from '../actions/actionTypes'

export default function uiReducer(state=initialState, action){
  switch(action.type){
    case actionTypes.CLICKED_ON_CONTACTS_PAGE_LINK:{
      console.log("clicked on Link")
      return {
        ...state
      }
    }
    default:
      return state;
  }
}