import { combineReducers } from "redux";
import User from "./user.reducer";
import GetUser from "./get.users.reducers";
import WorkData from "./work.log.reducer";
import Helper from "./error";
const rootReducer = combineReducers({
  User,
  GetUser,
  WorkData,
  Helper,
});

export default rootReducer;
