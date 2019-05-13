import { fetchContactsBegin, fetchContactsSuccess, fetchContactsFailure } from "./contactActionCreators";
import * as api from '../../../API/API';
import Axios from 'axios';

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
      })
  }
}