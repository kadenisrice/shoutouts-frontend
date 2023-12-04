import { FormEvent, useState, useContext, useEffect, useRef } from "react";
import "./AddShoutoutForm.css";
import Shoutout from "../../Models/Shoutout";
import ShoutoutsContext from "../../Context/ShoutoutsContext/ShoutoutsContext";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { storage } from "../../firebaseApp";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddShoutoutForm = () => {
  const { addNewShoutoutHandler, name } = useContext(ShoutoutsContext);
  const { user } = useContext(AuthContext);

  const [toUser, setToUser] = useState("");
  const [fromUser, setFromUser] = useState(user?.displayName || "");
  const [shoutOut, setShoutOut] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // functions -------------------------------------------------------
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    // building new shoutout
    let newShoutout: Shoutout = {
      to: toUser,
      from: fromUser,
      text: shoutOut,
    };

    if (user && user.photoURL) {
      newShoutout.photoURL = user.photoURL;
    }

    // ---------------------------------------------

    const files = fileInputRef.current?.files;
    console.log(files);

    if (files && files[0]) {
      const newFile = files[0];

      const storageRef = ref(storage, "shoutout-files/" + newFile.name);

      try {
        // sending photo to storage bucket (like a database)
        const snapshot = await uploadBytes(storageRef, newFile);

        // get the photo reference from storage bucket:
        const downloadURL = await getDownloadURL(snapshot.ref);

        // add img from firebase to our own data
        newShoutout.shoutoutImg = downloadURL;
        save(newShoutout);
      } catch (error) {
        console.log("fail", error);
      }
    } else {
      save(newShoutout);
    }
  };

  function save(newShoutout: Shoutout): void {
    addNewShoutoutHandler(newShoutout);

    setToUser(name || "");
    setFromUser(user?.displayName || "");
    setShoutOut("");
    formRef.current?.reset();
  }

  // setting to and froms for if you're signed in with google, or based on which account is clicked
  useEffect(() => {
    if (name) {
      setToUser(name);
    } else {
      setToUser("");
    }
  }, [name]);

  useEffect(() => {
    if (user) {
      setFromUser(user?.displayName || "");
    } else {
      setFromUser("");
    }
  }, [user]);

  return (
    <div className="AddShoutoutForm">
      <h2>Leave a Shout Out!</h2>
      <form onSubmit={submitHandler} ref={formRef}>
        <label htmlFor="to">To:</label>
        <input
          className="to"
          type="text"
          name="to"
          id="to"
          disabled={name !== ""}
          value={toUser}
          onChange={(e) => setToUser(e.target.value)}
        />

        <label htmlFor="from">From:</label>
        <input
          className="from"
          type="text"
          name="from"
          id="from"
          disabled={user !== null}
          value={fromUser}
          onChange={(e) => setFromUser(e.target.value)}
        />

        <label htmlFor="file">Upload Image!</label>
        <input type="file" name="file" id="file" ref={fileInputRef} />

        <label htmlFor="shoutout">Shout Out:</label>
        <textarea
          className="shoutout"
          name="from"
          id="shoutout"
          cols={5}
          rows={5}
          value={shoutOut}
          onChange={(e) => setShoutOut(e.target.value)}
        />

        <button>Submit Shout Out!</button>
      </form>
    </div>
  );
};

export default AddShoutoutForm;
