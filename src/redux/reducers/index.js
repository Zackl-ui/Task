import { combineReducers } from "redux";
import User from "./user.reducer";
import GetUser from "./get.users.reducers";
import WorkData from "./work.log.reducer";
const rootReducer = combineReducers({
  User,
  GetUser,
  WorkData,
});

export default rootReducer;
