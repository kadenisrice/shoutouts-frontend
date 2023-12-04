import { createContext } from "react";
import Shoutout from "../../Models/Shoutout";

interface ShoutoutsContextModel {
  shoutouts: Shoutout[];
  addNewShoutoutHandler: (shoutout: Shoutout) => void;
  deleteShoutoutHandler: (id: string) => void;
  setName: (s: string) => void;
  name: string;
  setProfile: (b: boolean) => void;
}

const defaultValues: ShoutoutsContextModel = {
  shoutouts: [],
  addNewShoutoutHandler: () => {},
  deleteShoutoutHandler: () => {},
  setName: () => {},
  name: "",
  setProfile: () => {},
};

const ShoutoutsContext = createContext(defaultValues);

export default ShoutoutsContext;
