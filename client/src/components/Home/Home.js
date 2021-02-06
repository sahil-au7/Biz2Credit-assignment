import React, { useEffect } from "react";
import "./Home.css";
import Card from "./Card";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { getUser } from "../../actions/user";
import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((payload) => payload.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return !users.length ? (
    <CircularProgress className="loader" />
  ) : (
    <div className="home">
      <div className="home__title">
        <h1>List Of Users</h1>
        <Button variant="contained" color="primary">
          Create New Users
        </Button>
      </div>
      <div className="home__cards">
        {users?.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
