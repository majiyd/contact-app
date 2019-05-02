import initialState from "../initialState/initialState";
import * as actionTypes from "../actions/actionTypes";

/**
 * @desc a reducer is a pure function that determines the new state of the application based on the previous state and an action
 * an action is a simple string or object that describes what action has been taken
 * @params state, action
 * @returns state
 *
 */
export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case actionTypes.CLICK_ON_CONTACTS_PAGE_LINK: {
      console.log("clicked on CONTACT PAGE");
      return {
        ...state, links:{
          ...state.links,
          isContactPageLinkActive: true
        }
      };
    }
    case actionTypes.CLICK_ON_ADD_CONTACT_LINK:{
      console.log('clicked on add new contact')
      return{
        ...state, links: {
          ...state.links, 
          isContactPageLinkActive: false
        }
      }
    }
    default:
      return state;
  }
}
