import React, { useState, useEffect } from "react";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from "./pages/misc/Page404/Page404";
import SignIn from "./components/Auth/Register";
import Sign from "./components/Auth/SignIn";
import User from "./components/Auth/User";



import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { app } from "./components/Auth/firebase";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
    setShowLogin((prev) => !prev);
  };

  //const navigate = useNavigate(); // Initialize the navigate function

const handleSignIn = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  try {
    await signInWithEmailAndPassword(auth, email, pass); // Call Firebase sign-in
    setEmail("");
    setPass("");
   // navigate("/Home"); // Redirect to the Home page
  } catch (error) {
    console.error("Sign-in error:", error.message); // Log any errors
  }
};

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        setEmail("");
        setPass("");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then(async(result)=>{
      console.log(result);
    }).catch((error) => console.error(error));
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error(error));
  };

  // Define the router
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: user ? <Nav /> : <Navigate to="/User" />,
      children: [
        { index: true, element: <Hero/> },
        {
          path: "courses",
          children: [
            { index: true, element: <Courses /> },
            { path: ":courseId", element: <Details /> },
          ],
        },
        {
          path: "learn/:courseId",
          element: <Learn />,
          children: [{ path: "chapter/:chapterId", element: <Chapter /> }],
        },
        { path: "*", element: <Page404 /> },
      ],
    },
    {
      path: "/User",
      element: user ? (
        <User user={user} signouthandle={handleSignOut} />
      ) : showLogin ? (
        <Sign
          SetEmail={setEmail}
          SetPass={setPass}
          check={handleSignIn}
          google={handleGoogleSignIn}
          toggle={toggleRegister}
        />
      ) : (
        <SignIn
          SetEmail={setEmail}
          SetPass={setPass}
          create={handleSignUp}
          google={handleGoogleSignIn}
          toggle={toggleRegister}
        />
      ),
    },
  ]);
  

  return <RouterProvider router={browserRouter} />;
}

export default App;
