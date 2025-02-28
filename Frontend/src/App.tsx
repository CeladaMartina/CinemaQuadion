import SideBar from "./Components/SideBar Section/SideBar.js";
import Body from "./Components/Body Section/Body.js";
import Movie from "./Components/MovieSection/Movie.tsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/movies" element={<Movie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
