import initialState from '../initialState/initialState'
import * as actionTypes from '../actions/actionTypes'

export default function uiReducer(state=initialState, action){
  /**
   * @desc a reducer is a pure function that determines the new state of the application based on the previous state and an action
   * an action is a simple string or object that describes what action has been taken
   * @params state, action
   * @returns state
   * 
   */
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