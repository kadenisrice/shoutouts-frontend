import axios from "axios";
import Shoutout from "../Models/Shoutout";

// importing base URL from .env.local file
const baseUrl: string = import.meta.env.VITE_APP_BASEURL ?? "";

// get all shoutouts:
export const getAllShoutouts = (name?: string): Promise<Shoutout[]> => {
  return axios
    .get(`${baseUrl}/shoutouts`, { params: { name } })
    .then((res) => res.data);
};

// add new shoutout:
export const addNewShoutout = (shoutout: Shoutout): Promise<Shoutout> => {
  return axios.post(`${baseUrl}/shoutouts`, shoutout).then((res) => res.data);
};

// delete shoutout:
export const deleteShoutout = (id: string): Promise<void> => {
  return axios
    .delete(`${baseUrl}/shoutouts/${encodeURIComponent(id)}`)
    .then((res) => res.data);
};
