const Post=require("../models/Post");
const User=require("../models/Users");
const cloudinary=require("cloudinary").v2;

exports.createPost=async(req,res)=>{
    try{
        // console.log(req.body);
        // console.log(req.file)
        const{caption,image}=req.body;

        // const myCloud=await cloudinary.uploader.upload(image,{folder:"posts",resource_type:"auto"}); 

        const newPostData={
            caption:caption,
            image:{public_id:image,url:image},
            owner:req.user._id,
        };
        
        const newPost=await Post.create(newPostData);
        const user=await User.findById(req.user._id);

        user.posts.unshift(newPost._id); 
        
        user.save();
        // Post.save();


        res.status(201).json({
            success:true,
            post:newPost,
            message:"Post created",
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}


exports.deletePost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found",
            });
        } 
        if(post.owner.toString()!==req.user._id.toString()){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        // cloudinary.uploader.destroy(post.image.public_id);
        await post.deleteOne(); 
        const user=await User.findById(req.user._id);
        const index=user.posts.indexOf(req.params.id);
        user.posts.splice(index,1);
        await user.save();
        res.status(200).json({ 
            success:true,
            message:"Post Deleted",
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
   
}



exports.likeAndUnlikePost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not found",
            });
        }
        if(post.likes.includes(req.user._id)){
            const index=post.likes.indexOf(req.user._id);
            post.likes.splice(index,1);
            await post.save();
            return res.status(200).json({
                success:true,
                message:"Post Unliked"
            });
        }
        // Only for like
          // post.likes.push(req.user._id);
        // await post.save();
        else{
              post.likes.push(req.user._id);
              await post.save();
              return res.status(200).json({
                success:true,

                message:"Post Liked"
            });
        }
      
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
        
    }
}

exports.getPostofFollowing= async(req,res)=>{
    try{
        // const user=await User.findById(req.user._id).populate("following","posts");
        //--OR
        const user=await User.findById(req.user._id);
        const posts=await Post.find({
            owner:{
                $in:user.following,
            }
        }).populate("owner likes comments.user");
        res.status(200).json({
            success:true,
            // following:user.following,
            posts:posts.reverse(),
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
        
    }
};


exports.updateCaption=async (req,res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                success:false,
                message:"Post not Found",
            });
        }
        //only post owner should be able to update caption
        if(post.owner.toString()!== req.user._id.toString()){
            return res.status(404).json({
                success:false,
                message:"Unauthorized",
            });   
        }
        post.caption=req.body.caption;
            await post.save();
            res.status(200).json({
                success:true,
                message:"Post Updated"
            });
        
        } 
        catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
            });        
        }
    }

    exports.CommentOnPost=async (req,res)=>{
        try {
            const post=await Post.findById(req.params.id);
            if(!post){
                return res.status(404).json({
                    success:false,
                    message:"Post not Found",
                });
            }
            let commentIndex= -1;
            //Checking if Comment already exist

            post.comments.forEach((item,index)=> {
                if(item.user.toString() === req.user._id.toString()){
                    commentIndex=index;
                }
            });
            if (commentIndex !== -1) {
                post.comments[commentIndex].comment =req.body.comment;
                await post.save();
                return res.status(200).json({
                    success:true,
                    message:"Comment Added",
                });   
                
            } else {
                post.comments.push({
                    user:req.user._id,
                    comment:req.body.comment,
                });
                await post.save();
                return res.status(200).json({
                    success:true,
                    message:"Comment Added",
                })   ;
                
            }
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message,
                });        
            }            
}

exports.deleteComment= async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({
                success:false,
                message:"Post not Found",
            });
        }
        //Checking if owner wants to delete
        if(post.owner.toString() === req.user._id.toString()){
            if(req.body.commentId==undefined){
                return res.status(400).json({
                    success:false,
                    message:"Comment Id is required",
                });
            }
            post.comments.forEach((item,index)=> {
                if(item._id.toString() === req.body.commentId.toString()){
                    return post.comments.splice(index,1);
                }
            });
            await post.save();

            return res.status(200).json({
                success:true,
                message:"Selected Comment has been deleted"
            })
        }
         else {

            post.comments.forEach((item,index)=> {
                if(item.user.toString() === req.user._id.toString()){
                    return post.comments.splice(index,1);
                }
            });
            await post.save();

            return res.status(200).json({
                success:true,
                message:"Your Comment has been deleted"
            });
            
        }
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
            });          
    }
}