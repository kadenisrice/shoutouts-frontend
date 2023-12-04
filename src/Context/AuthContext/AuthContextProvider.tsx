import { ReactNode, useEffect, useState } from "react";

import AuthContext from "./AuthContext";
import { User } from "firebase/auth";
import { auth } from "../../firebaseApp";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  console.log(user);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
export default AuthContextProvider;
