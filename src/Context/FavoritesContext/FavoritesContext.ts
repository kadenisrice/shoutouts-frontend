import { createContext } from "react";
import Shoutout from "../../Models/Shoutout";

interface FavoritesContextModel {
  favorites: Shoutout[];
  addFavorite: (shoutout: Shoutout) => void;
  removeFavorite: (id: string) => void;
  isFav: (id: string) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
