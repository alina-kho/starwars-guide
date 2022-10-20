import React from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Movies } from "./pages/Movies";
import { Characters } from "./pages/Characters";
import { Paths } from "./models/Paths";

//To make Navbar appear on all pages but the home one:
const NavOutlet = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<Home />} />
        <Route element={<NavOutlet />}>
          <Route path={Paths.MOVIES} element={<Movies />} />
          <Route path={Paths.CHARACTERS} element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
