import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Friend, FriendsState } from "./types";

const initialState: FriendsState = {
  friendList: [
    {
      id: 1,
      firstName: "Blob",
      lastName: "Lefter",
      phoneNumber: "+2321233923",
      email: "blob@gmail.com",
      twitter: "@Blobb",
    },
  ],
};

export const friendsSlice = createSlice({
  name: "firends",
  initialState,
  reducers: {
    addFriend: (state, { payload }: PayloadAction<Friend>) => {
      state.friendList.push(payload);
    },
    editFriend: (state, { payload }: PayloadAction<Friend>) => {
      //TODO: to be done when we'll have the filled firend object
      const newFiendList = state.friendList.map((item) => (item.id === payload.id ? payload : item));

      return {
        ...state,
        friendList: newFiendList,
      }
    },
    removeFriend: (state, { payload }: PayloadAction<number>) => {
      const updatedFriendList = state.friendList.filter(({ id }) => id != payload);

      return {
        ...state,
        friendList: updatedFriendList
      }
    },
  },
});

export const { addFriend, editFriend, removeFriend } = friendsSlice.actions;
