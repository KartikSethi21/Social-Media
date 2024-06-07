import axios from "axios";

export const likePost=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LikeRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.get(`/api/v1/post/${id}`);
        
        dispatch({
            type:"LikeSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"LikeFailure",
            payload:error.response.data.message,
        })
    }
};


export const addCommentOnPost=(id,comment)=>async(dispatch)=>{
    try {
        dispatch({
            // AddCommentRequest
            type:"AddCommentRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.put(`/api/v1/posts/comment/${id}`,{
            comment
        });
        
        dispatch({
            type:"AddCommentSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"AddCommentFailure",
            payload:error.response.data.message,
        })
    }
};


export const deleteCommentOnPost=(id,commentId)=>async(dispatch)=>{
    try {
        dispatch({
            // AddCommentRequest
            type:"deleteCommentRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.delete(`/api/v1/posts/comment/${id}`,{
            data:{commentId},
        });
        
        dispatch({
            type:"deleteCommentSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"deleteCommentFailure",
            payload:error.response.data.message,
        })
    }
};


export const createNewPost=(caption,image)=>async(dispatch)=>{
    try {
        dispatch({
            type:"newPostRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.post("/api/v1/post/upload",{caption,image});
        
        dispatch({
            type:"newPostSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"newPostFailure",
            payload:error.response.data.message,
        })
    }
};

export const updatePost=(caption,id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"updateCaptionRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.put(`/api/v1/post/${id}`,{
            caption,
        });
        
        dispatch({
            type:"updateCaptionSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"updateCaptionFailure",
            payload:error.response.data.message,
        })
    }
};
export const deletePost=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"deletePostRequest"
        });
        //Data Fetching using axios

        const {data}=await axios.delete(`/api/v1/post/${id}`);
        
        dispatch({
            type:"deletePostSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        
        dispatch({
            type:"deletePostFailure",
               // deletePostFailure
            payload:error.response.data.message,
        })
    }
};