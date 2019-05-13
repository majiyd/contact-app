import { fetchContactsBegin, fetchContactsSuccess, fetchContactsFailure } from "./contactActionCreators";
import Axios from 'axios';

export function fetchContactsActionCreator(){
  return dispatch => {
    dispatch(fetchContactsBegin())
    
    return Axios.get('https://my-json-server.typicode.com/majiyd/json-server/contacts/')
      .then(response => {
        dispatch(fetchContactsSuccess(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchContactsFailure(error))
      })
  }
}