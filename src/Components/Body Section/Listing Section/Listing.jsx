import React from 'react'
import './listing.css'
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";


const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All  <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjOt-GSE8NvyA7jk2sVxT0HXphpdTEQVsjg&s' alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjOt-GSE8NvyA7jk2sVxT0HXphpdTEQVsjg&s' alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjOt-GSE8NvyA7jk2sVxT0HXphpdTEQVsjg&s' alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjOt-GSE8NvyA7jk2sVxT0HXphpdTEQVsjg&s' alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All  <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
            </div>
            <div className="cardText">
              <span>
                10 Plant sold <br/>
                <small>
                  5 Sellers <span className='date'> 2 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All  <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
              <img src='https://modii.org/wp-content/uploads/2023/06/5claves_Mesa-de-trabajo-1.png' alt='User Image'/>
            </div>
            <div className="cardText">
              <span>
                20 Plant sold <br/>
                <small>
                  10 Sellers <span className='date'> 10 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing