import React from "react";

export default function Navbar({ setFilter }) {
  // All categories
  const categories = ["All", "Academics", "Day to Day Life", "Others"];

  // Flitering categoris
  const displayCat = categories.map((cat) => (
    <button key={cat} onClick={() => setFilter(cat)} className="btn">
      {cat}
    </button>
  ));

  return <div className="navbar">{displayCat}</div>;
}
