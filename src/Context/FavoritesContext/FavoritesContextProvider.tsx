import { ReactNode, useState } from "react";
import Shoutout from "../../Models/Shoutout";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Shoutout[]>([]);

  // functions below ---------------------------------------------------

  // add new favorite:
  const addFavorite = (shoutout: Shoutout): void => {
    setFavorites((prev) => [...prev, shoutout]);
  };

  // remove a favorite (unfav):
  const removeFavorite = (id: string): void => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item._id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  // is shoutout a fav?
  const isFav = (id: string): boolean =>
    favorites.some((shoutout) => shoutout._id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
