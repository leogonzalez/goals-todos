import ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "./logger";
import checker from "./checker";

export default applyMiddleware(ReduxThunk, checker, logger);
