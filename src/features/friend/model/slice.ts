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
  selectedFriend: undefined,
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
      
      state.friendList = [...newFiendList];
    },
    removeFriend: (state, { payload }: PayloadAction<number>) => {
      const updatedFriendList = state.friendList.filter(({ id }) => id != payload);
      
      state.friendList = [...updatedFriendList];
    },
    selectFriend: (state, action: PayloadAction<number>) => {
      state.selectedFriend = state.friendList.find((friend) => friend.id === action.payload);
    },
  },
});

export const { addFriend, editFriend, removeFriend, selectFriend } = friendsSlice.actions;
