import { useEffect } from "react";
import "./Profile.css";

import AuthContext from "../../Context/AuthContext/AuthContext";
import { useContext } from "react";
import ShoutoutList from "../../Components/shoutoutList/ShoutoutList";
import ShoutoutsContext from "../../Context/ShoutoutsContext/ShoutoutsContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { setProfile } = useContext(ShoutoutsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setProfile(true);
    } else {
      navigate("/");
    }

    return () => {
      setProfile(false);
    };
  }, [user]);

  return (
    <div className="Profile">
      <h2>All Shoutouts to or from myself</h2>
      <ShoutoutList />
    </div>
  );
};

export default Profile;
