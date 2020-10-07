import React from "react";
import "./../containers/Style.css";

const Card = ({ id, name, comment }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}?size=100x100`}
        alt="Robot"
        className="card__img"
      />
      <div className="card__content">
        <h2 className="card__author">{name}</h2>
        <p className="card__text">{comment}</p>
      </div>
    </div>
  );
};

export default Card;
