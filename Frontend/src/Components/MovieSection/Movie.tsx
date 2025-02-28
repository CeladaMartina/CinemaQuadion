import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movie.css";
import { TiTicket } from "react-icons/ti";

interface Movie {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Movie: React.FC = () => {
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
    <div className="mainContent">
      <section>
        <div className="container">
          <div className="cards">
            {movies.map((item) => (
              <div className="card bg-base-100 w-96 shadow-xl" key={item.id}>
                <figure className="px-10 pt-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                    style={{ width: "50%" }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title" style={{ textAlign: "center" }}>
                    {item.name}
                  </h2>
                  <p>{item.description}</p>
                  <div className="card-actions">
                    <button className="btn flex">
                      Buy Now <TiTicket className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;
