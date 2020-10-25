const { combineReducers } = require("redux");
const { default: counterReducer } = require("./counter");
const { default: loggedReducer } = require("./isLogged");

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;