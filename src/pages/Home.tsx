import React, { useState } from "react";
import Navbar from "../components/Navbar";
import usePosts from "../hooks/usePosts";
import Post from "../components/Post";
import "../scss/Home.scss";
const Home: React.FC = () => {
  const posts = usePosts();
  const [querySearch, setQuerySearch] = useState("");
  const filteredPosts = querySearch
    ? posts.filter((post) => post.title.includes(querySearch.toLowerCase()))
    : posts;
  return (
    <div className="all">
      <Navbar />
      <div className="search-blog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search a blog"
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
      </div>
      <div className="posts">
        {filteredPosts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
