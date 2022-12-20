import React from "react";
import './Main.css'
import Song from "../Song/Song"
import SongPlaying from "../SongPlaying/SongPlaying";
import { useState } from "react";





function Main(props) {

  const[songClicked, setSongClicked] = useState(false)
  const[songToPlay,setSongToPlay] = useState({})

  const playSong = (id) => {
    setSongClicked(true)
    setSongToPlay(props.songs.find((v) => v.id == id))
  }
   
// console.log(songToPlay);


  return (
  
    <div className="main">

      <div className="song-playing">
        {songClicked && <>
          <SongPlaying songToPlay={songToPlay} playSong={playSong} />
        </>
        }


      </div>

      <div className="songs-container">
        {props.songs.map((v) =>
          <Song {...v}  playSong={playSong} />)
        }

      </div>



    </div>
  );
}

export default Main;
