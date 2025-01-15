
import { createReducer,createAction } from "@reduxjs/toolkit";
const initialState={
    // isAuthenticated:false
};

const LikeRequest = createAction('LikeRequest');
const LikeSuccess = createAction('LikeSuccess');
const LikeFailure = createAction('LikeFailure');

const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

const AddCommentRequest = createAction('AddCommentRequest');
const AddCommentSuccess = createAction('AddCommentSuccess');
const AddCommentFailure = createAction('AddCommentFailure');

const deleteCommentRequest = createAction('deleteCommentRequest');
const deleteCommentSuccess = createAction('deleteCommentSuccess');
const deleteCommentFailure = createAction('deleteCommentFailure');

const newPostRequest = createAction('newPostRequest');
const newPostSuccess = createAction('newPostSuccess');
const newPostFailure = createAction('newPostFailure');

const updateCaptionRequest = createAction('updateCaptionRequest');
const updateCaptionSuccess = createAction('updateCaptionSuccess');
const updateCaptionFailure = createAction('updateCaptionFailure');

const deletePostRequest = createAction('deletePostRequest');
const deletePostSuccess = createAction('deletePostSuccess');
const deletePostFailure = createAction('deletePostFailure');

const updateProfileRequest = createAction('updateProfileRequest');
const updateProfileSuccess = createAction('updateProfileSuccess');
const updateProfileFailure = createAction('updateProfileFailure');

const updatePasswordRequest = createAction('updatePasswordRequest');
const updatePasswordSuccess = createAction('updatePasswordSuccess');
const updatePasswordFailure = createAction('updatePasswordFailure');

const deleteProfileRequest = createAction('deleteProfileRequest');
const deleteProfileSuccess = createAction('deleteProfileSuccess');
const deleteProfileFailure = createAction('deleteProfileFailure');

const forgotPasswordRequest = createAction('forgotPasswordRequest');
const forgotPasswordSuccess = createAction('forgotPasswordSuccess');
const forgotPasswordFailure = createAction('forgotPasswordFailure');

const resetPasswordRequest = createAction('resetPasswordRequest');
const resetPasswordSuccess = createAction('resetPasswordSuccess');
const resetPasswordFailure = createAction('resetPasswordFailure');


const followUserRequest = createAction('followUserRequest');
const followUserSuccess = createAction('followUserSuccess');
const followUserFailure = createAction('followUserFailure');

export const likeReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(LikeRequest,(state)=>{
        state.loading=true

    })
    .addCase(LikeSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase(LikeFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(AddCommentRequest,(state)=>{
        state.loading=true

    })
    .addCase(AddCommentSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase(AddCommentFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(deleteCommentRequest,(state)=>{
        state.loading=true

    })
    .addCase(deleteCommentSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
 
    })
    .addCase(deleteCommentFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(updateCaptionRequest,(state)=>{
        state.loading=true

    })
    .addCase(updateCaptionSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(updateCaptionFailure,(state,action)=>{
        state.loading=true;
        state.error=action.payload;
    })
    .addCase(newPostRequest,(state)=>{
        state.loading=true
    })
    .addCase(newPostSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        state.post=action.payload;
    })
    .addCase(newPostFailure,(state,action)=>{
        state.loading=true;
        state.error=action.payload;
    })
    .addCase(deletePostRequest,(state)=>{
        state.loading=true
    })
    .addCase(deletePostSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(deletePostFailure,(state,action)=>{
        state.loading=true;
        state.error=action.payload;
    })
    .addCase(updateProfileRequest,(state)=>{
        state.loading=true
    })
    .addCase(updateProfileSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(updateProfileFailure,(state,action)=>{
        state.loading=true;
        state.error=action.payload;
    })
    .addCase(updatePasswordRequest,(state)=>{
        state.loading=true
    })
    .addCase(updatePasswordSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(updatePasswordFailure,(state,action)=>{
        state.loading=true;
        state.error=action.payload;
    })
    .addCase(deleteProfileRequest,(state)=>{
        state.loading=true

    })
    .addCase(deleteProfileSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase(deleteProfileFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(forgotPasswordRequest,(state)=>{
        state.loading=true

    })
    .addCase(forgotPasswordSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase(forgotPasswordFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(resetPasswordRequest,(state)=>{
        state.loading=true

    })
    .addCase(resetPasswordSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase(resetPasswordFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(followUserRequest,(state)=>{
        state.loading=true

    })
    .addCase(followUserSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase(followUserFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })
    .addCase(clearMessage,(state)=>{
        state.message=null;
    })

});



const myPostsRequest = createAction('myPostsRequest');
const myPostsSuccess = createAction('myPostsSuccess');
const myPostsFailure = createAction('myPostsFailure');


export const myPostReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(myPostsRequest,(state)=>{
        state.loading=true
    })
    .addCase(myPostsSuccess,(state,action)=>{
        state.loading=false;
        state.posts=action.payload;

    })
    .addCase(myPostsFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })
});


const userPostsRequest = createAction('userPostsRequest');
const userPostsSuccess = createAction('userPostsSuccess');
const userPostsFailure = createAction('userPostsFailure');


export const userPostReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(userPostsRequest,(state)=>{
        state.loading=true
    })
    .addCase(userPostsSuccess,(state,action)=>{
        state.loading=false;
        state.posts=action.payload;

    })
    .addCase(userPostsFailure,(state,action)=>{
        state.loading=true;
        state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })
});