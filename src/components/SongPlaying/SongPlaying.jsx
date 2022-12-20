import React from 'react';
import './SongPlaying.css';

function SongPlaying({ songToPlay }) {
    return (
        <div className='SongPlaying'>
            <div className="songPlay-aa">
                <img className="songPlay-img" src={songToPlay.thumbnail.url} alt="" />
            
           
                <img className="playar-img" src="https://cdn-icons-png.flaticon.com/128/5356/5356895.png" alt="" />
                <img className="playar-img" src="https://cdn-icons-png.flaticon.com/128/5733/5733413.png" alt="" />
                <img className="playar-img" src="https://cdn-icons-png.flaticon.com/128/3161/3161569.png" alt="" />
                <img className="playar-img" src="https://cdn-icons-png.flaticon.com/128/5733/5733742.png" alt="" />
                <img className="playar-img" src="https://cdn-icons-png.flaticon.com/128/4211/4211471.png" alt="" />
                </div>
            <div class="songPlay-songDetails">
                {/* <div> {songToPlay.title}</div> */}
                {/* <img className="img_channel" src={songToPlay.channel.icon} alt="" /> */}

            </div>

            {/* <div className="ather_details">{songToPlay.channel.name}</div> */}

            {/* <div className="ather_details">
                <div> {songToPlay.uploadedAt} - </div>
                <div> {songToPlay.views} views</div>
            </div> */}

        </div>
    )
}

export default SongPlaying