import React from "react";

function ShowCast({ cast, creator }) {
  return (
    <div className="show-cast">
      <h2>Cast & Creator</h2>
      <div className="show-cast-info">
        <div className="show-cast-list">
          <h3>Cast:</h3>
          <p>{cast}</p>
        </div>
        <div className="show-creator">
          <h3>Creator:</h3>
          <p>{creator}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCast;
