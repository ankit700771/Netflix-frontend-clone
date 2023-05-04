import React from 'react'
import { useState , useEffect } from 'react';
import './Navbar.css';

function Navbar(props) {
    let netflix_orignal = props.netflix_orignal;
    console.log(netflix_orignal)
    const [data , setData] = useState([]);
    let index;

    useEffect( () => {
        async function fetchData(){
            let response = await fetch(netflix_orignal);
            let responseJson = await response.json();
            setData(responseJson.results);
        }
        fetchData()
    },[])

    index = Math.floor(Math.random() * data.length);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (

        <> 
            <header className="banner"
            style={{
            backgroundSize: "contain",
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${data[index]?.poster_path}")`,
            backgroundPosition: "center center"
            }}>

            <div className="banner_contents">
            <h1 className="banner_title">
                {data[index]?.title || data[index]?.name || data[index]?.original_name}
            </h1>

            <div className="banner_buttons">
             <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(data[index]?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
            </header>
        </>
 
        )
}

export default Navbar