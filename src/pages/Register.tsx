import React, { useState } from "react";
import "../scss/Auth.scss"
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {

  // initial state of the data
  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  //handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //check if there is data in the fields
    if (!data.name || !data.password || !data.confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    // check if the confirm password
    if (data.password !== data.confirmPassword) {
      // for adding the class error to the input if the confirm password does not match the password
      toast.error("Passwords do not match");
      const passwordInputs = document.querySelectorAll("input[type=" + "password" + "]")
      passwordInputs.forEach((input) => {
        input.classList.add("error");
      })
      return;

    } else {
      // for removing the class error from the input if the confirm password matches the password
      const passwordInputs = document.querySelectorAll("input[type=" + "password" + "]")
      passwordInputs.forEach((input) => {
        input.classList.remove("error");
      })

      axios.post(
        "http://localhost:8081/users",
        { name: data.name, password: data.password }
      );

      // reset the data to empty string
      setData({
        name: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
      toast.success("Registered Successfully");
    }

  };

  // handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form-border">
        <div>
          <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={data.name}
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={data.password}
            />
          </div>

          <div>
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleInputChange}
              value={data.confirmPassword}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>

    </div>
  );
};

export default Register;