import initialState from '../initialState/initialState'
import * as actionTypes from "../actions/actionTypes";

export default function contactsReducer(state=initialState.contacts, action){
  switch(action.type){
    //fetch contact reducers
    case actionTypes.FETCH_CONTACTS_BEGIN:{
      return {
        ...state, 
        isFetching: true,
        errorFetching: null
      }
    }
    case actionTypes.FETCH_CONTACTS_SUCCESS:{
      return {
        ...state,
        isFetching: false,
        errorFetching: null,
        contactList: action.payload
      }
    }
    case actionTypes.FETCH_CONTACTS_FAILURE:{
      return {
        ...state,
        isFetching: false,
        errorFetching: action.payload
      }
    }

    //add contact reducers
    case actionTypes.ADD_CONTACT_BEGIN:{
      return{
        ...state, isAddingContact: true
      }
    }
    case actionTypes.ADD_CONTACT_SUCCESS:{
      return{
        ...state, isAddingContact: false
      }
    }
    case actionTypes.ADD_CONTACT_FAILURE:{
      return{
        ...state, isAddingContact: false
      }
    }

    case actionTypes.DELETE_CONTACT:{
      let newContactList = state.contactList.filter(
        contact => contact.id !== action.payload
      )
      return{
        ...state, contactList: newContactList,
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