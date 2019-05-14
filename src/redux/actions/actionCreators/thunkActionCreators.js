import { fetchContactsBegin, fetchContactsSuccess, fetchContactsFailure, addContactBegin, addContactSuccess, addContactFailure } from "./contactActionCreators";
import {sendNotification} from './uiActionCreators'
import * as api from '../../../API/API';
import Axios from 'axios';
import uniqid from 'uniqid'

export function fetchContactsActionCreator(){
  return dispatch => {
    dispatch(fetchContactsBegin())
    
    return Axios.get(api.FETCH_CONTACTS)
      .then(response => {
        dispatch(fetchContactsSuccess(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchContactsFailure(error))
        dispatch(sendNotification('error', 'Failed to fetch contacts!'))
      })
  }
}

export function addContactActionCreator(name, number){
  return dispatch => {
    dispatch(addContactBegin())

    return Axios.post(api.FETCH_CONTACTS,{
      name: name,
      phoneNumber: number,
    })
      .then(response => {
        dispatch(addContactSuccess(name, number))
      })
      .catch(error => {
        dispatch(addContactFailure())
        dispatch(sendNotification('error', `Failed to add contact ${name}`))
      })
  }
}