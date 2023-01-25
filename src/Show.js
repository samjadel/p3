import React from "react";

function Show({ name, image, rating, synopsis }) {
  return (
    <div className="show">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="rating">{rating}</div>
      <p>{synopsis}</p>
    </div>
  );
}

export default Show;
