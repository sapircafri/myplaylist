import React from "react";
import './Song.css'

function Song(props) {
    
    return (
        <div onClick={()=>props.playSong(props.id)} className="song">
            <div id="aa">
            <img className="img" src={props.thumbnail.url} alt="" />
            <div className="time">{props.duration_formatted}</div> 
            </div>
           
            <div class="songDetails">
              <div> {props.title}</div> 
              <img className="img_channel" src={props.channel.icon} alt="" />
              
            </div>

            <div className="ather_details">{props.channel.name}</div>

            <div  className="ather_details">
             <div> {props.uploadedAt} - </div>
              <div> {props.views} views</div>
            </div>




        </div>
    );
}

export default Song;
