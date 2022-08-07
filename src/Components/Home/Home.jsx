import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import style from './Home.module.css'


export default function Home() {

  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingTv, setTrendingTv] = useState([]);
  let[trendingPeople, setTrendingPeople] = useState([]);
  async function getTrendingItems(mediaType,callback){
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=80535e16557f6c35560bf06b1b9d2b9c`);
  callback(data.results);
  }

  useEffect(()=>{ 
    getTrendingItems(`movie`,setTrendingMovies);
    getTrendingItems(`tv`,setTrendingTv);
    getTrendingItems(`person`,setTrendingPeople);
  },[])

 let avatar = './avatar.png';
 let imagepath = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <div className='row'> 
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className={` w-25 mb-3 rounded ${style.border}`}></div>
            <h2>Trending<br />Movies<br /> to watch now</h2>
            <p>Most movies watched by day</p>
            <div className={` w-100 rounded ${style.border}`}></div>
          </div>
        </div>
        {trendingMovies.map((movie,index)=> 
        <div className='col-md-2 my-3' key={index}>
          <div className="item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='w-100'/>
            <h3 className='h5 mt-3 text-center'>{movie.title?movie.title:movie.name}</h3>
          </div>
        </div>
        )}
      </div>

      <div className='row'> 
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className={` w-25 mb-3 ${style.border}`}></div>
            <h2>Trending<br />TV shows<br /> to watch now</h2>
            <p>Most TV shows watched by day</p>
            <div className={` w-100 ${style.border}`}></div>
          </div>
        </div>
        {trendingTv.map((tv,index)=> 
        <div className='col-md-2 my-3' key={index}>
          <div className="item">
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="" className='w-100'/>
            <h3 className='h5 mt-3 text-center'>{tv.name}</h3>
          </div>
        </div>
        )}
      </div>

      <div className='row'> 
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className={` w-25 mb-3 ${style.border}`}></div>
            <h2>Trending<br />person<br /> to watch now</h2>
            <p>Most popular person by day</p>
            <div className={` w-100 ${style.border}`}></div>
          </div>
        </div>
        {trendingPeople.map((person,index)=> 
        <div className='col-md-2 my-3' key={index}>
          <div className="item">
            <img src={person.profile_path?imagepath+person.profile_path:avatar} alt="" className='w-100'/>
            <h3 className='h5 mt-3 text-center'>{person.name}</h3>
          </div>
        </div>
        )}
      </div>
    </>
  )
}
