"use client";

import { useEffect, useState } from "react";
import { toggleFavorite, getFavorites } from "../lib/favorites";

export default function ProductCard({ product }) {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(getFavorites());
  }, []);

  const toggle = () => {
    const updated = toggleFavorite(product.id);
    setFav(updated);
  };

  const isFav = fav.includes(product.id);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 16,
        borderRadius: 8,
        background: isFav ? "#fff7e6" : "white",
      }}
    >
      <img src={product.image} width={120} height={120} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={toggle}>{isFav ? " Favorite" : " Add Favorite"}</button>
    </div>
  );
}
