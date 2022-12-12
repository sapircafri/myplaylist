import React from "react";
import './Main.css'
import Song from "../Song/Song"

function Main(props) {
    return (
        <div className="main">

        

          {props.songs.map((v)=>
            <Song {...v} />)
          }  
        
           
        </div>
    );
}

export default Main;
