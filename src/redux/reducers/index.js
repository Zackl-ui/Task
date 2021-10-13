import { combineReducers } from "redux";
import User from "./user.reducer";
import GetUser from "./get.users.reducers";
const rootReducer = combineReducers({
  User,
  GetUser,
});

export default rootReducer;
