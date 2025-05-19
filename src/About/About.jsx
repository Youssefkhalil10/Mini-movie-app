import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../MediaContext'

export default function About() {

  let {tv,Isloading} = useContext(MediaContext)

  return (
    <>
      <div className="container mt-5">
      <h2 className='text-center mb-4'>Trending On Tv</h2>
      
    {Isloading ? <h2 className='text-center'> <i className='fas fa-spinner fa-spin'></i></h2>
        :
      <div className="row">
        {tv.map((index,key)=>(
          <div key={key} className="col-md-3 mb-4">
            
          <div className="movie-card h-100 position-relative">
            <Link to={`/moviesdetails/tv/${index.id}`}>
            <img className='card-img-top '
            src={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
            alt={index.title}
            style={{ cursor: "pointer" }}/>

            <h5 className='text-center mt-3 text-white'>{index.name}</h5>
            </Link>
            <i className="bi bi-star-fill text-warning"></i> <span className='text-center'>{index.vote_average}</span>

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
