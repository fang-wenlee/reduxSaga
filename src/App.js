import "./styles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/user";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);

  console.log(user);

  return (
    <div className="App">
      {user && <h1>Hello {user.firstName}</h1>}
      <h2>The alternative way to call API </h2>
    </div>
  );
}
