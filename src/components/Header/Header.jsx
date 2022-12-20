import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import { usersContext } from '../../App';

import './Header.css'



function Header(props) {

    const { user } = useContext(usersContext)

    const [x, setX] = useState();
    return (
        <div className="header">
            <img id="img" src="https://cdn-icons-png.flaticon.com/128/3845/3845874.png" alt="" />
           <div className="icon"></div>
            <div className="ee">
            <img onClick={(e) => props.searchSong(x)} id="imgp" src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="" />

                <input onChange={(e) => setX(e.target.value)} id="inputSong" type="text" placeholder="Artist, songs or podcasts" />
                
            </div>
            <button onClick={(e) => props.searchSsong(x)} id="logout">Log out</button>
            <div id="hello"> {user.username}</div>
        </div>
    );
}
export default Header;
