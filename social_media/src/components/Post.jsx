import React, { useContext } from 'react';
import { PostList } from '../components/post-list-store';

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.body}
        </p>
        <div className="likes" style={{ fontSize: "14px", fontWeight: "bolder", margin: "4px 2px" }}>
          Likes: {post.reactions}
        </div>
        <a href="#" className="btn btn-danger" onClick={() => deletePost(post.id)}>
          Delete
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {post.tags.map((tag, index) => (
            <p key={index} style={{ fontSize: "15px", color: "grey", margin: "4px 2px" }}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
