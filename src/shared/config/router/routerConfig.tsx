import { Navigate } from "react-router-dom";
import { lazy } from "react";

const FriendsList = lazy(() => import("pages/friends/friends"));
const FriendDetails = lazy(() => import("pages/friends/friend-details"));
const CreateFriend = lazy(() => import("pages/friends/create-friend"));
const EditFriend = lazy(() => import("pages/friends/edit-friend"));
const NotFound = lazy(() => import("pages/not-found"));

export const routes = [
  {
    path: "/",
    component: <Navigate to="/friends" />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: "/friends",
    component: <FriendsList/>,
  },
  {
    path: "/friends/new",
    component: <CreateFriend />,
  },
  {
    path: "/friends/:id",
    component: <FriendDetails />,
  },
  {
    path: "/friends/:id/edit",
    component: <EditFriend />,
  },
];
