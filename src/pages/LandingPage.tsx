import React from "react";
import "../scss/LandingPage.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const LandingPage: React.FC = () => {
  return (
    <motion.div
      className="landingpage"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <div className="quote">
        <h2>Blogify</h2>
        <p>
          Embrace the rhythm of uncertainty, for in the dance of
          unpredictability, we find the music of endless possibilities.
        </p>
        <div className="links">
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button>
            <Link to="/blogs">See Blogs</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
