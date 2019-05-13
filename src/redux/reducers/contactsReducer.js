import initialState from '../initialState/initialState'
import * as actionTypes from "../actions/actionTypes";
import uniqid from 'uniqid'

export default function contactsReducer(state=initialState.contacts, action){
  switch(action.type){
    //fetch contact reducers
    case actionTypes.FETCH_CONTACTS_BEGIN:{
      console.log('contact fetch begins')
      return {
        ...state, 
        isFetching: true,
        errorFetching: null
      }
    }
    case actionTypes.FETCH_CONTACTS_SUCCESS:{
      console.log('contact fetch success', action.payload)
      return {
        ...state,
        isFetching: false,
        errorFetching: null,
        contacts: action.payload
      }
    }
    case actionTypes.FETCH_CONTACTS_FAILURE:{
      console.log('contact fetch failure', action.payload)
      return {
        ...state,
        isFetching: false,
        errorFetching: action.payload
      }
    }
    case actionTypes.ADD_NEW_CONTACT:{
      let newContact = {
        name: action.payload.name,
        phoneNumber: action.payload.number,
        id: uniqid('contact-')
      }
      return {
        ...state, contactList: [...state.contactList, newContact]
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