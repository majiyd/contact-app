import * as actionTypes from '../actionTypes'

export function inputContactName(value){
  return{
    type: actionTypes.INPUT_CONTACT_NAME,
    payload: value
  }
}
export function inputContactNumber(value){
  return{
    type: actionTypes.INPUT_CONTACT_NUMBER,
    payload: value
  }
}
export function addNewContact(name, number){
  return{
    type: actionTypes.ADD_NEW_CONTACT,
    payload: {
      name: name,
      number: number,
    }
  }
}
export function deleteContact(id){
  return{
    type: actionTypes.DELETE_CONTACT,
    payload: id,
  }
}

//fetch contacts action creators
export function fetchContactsBegin(){
  return{
    type: actionTypes.FETCH_CONTACTS_BEGIN
  }
}
export function fetchContactsSuccess(contacts){
  return{
    type: actionTypes.FETCH_CONTACTS_SUCCESS,
    payload: contacts,
  }
}
export function fetchContactsFailure(error){
  return{
    type: actionTypes.FETCH_CONTACTS_FAILURE,
    payload: error,
  }
}

//add contact action creators
export function addContactBegin() {
  return{
    type: actionTypes.ADD_CONTACT_BEGIN
  }
}
export function addContactSuccess() {
  
}
export function addContactFailure() {
  
}