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