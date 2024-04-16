import React from "react";
import './Blocks.css'
import searchplay from '@assets/search.png'
import Book from '@assets/event.png'
import Play from '@assets/soccer-ball-variant.png'

function Blocks() {
  return (
    
      <div className="d-flex flex-column flex-md-row justify-content-center w-100 h-50 mt-3 home-box-2">
        
        <div className="d-flex flex-column align-items-center text-break p3 text-center">
          <img src={searchplay} alt="" />
          <h3>Search</h3>
          <p>
            Are you looking to play after work, organize your Sunday Five's
            football mathch? Explore the Largest court
          </p>
        </div>

        <div className="d-flex flex-column align-items-center text-break p3 text-center">
          <img src={Book} alt="" />
          <h3>Book</h3>
          <p>
            Once You have found the perfect ground, court or gym, Connect the
            venue through the Book Now Button{" "}
          </p>
        </div>

        <div className="d-flex flex-column align-items-center text-break p3 text-center">
          <img src={Play} alt="" />
          <h3>Play</h3>
          <p>
            You are the hero, you've fond a stunning turf or court, booked with
            ease and now its time to play
          </p>
        </div>

    </div>

  );
}

export default Blocks;
