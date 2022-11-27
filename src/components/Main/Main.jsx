import React from "react";
import './Main.css'
import Song from "../Song/Song"

function Main(props) {
    return (
        <div className="main">

        

          {props.songs.map((v)=>
            <Song img={v.channel.icon} name={v.title} time={v.time} />)
          }  
        
           
        </div>
    );
}

export default Main;
