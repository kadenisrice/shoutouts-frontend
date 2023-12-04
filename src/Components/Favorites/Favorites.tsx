import { useContext } from "react";
import FavoritesContext from "../../Context/FavoritesContext/FavoritesContext";
import "./Favorites.css";
import ShoutoutCard from "../ShoutoutCard/ShoutoutCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="Favorites">
      {favorites.map((fav) => (
        <ShoutoutCard key={fav._id!} shoutout={fav} />
      ))}
    </div>
  );
};

export default Favorites;
