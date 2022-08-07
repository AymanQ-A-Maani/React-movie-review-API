import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Movie() {

  let [trendingMovies, setTrendingMovies] = useState([]);
  let navigate = useNavigate();
  function goToDetails(id){
    navigate({
      pathname: '/details',
      search: `?id=${id}`,
    })

  }
  async function getTrendingItems(){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=80535e16557f6c35560bf06b1b9d2b9c`);
    setTrendingMovies(data.results);
   }

   useEffect(()=>{ 
    getTrendingItems();
  },[])

  return (
    <>
      <div className='row'> 
        {trendingMovies.map((movie,index)=> 
        <div className='col-md-2 my-3' key={index}>
          <div className="item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} onClick={()=> goToDetails(movie.id)} alt="" className='w-100'/>
            <h3 className='h5 mt-3 text-center' onClick={()=> goToDetails(movie.id)}>{movie.title} </h3>
          </div>
        </div>
      )}</div>
  </>
  )
}
