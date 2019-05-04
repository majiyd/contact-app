import initialState from '../initialState/initialState'
import * as actionTypes from "../actions/actionTypes";

export default function contactsReducer(state=initialState.contacts, action){
  switch(action.type){
    case actionTypes.ADD_NEW_CONTACT:{
      console.log("new Contact Added")
      return {
        ...state
      }
    }
    case actionTypes.INPUT_CONTACT_NAME:{
      console.log("input contact name")
      return {
        ...state
      }
    }
    case actionTypes.INPUT_CONTACT_NUMBER:{
      console.log("input contact number")
      return {
        ...state
      }
    }
    default:
      return state;
  }
}