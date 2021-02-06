import React from "react";
import "./Card.css";

import Button from "@material-ui/core/Button";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__infoName">
          <strong>Name: </strong>
          <p>
            <p>{user.name}</p>
          </p>
        </div>
        <div className="card__infoEmail">
          <p>
            <strong>Email:</strong>
          </p>
          <p>{user.email}</p>
        </div>
        <div className="card__infoPhone">
          <p>
            <strong>Phone Number:</strong>
          </p>
          <p>{user.contact}</p>
        </div>
        <div className="card__buttons">
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
