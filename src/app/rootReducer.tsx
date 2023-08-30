import { combineReducers } from "@reduxjs/toolkit";
import { friendsSlice } from "features/friend";

export const rootReducer = combineReducers({
  friends: friendsSlice.reducer 
})