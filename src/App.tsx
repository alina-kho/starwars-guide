import React from "react";
import "./App.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { MoviesPage } from "./pages/MoviesPage";
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
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={Paths.HOME} element={<Home />} />
          <Route element={<NavOutlet />}>
            <Route path={Paths.MOVIES} element={<MoviesPage />} />
            <Route path={Paths.CHARACTERS} element={<Characters />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
