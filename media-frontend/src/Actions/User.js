import axios from "axios";

export const loginUser=(email,password)=>async(dispatch)=>{
    // let axiosConfig = {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    //   };
    try {
        dispatch({
            type:"LoginRequest"
        })
        //Data Fetching using axios

        const {data}=await axios.post(
            "/api/v1/login",
            {email,password});
        
        dispatch({
            type:"LoginSuccess",
            payload:data.user,
        });
        
    } catch (error) {
        
        dispatch({
            type:"LoginFailure",
            payload:error.response.data.message,
        })
    }
};

export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoadUserRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.get("/api/v1/me");
        
        dispatch({
            type:"LoadUserSuccess",
            payload:data.user,
        });
        
    } catch (error) {
        
        dispatch({
            type:"LoadUserFailure",
            payload:error.response.data.message,
        })
    }
};

export const getFollowingPosts=()=>async(dispatch)=>{

    try {
        dispatch({
            type:"postofFollowingRequest"
               // postofFollowingRequest
             
        });

        const {data}=await axios.get("/api/v1/posts");

        dispatch({
            type:"postofFollowingSuccess",
            payload:data.posts,
        })
        
    } catch (error) {
        dispatch({
            type:"postofFollowingFailure",
               // postofFollowingFailure
            payload:error.response.data.message,
        })
        
    }
}


export const getAllUsers=(name="")=>async(dispatch)=>{

    try {
        dispatch({
            type:"allUsersRequest"
               // allUsersRequest
        });

        const {data}=await axios.get(`/api/v1/users?name=${name}`);

        dispatch({
            type:"allUsersSuccess",
            payload:data.user,
        })
        
    } catch (error) {
        dispatch({
            type:"allUsersFailure",
            payload:error.response.data.message,
        })
        
    }
}


export const getMyPosts=()=>async(dispatch)=>{

    try {
        dispatch({
            type:"myPostsRequest"
        });

        const {data}=await axios.get("/api/v1/my/posts");

        dispatch({
            type:"myPostsSuccess",
            payload:data.posts,
        })
        
    } catch (error) {
        dispatch({
            type:"myPostsFailure",
            payload:error.response.data.message,
        })
        
    }
};

export const logoutUser=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LogoutUserRequest"
        })
        //Data Fetching using axios

        await axios.get("/api/v1/logout");
        
        dispatch({
            type:"LogoutUserSuccess",
        });
        
    } catch (error) {
        
        dispatch({
            type:"LogoutUserFailure",
            payload:error.response.data.message,
        })
    }
};

// RegisterRequest


export const registerUser=(name,email,password,avatar)=>async(dispatch)=>{
    // name,email,password,avatar
    try {
        dispatch({
            type:"RegisterRequest"
        })
        //Data Fetching using axios

        const {data}=await axios.post(
            "/api/v1/register",{name,email,password,avatar});
        
        dispatch({
            type:"RegisterSuccess",
            payload:data.user,
        });
        
    } catch (error) {
        dispatch({
            type:"RegisterFailure",
            payload:error,
        })
    }
};


export const updateProfile=(name,email,avatar)=>async(dispatch)=>{
    try {
        dispatch({
            type:"updateProfileRequest"
               // updateProfileRequest
        })
        //Data Fetching using axios

        const {data}=await axios.put("/api/v1/update/profile",{name,email,avatar});
        
        dispatch({
            type:"updateProfileSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"updateProfileFailure",
            payload:error.response.data.message,
        })
    }
};



export const updatePassword=(oldPassword,newPassword)=>async(dispatch)=>{
    try {
        dispatch({
            type:"updatePasswordRequest"
               // updateProfileRequest
        })
        //Data Fetching using axios

        const {data}=await axios.put(
            "/api/v1/update/password",
            {oldPassword,newPassword});
        
        dispatch({
            type:"updatePasswordSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"updatePasswordFailure",
            payload:error.response.data.message,
        })
    }
};

export const deleteMyProfile=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"deleteProfileRequest"
               // updateProfileRequest
        })
        //Data Fetching using axios

        const {data}=await axios.delete("/api/v1/delete/me");
        
        dispatch({
            type:"deleteProfileSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"deleteProfileFailure",
            payload:error.response.data.message,
        })
    }
};

export const forgotPassword=(email)=>async(dispatch)=>{
    try {
        dispatch({
            type:"forgotPasswordRequest"
               // forgotPasswordSuccess
        })
        //Data Fetching using axios

        const {data}=await axios.post("/api/v1/forget/password",{
            email,
        });
        
        dispatch({
            type:"forgotPasswordSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"forgotPasswordFailure",
            payload:error.response.data.message,
        })
    }
};

export const resetPassword=(token,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"resetPasswordRequest"
               // updateProfileRequest
        })
        //Data Fetching using axios

        const {data}=await axios.put(`/api/v1/password/reset/${token}`,{
            password,
        });
        
        dispatch({
            type:"resetPasswordSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"resetPasswordFailure",
            payload:error.response.data.message,
        })
    }
};


export const getUserPosts=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"userPostsRequest"
        });

        const {data}=await axios.get(`/api/v1/userposts/${id}`);
        
        dispatch({
            type:"userPostsSuccess",
            payload:data.posts,
        })
        
    } catch (error) {
        dispatch({
            type:"userPostsFailure",
            payload:error.response.data.message,
        })
        
    }
};

export const getUserProfile=(id)=>async(dispatch)=>{

    try {
        dispatch({
            type:"userProfileRequest"
        });

        const {data}=await axios.get(`/api/v1/user/${id}`);
        
        dispatch({
            type:"userProfileSuccess",
            payload:data.user,
        })
        
    } catch (error) {
        dispatch({
            type:"userProfileFailure",
            payload:error.response.data.message,
        })
        
    }
};

export const followAndUnfollowUser=(id)=>async(dispatch)=>{

    try {
        dispatch({
            type:"followUserRequest"
        });

        const {data}=await axios.get(`/api/v1/follow/${id}`);
        
        dispatch({
            type:"followUserSuccess",
            payload:data.user,
        })
        
    } catch (error) {
        dispatch({
            type:"followUserFailure",
            payload:error.response.data.message,
        })
        
    }
};