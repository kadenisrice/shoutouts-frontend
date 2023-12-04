import { useParams } from "react-router-dom";
import ShoutoutList from "../shoutoutList/ShoutoutList";
import "./Main.css";
import AddShoutoutForm from "../AddShoutoutForm/AddShoutoutForm";
import ShoutoutsContext from "../../Context/ShoutoutsContext/ShoutoutsContext";
import { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Main = () => {
  const name: string | undefined = useParams().to;
  const { setName } = useContext(ShoutoutsContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setName(name || "");
  }, [name]);

  return (
    <main className="Main">
      <ShoutoutList />
      <div className="dashboard">
        {user ? (
          <AddShoutoutForm />
        ) : (
          <p>Please sign-in to leave a shoutout!</p>
        )}
      </div>
    </main>
  );
};

export default Main;
