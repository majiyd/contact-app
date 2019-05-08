import * as actionTypes from '../actionTypes'
/**
 * action creators makes it easier to call and dispatch action types
 */
export function clickOnAddContactLink(){
  /**
   * @desc creates a CLICKED_ON_CONTACTS_PAGE_LINK action
   * @returns actionType, perhaps, a payload
   */
  return {
    type: actionTypes.CLICK_ON_ADD_CONTACT_LINK
  }
}
export function clickOnContactsPageLink(){
  return{
    type: actionTypes.CLICK_ON_CONTACTS_PAGE_LINK
  }
}
export function deleteNotification(id){
  return{
    type: actionTypes.DELETE_NOTIFICATION,
    payload: id
  }
}

export function sendNotification(type, message){
  return{
    type: actionTypes.SEND_NOTIFICATION,
    payload: {
      type: type,
      message: message,
    }
  }
}