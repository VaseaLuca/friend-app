export interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  twitter: string;
}

export interface FriendsState {
  friendList: Friend[];
}

export type RootState = {
  friends: FriendsState;
}