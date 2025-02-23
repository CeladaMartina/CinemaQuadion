import React, { useEffect, useState } from "react";
import "./listing.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Listing = () => {
  const [movies, setMovies] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await axios.get("http://localhost:4000/movies");
        console.log(resp.data);
        setMovies(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">        
          {movies.map((item) => (
            <div className="singleItem" key={item.id}>
              <AiFillHeart className="icon" />
              <img src={item.image} alt="Image Name" />
              <h3>{item.name}</h3>
            </div>
          ))}        
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
            </div>
            <div className="cardText">
              <span>
                10 Plant sold <br />
                <small>
                  5 Sellers <span className="date"> 2 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
              <img
                src="https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png"
                alt="User Image"
              />
            </div>
            <div className="cardText">
              <span>
                20 Plant sold <br />
                <small>
                  10 Sellers <span className="date"> 10 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
