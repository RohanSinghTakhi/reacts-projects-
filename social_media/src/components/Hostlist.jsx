import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../components/post-list-store";

const PostList1 = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList1;
