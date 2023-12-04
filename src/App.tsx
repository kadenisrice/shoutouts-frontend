import Favorites from "./Components/Favorites/Favorites";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Profile from "./routes/Profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:to" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
