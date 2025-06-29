import axios from 'axios'
import { data } from 'jquery'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../MediaContext'
export default function Home() {

  let {movies,Isloading} = useContext(MediaContext);


  return (
    <>
      <div className="container mt-5">
        <h2 className='text-center mb-4'>Trending Movies</h2>

        {Isloading ? 
        <h2 className='text-center'> <i className='fas fa-spinner fa-spin'></i></h2>
        :
        <div className="row">

          {movies.map((movie,index)=>(
            <div key={index} className="col-md-3 mb-4">
              
              <div className="movie-card h-100 bg-transparent position-relative  ">
              <Link to={`/moviesdetails/${movie.media_type}/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className='card-img-top movie-image ' alt={movie.title} 
                style={{ cursor: "pointer" }}/>

                <div className="overlay">
                {/* <i className="fa fa-play-circle play-icon"></i> */}
                </div>
                
                <h5 className='text-center mt-3 text-white'>{movie.title}</h5>
              </Link>
                <i className="bi bi-star-fill text-warning"></i> <span className='text-center'>{movie.vote_average}</span>
              </div>
            </div>
          ))}
        </div>
        }

      </div>
      <div className="footer text-center  h-auto w-auto rounded-1">
        
        <p>&copy; All Copyrights 2025</p>
      </div>
    </>
  )
}

// <h2 className='text-center'> <i className='fas fa-spinner fa-spin'></i></h2>

//`https://api.themoviedb.org/3/trending/movie/day?api_key=630978b75934f69b95eec607fd0c9c00`

