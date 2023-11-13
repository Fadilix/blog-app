import React from "react";
import { Post } from "../hooks/usePosts";
import "../scss/Post.scss";
import { Link } from "react-router-dom";

interface PostProps {
  post: Post;
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <div className="desc">
        <div className="left">
          <h2>{post.title}</h2>
          <p>{post.description.substring(0, 400)}...</p>
        </div>
        <button className="read-more">
          <Link to={`post/${post.id}`}>Read More</Link>
        </button>
      </div>

      <div className="right">
        <img src={post.image} alt="" />
      </div>
    </div>
  );
};

export default Post;
