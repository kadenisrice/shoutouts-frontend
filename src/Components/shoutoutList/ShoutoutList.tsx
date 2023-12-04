import { useContext } from "react";
import "./ShoutoutList.css";
import ShoutoutCard from "../ShoutoutCard/ShoutoutCard";
import ShoutoutsContext from "../../Context/ShoutoutsContext/ShoutoutsContext";

const ShoutoutList = () => {
  const { shoutouts, deleteShoutoutHandler } = useContext(ShoutoutsContext);

  return (
    <div className="ShoutoutList">
      <ul className="shoutout-list">
        {shoutouts.map((shoutout) => (
          <ShoutoutCard
            key={shoutout._id}
            shoutout={shoutout}
            deleteShoutoutHandler={deleteShoutoutHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
