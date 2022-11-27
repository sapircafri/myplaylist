import React from 'react'
import Song from '../../components/Song/Song'
import './SearchPage.css'

function SearchPage(props) {
  return (
    <div className='serachPage'>
          {props.songs.map((v)=>
            <Song img={v.channel.icon} name={v.title} time={v.duration_formatted} />)

          }  
    </div>
  )
}

export default SearchPage