import { createReducer,createAction } from "@reduxjs/toolkit";
const initialState={};

const LoginRequest = createAction('LoginRequest');
const LoginSuccess = createAction('LoginSuccess');
const LoginFailure = createAction('LoginFailure');


const RegisterRequest = createAction('RegisterRequest');
const RegisterSuccess = createAction('RegisterSuccess');
const RegisterFailure = createAction('RegisterFailure');

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFailure = createAction('LoadUserFailure');

//LoadUser is for when we reload page LoinReques is removed from redux but cookie remain in application
// so to Load User Data if User is  already login




const clearErrors = createAction('clearErrors');


const LogoutUserRequest = createAction('LogoutUserRequest');
const LogoutUserSuccess = createAction('LogoutUserSuccess');
const LogoutUserFailure = createAction('LogoutUserFailure');


export const userReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(LoginRequest,(state)=>{
        state.loading=true;

    })
    .addCase(LoginSuccess,(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;

    })
    .addCase(LoginFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
        
    })
    .addCase(RegisterRequest,(state)=>{
        state.loading=true; 
    })
    .addCase(RegisterSuccess,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    })
    .addCase(RegisterFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;

    })
    .addCase(LoadUserRequest,(state)=>{
        state.loading=true;
    })
    .addCase(LoadUserSuccess,(state,action)=>{ 
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;

    })
    .addCase(LoadUserFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;

    }) 
    .addCase(LogoutUserRequest,(state)=>{
        state.loading=true;
    })
    .addCase(LogoutUserSuccess,(state)=>{ 
        state.loading=false;
        state.user=null;
        state.isAuthenticated=false;

    })
    .addCase(LogoutUserFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=true;

    }) 
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })
});


//------------------------------

const postofFollowingRequest = createAction('postofFollowingRequest');
const postofFollowingSuccess = createAction('postofFollowingSuccess');
const postofFollowingFailure = createAction('postofFollowingFailure');


export const postofFollowingReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(postofFollowingRequest,(state)=>{
        state.loading=true

    })
    .addCase(postofFollowingSuccess,(state,action)=>{
        state.loading=false;
        state.posts=action.payload;

    })
    .addCase(postofFollowingFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })

});



const allUsersRequest = createAction('allUsersRequest');
const allUsersSuccess = createAction('allUsersSuccess');
const allUsersFailure = createAction('allUsersFailure');



export const allUsersReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(allUsersRequest,(state)=>{
        state.loading=true

    })
    .addCase(allUsersSuccess,(state,action)=>{
        state.loading=false;
        state.users=action.payload;

    })
    .addCase(allUsersFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })

});




const userProfileRequest = createAction('userProfileRequest');
const userProfileSuccess = createAction('userProfileSuccess');
const userProfileFailure = createAction('userProfileFailure');



export const userProfileReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(userProfileRequest,(state)=>{
        state.loading=true

    })
    .addCase(userProfileSuccess,(state,action)=>{
        state.loading=false;
        state.user=action.payload;
    })
    .addCase(userProfileFailure,(state,action)=>{

        state.loading=true;
        state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;

    })

});