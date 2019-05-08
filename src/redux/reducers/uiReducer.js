import initialState from "../initialState/initialState";
import * as actionTypes from "../actions/actionTypes";
import uniqid from 'uniqid'

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
      return {
        ...state, links:{
          ...state.links,
          isContactPageLinkActive: true
        }, pages:{
          ...state.pages, isContactsPageVisible: true
        }
      };
    }
    case actionTypes.CLICK_ON_ADD_CONTACT_LINK:{
      return{
        ...state, links: {
          ...state.links, 
          isContactPageLinkActive: false
        }, pages:{
          ...state.pages, isContactsPageVisible: false
        }
      }
    }
    case actionTypes.SEND_NOTIFICATION:{
      const newNotification = {
        id: uniqid('notification-'),
        type: action.payload.type,
        message: action.payload.message,
      }
      return{
        ...state, notifications:[
          ...state.notifications, newNotification
        ],
      }
    }
    case actionTypes.DELETE_NOTIFICATION:{
      let notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
      return{
        ...state, notifications: notifications
      }
    }
    default:
      return state;
  }
}
