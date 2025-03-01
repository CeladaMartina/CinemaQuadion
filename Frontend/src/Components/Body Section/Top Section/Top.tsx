import React from "react";
import "./top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";

import video from "../../../Videos/download.gif";

const Top : React.FC = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to MovieVerse+</h1>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img
              src="https://i.pinimg.com/564x/2e/ab/16/2eab16f03fcd7d4b5a8ea5ef1394e5a5.jpg"
              alt="Admin Image"
            />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <img src={video} />
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>
              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This month <br /> <small>200 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            {/* No me gusta la foto ahi */}
            {/* <div className="imgDiv">
            <img src='https://img.freepik.com/foto-gratis/planta-casa-palmera-maceta_53876-125837.jpg' alt='Image Name'/>
          </div> */}
          </div>

          <div className="sideBarCard">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>

              <h3>Help Center</h3>
              <p>
                Having trouble in Panti, please contact us from for more
                questions.
              </p>
              <button className="btn">Go to help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
