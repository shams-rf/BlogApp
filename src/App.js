import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {useState} from "react";
import {signOut} from "firebase/auth"
import {auth} from "./firebase-config";


function App() {
    // Keep track of logged in state
    const[isAuth, setIsAuth] = useState(false);

    // Method to sign out a user
    // Call sign out method from firebase
    // Clear local storage to delete 'isAuth = true' variable
    // Redirect user to login page
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    };

  return (
      <Router>
          <nav>
              <Link to="/">Home</Link>
              {!isAuth ? (
                <Link to="/login">Login</Link>
              ) : (
                    <>
                    <Link to="/createpost">Create Post</Link>
                    <button onClick={signUserOut}>Log Out</button>
                    </>
                  )}
          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
  );
}

export default App;
