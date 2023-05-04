import React from 'react'
import { useState , useEffect } from 'react';
import './Row.css';

function Row({url , name}) {
    let netflix_orignal = url;

    const [data , setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            let response = await fetch(netflix_orignal);
            let responseJson = await response.json();
            setData(responseJson.results);
        }
        fetchData();
    },[])

    console.log(data);

  return (
    <div className='wrapper'>
        <div className='netflix-heading'>
            <h2>{name}</h2>
        </div>

        <div className='netflix-slider'>
            {
                data.map((value) => {
                    return <img className='netflix-slider-image' src={`https://image.tmdb.org/t/p/w500${value?.backdrop_path}`}></img>
                })
            }
        </div>
    </div>
  )
}

export default Row