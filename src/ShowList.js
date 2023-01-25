import React from "react";
import Show from "./Show";

const shows = [
  {
    name: "The Office",
    image: "the-office.jpg",
    rating: "9.0",
    synopsis:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
  },
  {
    name: "Stranger Things",
    image: "stranger-things.jpg",
    rating: "8.8",
    synopsis:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
  },
  {
    name: "Breaking Bad",
    image: "breaking-bad.jpg",
    rating: "9.5",
    synopsis:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
];

function ShowsList() {
  return (
    <div className="shows-list">
      {shows.map((show) => (
        <Show key={show.name} {...show} />
      ))}
    </div>
  );
}

export default ShowsList;
