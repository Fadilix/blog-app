import React, { useState } from "react";
import "../scss/Auth.scss"
import toast from "react-hot-toast";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {

  // initial state of the data
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  // const navigate = useNavigate();
  console.log(data)


  //handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //check if there is data in the fields
    if (!data.name || !data.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const passwordInputs = document.querySelectorAll("input[type=" + "password" + "]")
    passwordInputs.forEach((input) => {
      input.classList.remove("error");
    })

    axios.post(
      "http://localhost:8081/login",
      { name: data.name, password: data.password }
    ).then((response) => {
      console.log(response);
    })

    // reset the data to empty string
    setData({
      name: "",
      password: "",
    });
    // navigate("/blogs");
    toast.success("Logined Successfully");
  }


  // handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form-border">
        <div>
          <h1>Login</h1>
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

          <button type="submit">Login</button>
        </form>
      </div>

    </div>
  );
};

export default Login;