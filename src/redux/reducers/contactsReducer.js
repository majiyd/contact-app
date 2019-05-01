import initialState from '../initialState/initialState'

export default function contactsReducer(state=initialState, action){
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