import React from "react";

function ShowSeasons({ seasons, episodes }) {
  return (
    <div className="show-seasons">
      <h2>Seasons & Episodes</h2>
      <div className="show-seasons-info">
        <div className="show-seasons-count">{seasons} Seasons</div>
        <div className="show-episodes-count">{episodes} Episodes</div>
      </div>
    </div>
  );
}

export default ShowSeasons;
