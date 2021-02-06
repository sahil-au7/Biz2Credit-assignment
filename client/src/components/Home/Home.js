import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";

import { Button, Paper, Grid, Container } from "@material-ui/core";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3003/api/v1/user/users")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetchData();
  });

  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Home;
