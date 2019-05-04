import initialState from '../initialState/initialState'
import * as actionTypes from "../actions/actionTypes";
import uniqid from 'uniqid'
export default function contactsReducer(state=initialState.contacts, action){
  switch(action.type){
    case actionTypes.ADD_NEW_CONTACT:{
      console.log("new Contact Added")
      return {
        ...state
      }
    }
    case actionTypes.INPUT_CONTACT_NAME:{
      return {
        ...state, newContact:{
          ...state.newContact, name: action.payload
        }
      }
    }
    case actionTypes.INPUT_CONTACT_NUMBER:{
      return {
        ...state, newContact:{
          ...state.newContact, phoneNumber: action.payload
        }
      }
    }
    default:
      return state;
  }
}