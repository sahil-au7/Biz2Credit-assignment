import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";

export const reducers = combineReducers({ auth, user });
