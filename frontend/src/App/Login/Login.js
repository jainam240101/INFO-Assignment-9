import React, { useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setdata] = useState({
    email: "jainamm47@gmail.com",
    password: "Jainam1234!",
  });
  const [message, setmessage] = useState("");

  let navigate = useNavigate();

  const change = (e) => {
    const temp = { ...data };
    temp[e.target.name] = e.target.value;
    setdata(temp);
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(password);
  };

  const submit = async () => {
    try {
      if (!validateEmail(data.email) && !validatePassword(data.password)) {
        throw new Error("Validation failed");
      }
      console.log(data);
      const apiData = await axios.post(
        "http://localhost:8080/user/login",
        data
      );
      setmessage(apiData.data.data.message);
      localStorage.setItem("user", true);
      console.log(apiData.data.data.message);
      navigate("/home");
    } catch (error) {
      console.log(error.response);
      setmessage(error.response.data.error);
    }
  };

  return (
    <div className={classes.inputContainer}>
      <input
        className={classes.Input}
        name="email"
        type="email"
        placeholder="harvey@pearsonspecter.com"
        value={data.email}
        onChange={change}
      />
      <input
        password="*******"
        type="password"
        className={classes.Input}
        name="password"
        placeholder="Enter Password"
        value={data.password}
        onChange={change}
      />
      <button onClick={submit} className={classes.Submit}>
        Submit
      </button>
      <br />
      <div>{message}</div>
    </div>
  );
};

export default Login;
