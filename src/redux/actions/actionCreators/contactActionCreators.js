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