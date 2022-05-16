import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/404";
import EventHandling from "./components/eventhandling";
// import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Manageuser from "./components/manageuser";
import Signup from "./components/signup";
// import Usingmaterial from "./components/usingMaterial";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const theme1 = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const theme2 = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? theme1 : theme2}>
        <BrowserRouter>
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route element={<Home></Home>} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<NotFound />} path="404" />
            <Route element={<EventHandling />} path="event" />
            {/* <Route element={<Gallery />} path="gallery" /> */}
            {/* <Route element={<Usingmaterial />} path="/material" /> */}
            <Route element={<Signup />} path="/signup" />
            <Route element={<Manageuser/>} path="/manageuser" />
            <Route element={<Navigate to="/home"></Navigate>} path="" />
            <Route element={<Navigate to="/404"></Navigate>} path="*" />
            {/* <Route element={<Navigate to="app_config"></Navigate>} path="config" /> */}
          </Routes>
          {/* <Link to="/home">Home Page</Link>
        <Link to="/login">Login Page</Link> */}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;