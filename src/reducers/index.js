import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { alert } from "./alertReducer";

const rootReducer = combineReducers({
  authentication: authentication,
  alert
});

export default rootReducer;
