import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import usePosts from "../hooks/usePosts";
import "../scss/PostDesc.scss";

const PostDesc: React.FC = () => {
  const { id } = useParams();
  const posts = usePosts();
  const post = posts.filter((post) => post.id === Number(id));
  const OtherPosts = posts.filter((post) => post.id !== Number(id));
  return (
    <div>
      <Navbar />
      <div className="desc">
        <div className="left">
          {post.map((p) => (
            <div key={p.id}>
              <img src={p.image} alt="" />
              <h1>{p.title}</h1>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
        <div className="right">
          <h2> Other posts You may like</h2>
          {OtherPosts.map((post) => (
            <div className="link" key={post.id}>
              <Link to={`/blogs/post/${post.id}`}>
                <img src={post.image} alt="" />
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDesc;
