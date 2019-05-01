import initialState from '../initialState/initialState'

export default function uiReducer(state=initialState, action){
  switch(action.type){
    case "CLICKED ON LINK":{
      console.log("clicked on Link")
      return {
        ...state
      }
    }
    default:
      return state;
  }
}