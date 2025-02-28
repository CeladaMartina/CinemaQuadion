import React, { useEffect, useState } from "react";
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import Movie from "../../MovieSection/Movie";

// interface Movie {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
// }

const Listing: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await axios.get<Movie[]>("http://localhost:4000/movies");
        console.log(resp.data);
        setMovies(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Billboard</h1>
        <button
          className="btn flex"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/movies";
          }}
        >
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div
        className="secContainer carousel carousel-center bg-neutral rounded-box overflow-x-auto space-x-4 p-4"
        style={{ maxWidth: "600px" }}
      >
        {movies.map((item) => (
          <div
            className="singleItem carousel-item w-40 flex flex-col items-center p-4 rounded-lg bg-base-200"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover"
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
