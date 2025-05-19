import React, {  useContext } from 'react'
import { MediaContext } from '../MediaContext'
import { Link } from 'react-router-dom'
export default function Network() {


  let {person,Isloading} = useContext(MediaContext)
  return (
    <>
      
      <div className="container mt-5">
        <h2 className='text-center mb-4'>Trending Persons</h2>

        {Isloading ? 
        <h2 className='text-center'> <i className='fas fa-spinner fa-spin'></i></h2>
        :
        <div className="row">

          {person.map((movie,index)=>(
            <div key={index} className="col-md-3 mb-4">
              
              <div className="movie-card h-100 bg-transparent position-relative  ">
              <Link to={`/moviesdetails/${movie.id}`}>
                <img src={ movie.profile_path?`https://image.tmdb.org/t/p/w500${movie.profile_path}
                `:'https://assets.mycast.io/actor_images/actor-an-unknown-actor-465215_large.jpg?1656098263'}
                className='card-img-top movie-image ' alt={movie.title} 
                style={{ cursor: "pointer" }}/>

                <div className="overlay">
                {/* <i className="fa fa-play-circle play-icon"></i> */}
                </div>
                
                <h5 className='text-center mt-3 text-white'>{movie.name}</h5>
              </Link>
                <i className="bi bi-fire"></i> <span className='text-center'>{movie.popularity}</span>
              </div>
            </div>
          ))}
        </div>
        }

      </div>
    </>
  )
}
