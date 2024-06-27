import { useReducer } from "react";
import { createContext } from "react";
const DEFAULT_CONTEXT ={postList:[],addpost:()=>{},deletePost:()=>{},};

const PostList =  createContext(DEFAULT_CONTEXT)

const postListReduce =(currPostList,action)=>{
    return currPostList
}

const PostListProvider =({children})=>{
    const addpost = ()=>{
        
    }

    const deletePost = ()=>{

    }

    const[postList,dispatchPostList]=useReducer(postListReduce,[])
        return <PostList.Provider value={{postList:postList,addpost:addpost,deletePost:deletePost}}>
            {children}
        </PostList.Provider>
}

export default PostListProvider