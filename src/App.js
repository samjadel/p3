import React from "react";
import ShowsGallery from "./ShowsGallery";

function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">My List</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <h1>
        Watch Netflix movies & TV shows online or stream right to your smart TV,
        game console, PC, Mac, mobile, tablet and more.
      </h1>
      <button>Join Free for a Month</button>
    </div>
  );
}

function Featured() {
  return (
    <section className="featured">
      <h2>Featured</h2>
      <ul>
        <li>
          <img src="image1.jpg" alt="Featured Show 1" />
          <h3>Show 1</h3>
        </li>
        <li>
          <img src="image2.jpg" alt="Featured Show 2" />
          <h3>Show 2</h3>
        </li>
        <li>
          <img src="image3.jpg" alt="Featured Show 3" />
          <h3>Show 3</h3>
        </li>
      </ul>
    </section>
  );
}

const shows = [
  {
    name: "The Crown",
    image: "the-crown.jpg",
    rating: "9.0",
  },
  {
    name: "Black Mirror",
    image: "black-mirror.jpg",
    rating: "8.8",
  },
  {
    name: "The Haunting of Hill House",
    image: "the-haunting-of-hill-house.jpg",
    rating: "8.8",
  },
  {
    name: "The Witcher",
    image: "the-witcher.jpg",
    rating: "8.3",
  },
  {
    name: "Money Heist",
    image: "money-heist.jpg",
    rating: "8.4",
  },
  {
    name: "Narcos",
    image: "narcos.jpg",
    rating: "8.8",
  },
  {
    name: "Stranger Things",
    image: "stranger-things.jpg",
    rating: "8.8",
  },
  {
    name: "Breaking Bad",
    image: "breaking-bad.jpg",
    rating: "9.5",
  },
  {
    name: "Game of Thrones",
    image: "game-of-thrones.jpg",
    rating: "9.3",
  },
  {
    name: "The Sopranos",
    image: "the-sopranos.jpg",
    rating: "9.2",
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <ShowsGallery shows={shows} />
    </div>
  );
}
