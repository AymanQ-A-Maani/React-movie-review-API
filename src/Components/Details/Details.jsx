import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'


export default function Details() {
    
    let [details, setDetails] = useState({});
    let [searchParams, setSearchParams] = useSearchParams();
    let currentId = searchParams.get('id');

    async function getMovieDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=80535e16557f6c35560bf06b1b9d2b9c`);
        setDetails(data);
    }
      
    useEffect(()=>{
        getMovieDetails();  
    },[])


    return (
        <div className="row">
            <div className="col-md-4">
                <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className='w-100'/>
            </div>
            <div className="col-md-8">
                <h1>{details.title}</h1>
                <p>{details.overview}</p>
                <p> Release Date : {details.release_date}</p>
                <p> Vote : {details.vote_average}</p>
                <p> Geners : {details.geners}</p>
            </div>
        </div>
    )
}
