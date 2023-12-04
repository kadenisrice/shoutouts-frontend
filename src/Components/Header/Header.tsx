import { Link } from "react-router-dom";
import "./Header.css";
import ShoutoutsContext from "../../Context/ShoutoutsContext/ShoutoutsContext";
import { useContext } from "react";
import { signInWithGoogle, signOut } from "../../firebaseConfig";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Header = () => {
  const { name } = useContext(ShoutoutsContext);
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <div className="header-userinfo">
        <h1>{name ? `Shoutouts to ${name}` : "All Shoutouts"}</h1>
        <div className="user-info">
          {user ? (
            <>
              <p className="welcome-info">Welcome, {user.displayName}</p>
              <img
                className="welcome-info"
                src={user.photoURL || ""}
                alt={user.displayName || ""}
              />
              <button className="welcome-info" onClick={signOut}>
                Sign Out
              </button>
            </>
          ) : (
            <button className="welcome-info" onClick={signInWithGoogle}>
              Sign In
            </button>
          )}
        </div>
      </div>

      <div className="nav-acc">
        <nav className="nav-bar">
          {name && (
            <Link to="/" className="link">
              Home
            </Link>
          )}

          <Link to="/favorites" className="link">
            favs
          </Link>

          <Link to="/profile" className="link">
            profile
          </Link>
        </nav>

        {/* <div className="user-info">
          {user ? (
            <>
              <p>Welcome, {user.displayName}</p>
              <img src={user.photoURL || ""} alt={user.displayName || ""} />
              <button onClick={signOut}>Sign Out</button>
            </>
          ) : (
            <button onClick={signInWithGoogle}>Sign In</button>
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
