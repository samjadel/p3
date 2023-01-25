import React from "react";
import ShowHeader from "./ShowHeader";
import ShowSynopsis from "./ShowSynopsis";
import ShowSeasons from "./ShowSeasons";
import ShowCast from "./ShowCast";
import ShowRelated from "./ShowRelated";

function ShowPage({ show, relatedShows }) {
  return (
    <div className="show-page">
      <ShowHeader {...show} />
      <ShowSynopsis {...show} />
      <ShowSeasons {...show} />
      <ShowCast {...show} />
      <ShowRelated relatedShows={relatedShows} />
    </div>
  );
}

export default ShowPage;
