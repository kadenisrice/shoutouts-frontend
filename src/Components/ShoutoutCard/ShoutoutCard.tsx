import { useContext } from "react";
import Shoutout from "../../Models/Shoutout";
import "./ShoutoutCard.css";
import FavoritesContext from "../../Context/FavoritesContext/FavoritesContext";
import { Link } from "react-router-dom";

// making the handler optional with ? so we can use this component multiple places!
interface Props {
  shoutout: Shoutout;
  deleteShoutoutHandler?: (id: string) => void;
}

const ShoutoutCard = ({ shoutout, deleteShoutoutHandler }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="ShoutoutCard">
      <h2>
        Shout out to{" "}
        <Link
          to={`/user/${encodeURIComponent(shoutout.to)}`}
          className="to-user"
        >
          @{shoutout.to}
        </Link>{" "}
      </h2>

      <p className="from-text">
        From:{" "}
        <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
          @{shoutout.from}
        </Link>{" "}
        {shoutout.photoURL && (
          <img
            className="user-photo"
            src={shoutout.photoURL}
            alt={shoutout.from}
          />
        )}
      </p>

      {shoutout.shoutoutImg && (
        <img
          className="upload-photo"
          src={shoutout.shoutoutImg}
          alt="shoutout-photo"
        />
      )}

      <p className="shoutout-text">{shoutout.text}</p>

      <div className="icon-container">
        {/* this icon is to delete a shoutout | need to check if prop is truthy before use*/}
        {deleteShoutoutHandler && (
          <i
            className="fa-solid fa-trash"
            onClick={() => deleteShoutoutHandler(shoutout._id!)}
          ></i>
        )}

        {isFav(shoutout._id!) === false ? (
          <i
            className="fa-regular fa-heart"
            onClick={() => addFavorite(shoutout)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-heart-crack"
            onClick={() => removeFavorite(shoutout._id!)}
          ></i>
        )}

        {/* this icon is to favorite a shoutout */}

        {/* this icon is to UNfavorite a shoutout */}
      </div>
    </li>
  );
};

export default ShoutoutCard;
