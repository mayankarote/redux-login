import React from "react";
import "./App.css";
import Login from "./components/Login";
import { selectUser } from "./reducer/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
