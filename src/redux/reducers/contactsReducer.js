import initialState from '../initialState/initialState'

export default function contactsReducer(state=initialState.contacts, action){
  switch(action.type){
    case "ADD_CONTACT":{
      console.log("new Contact Added")
      return {
        ...state
      }
    }
    default:
      return state;
  }
}