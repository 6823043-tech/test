export const getFavorites = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export const toggleFavorite = (id) => {
  if (typeof window === "undefined") return;
  const fav = getFavorites();

  if (fav.includes(id)) {
    const newFav = fav.filter((f) => f !== id);
    localStorage.setItem("favorites", JSON.stringify(newFav));
    return newFav;
  } else {
    const newFav = [...fav, id];
    localStorage.setItem("favorites", JSON.stringify(newFav));
    return newFav;
  }
};
