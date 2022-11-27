import React from "react";
import './Song.css'

function Song(props) {
    
    return (
        <div className="song">
            <img id="aa" src={props.img} alt="" />
            <div class="songDetails">
              <ul> {props.name}</ul> 
               {/* <ul> {props.singer}</ul> */}
               <ul>{props.time}</ul> 
            </div>




        </div>
    );
}

export default Song;
