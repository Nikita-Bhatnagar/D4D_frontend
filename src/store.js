import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDetailsReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  projectDetailsReducer,
  projectListReducer,
  projectCreateReducer,
  projectUpdateReducer,
  projectDeleteReducer,
  likedProjectReducer,
  viewedProjectReducer,
} from "./reducers/projectReducer";
import {
  commentListReducer,
  commentCreateReducer,
  commentDeleteReducer,
  commentUpdateReducer,
  replyCreateReducer,
} from "./reducers/CommentReducers";
import {
  collectionCreateReducer,
  collectionDeleteReducer,
  collectionDetailsReducer,
  collectionListReducer,
  collectionUpdateReducer,
  saveProjectReducer,
} from "./reducers/CollectionReducer";

const reducers = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  projectDetails: projectDetailsReducer,
  projectList: projectListReducer,
  projectCreate: projectCreateReducer,
  projectUpdate: projectUpdateReducer,
  projectDelete: projectDeleteReducer,
  commentCreate: commentCreateReducer,
  commentList: commentListReducer,
  commentDelete: commentDeleteReducer,
  commentUpdate: commentUpdateReducer,
  projectDetails: projectDetailsReducer,
  likedProjects: likedProjectReducer,
  viewedProjects: viewedProjectReducer,
  replyCreate: replyCreateReducer,
  collectionCreate: collectionCreateReducer,
  collectionUpdate: collectionUpdateReducer,
  collectionDelete: collectionDeleteReducer,
  collectionList: collectionListReducer,
  collectionDetails: collectionDetailsReducer,
  saveProject: saveProjectReducer,
});

const userInfoFromStorage =
  JSON.parse(localStorage.getItem("userInfo")) || null;

const userFromStorage = JSON.parse(localStorage.getItem("userDetails")) || null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userDetails: { user: userFromStorage },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
