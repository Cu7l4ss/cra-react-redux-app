import {createStore, combineReducers} from "redux";

const noopReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mainReducers = combineReducers({
  noopReducer
});


export default createStore(mainReducers);