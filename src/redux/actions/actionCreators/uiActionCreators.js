import * as actionTypes from '../actionTypes'
/**
 * action creators makes it easier to call and dispatch action types
 */
export function applyClickedOnAddContactLink(){
  /**
   * @desc creates a CLICKED_ON_CONTACTS_PAGE_LINK action
   * @returns actionType, perhaps, a payload
   */
  return {
    type: actionTypes.CLICKED_ON_CONTACTS_PAGE_LINK
  }
}