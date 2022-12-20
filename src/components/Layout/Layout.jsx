import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import Side from "../Side/Side";
import './Layout.css'

function Layout() {
  
  const [songs,setSongs]=useState([]);
  const[search,setSearch]=useState("חנן בן ארי")
  const searchSong = (value) => {
    setSearch(value)
    console.log(value);
  }

  useEffect(() => {
    const options = {
      params: {query:search  , safesearch: 'false'},
      headers: {
        'X-RapidAPI-Key': 'bf48ce99a1mshd741b2de5c3b8e5p14a7fejsn24fb17707014',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }
    };
    
    axios.get('https://simple-youtube-search.p.rapidapi.com/search', options).then(function (response) {
      console.log(response.data);
      setSongs (response.data.results)
    }).catch(function (error) {
      console.error(error);
    });
},[search]);
  

// useEffect(() => {
//   fetch('https://simple-youtube-search.p.rapidapi.com/search')
//   .then(res => res.json())
//   .then(data=>console.log(data))
// });


  return (
    <div className="App-layout">
       <Header searchSong={searchSong}/>
       <div className="side_main">
      <Side/>
       <Routes>
          <Route path="/spotify" element={<Main songs={songs}/>}/>
          <Route path="/search" element={<SearchPage songs={songs}/>}/>
 
        </Routes>
        </div> 
    </div>
  );
}

export default Layout;
