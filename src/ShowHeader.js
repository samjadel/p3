import React from "react";

function ShowHeader({ name, image, rating }) {
  return (
    <div className="show-header">
      <img src={image} alt={name} className="show-header-image" />
      <h1 className="show-header-title">{name}</h1>
      <div className="show-header-rating">{rating}</div>
    </div>
  );
}

export default ShowHeader;
