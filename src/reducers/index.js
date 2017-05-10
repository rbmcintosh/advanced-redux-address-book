import {combineReducers} from 'redux';

function users(state=[],action) {
    return state;
}

function currentUser(state={},action) {
    if(action.type === "SET_CURRENT_USER"){
      return action.value;
    }
    return state;
}

function searchText(state="",action) {
    if(action.type === "SET_SEARCH_TEXT") {
      return action.value;
    }
    return state;
}

const rootReducer = combineReducers({
users,
searchText,
currentUser
});

export default rootReducer;