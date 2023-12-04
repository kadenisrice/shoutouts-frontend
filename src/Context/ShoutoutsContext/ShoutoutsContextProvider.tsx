import { ReactNode, useEffect, useState } from "react";
import Shoutout from "../../Models/Shoutout";
import {
  addNewShoutout,
  deleteShoutout,
  getAllShoutouts,
} from "../../Services/shoutoutService";
import ShoutoutsContext from "./ShoutoutsContext";
import AuthContext from "../AuthContext/AuthContext";
import { useContext } from "react";

interface Props {
  children: ReactNode;
}

const ShoutoutsContextProvider = ({ children }: Props) => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState(false);
  const { user } = useContext(AuthContext);

  // functions ---------------------------------------------------------------------------

  // shortening get all shoutouts again:
  const updateShoutoutList = (name?: string) => {
    getAllShoutouts(name).then((res) => setShoutouts(res));
  };

  // add new shoutout:
  const addNewShoutoutHandler = (newShoutout: Shoutout) => {
    addNewShoutout(newShoutout).then(() => {
      updateShoutoutList();
    });
  };

  // delete shoutout:
  const deleteShoutoutHandler = (id: string) => {
    deleteShoutout(id).then(() => {
      updateShoutoutList();
    });
  };

  // -----------------------------------------------------------------------------------

  // populate list of shoutouts:

  useEffect(() => {
    if (profile) {
      getAllShoutouts(name).then((res) => {
        const filteredRes = res.filter((so) => {
          return so.to === user?.displayName || so.from === user?.displayName;
        });
        setShoutouts(filteredRes);
      });
    } else {
      updateShoutoutList(name);
    }
  }, [profile, name]);

  return (
    <ShoutoutsContext.Provider
      value={{
        shoutouts,
        setProfile,
        addNewShoutoutHandler,
        deleteShoutoutHandler,
        setName,
        name,
      }}
    >
      {children}
    </ShoutoutsContext.Provider>
  );
};

export default ShoutoutsContextProvider;
