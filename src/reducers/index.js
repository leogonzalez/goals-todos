import loading from "./loadingReducer";
import goals from "./goalsReducer";
import todos  from "./todosReducer";
import { combineReducers } from "redux";

export default combineReducers({
  todos,
  goals,
  loading
});
