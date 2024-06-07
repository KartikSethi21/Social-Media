import {configureStore} from "@reduxjs/toolkit";
import { allUsersReducer, postofFollowingReducer, userProfileReducer, userReducer } from "./Reducers/User";
import { likeReducer, myPostReducer, userPostReducer } from "./Reducers/Post";
 

const store=configureStore({
    reducer:{
        user:userReducer,
        postofFollowing:postofFollowingReducer,
        allUsers:allUsersReducer,
        like:likeReducer,
        myPost:myPostReducer,
        userProfile:userProfileReducer,
        userPost:userPostReducer,
    },  
    
});
export default store;

