import React from "react";
import Card from "./Card";

const CardList = ({ comments }) => {
  return comments.map((el, i) => {
    return (
      <Card
        key={i}
        id={comments[i].id}
        name={comments[i].name}
        comment={comments[i].body}
      />
    );
  });
};

export default CardList;
