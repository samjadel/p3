import React from "react";

function ShowsGallery({ shows }) {
  return (
    <section className="shows-gallery">
      <h2>TV Shows</h2>
      <div className="shows-container">
        {shows.map((show, index) => (
          <div className="show" key={index}>
            <img src={show.image} alt={show.name} />
            <h3>{show.name}</h3>
            <p>Rating: {show.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShowsGallery;
