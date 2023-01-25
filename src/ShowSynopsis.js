import React from "react";

function ShowSynopsis({ synopsis }) {
  return (
    <div className="show-synopsis">
      <h2>Synopsis</h2>
      <p>{synopsis}</p>
    </div>
  );
}

export default ShowSynopsis;
