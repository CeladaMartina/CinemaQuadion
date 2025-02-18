import React from 'react'
import './activity.css'
import { BsArrowRightShort } from "react-icons/bs";

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img  src='https://us.123rf.com/450wm/deagreez/deagreez2208/deagreez220800731/189858586-photo-of-pretty-overjoyed-girl-toothy-smile-show-tongue-out-wear-red-white-stripes-t-shirt-isolated.jpg?ver=6' alt='Image Name'/>
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img  src='https://us.123rf.com/450wm/deagreez/deagreez2208/deagreez220800731/189858586-photo-of-pretty-overjoyed-girl-toothy-smile-show-tongue-out-wear-red-white-stripes-t-shirt-isolated.jpg?ver=6' alt='Image Name'/>
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img  src='https://us.123rf.com/450wm/deagreez/deagreez2208/deagreez220800731/189858586-photo-of-pretty-overjoyed-girl-toothy-smile-show-tongue-out-wear-red-white-stripes-t-shirt-isolated.jpg?ver=6' alt='Image Name'/>
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img  src='https://us.123rf.com/450wm/deagreez/deagreez2208/deagreez220800731/189858586-photo-of-pretty-overjoyed-girl-toothy-smile-show-tongue-out-wear-red-white-stripes-t-shirt-isolated.jpg?ver=6' alt='Image Name'/>
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img  src='https://us.123rf.com/450wm/deagreez/deagreez2208/deagreez220800731/189858586-photo-of-pretty-overjoyed-girl-toothy-smile-show-tongue-out-wear-red-white-stripes-t-shirt-isolated.jpg?ver=6' alt='Image Name'/>
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity