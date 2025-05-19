import { createContext, useState } from "react";

import axios from 'axios'
import { data } from 'jquery'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export let MediaContext = createContext([]);


export function MediaContextProvider(props){

const [movies, setmovies] = useState([])
const [tv, setTv] = useState([])
const [person, setPerson] = useState([])
const [error, seterror] = useState(false)
const [Isloading, setIsloading] = useState(true)
const apikey = '630978b75934f69b95eec607fd0c9c00'


const getMovies = async (mediaType,callback)=>{
  try{
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${apikey}`
    );
    callback(data.results);
    setIsloading(false)
  }
  catch(error){
    console.log(seterror(error));
  }

}
useEffect(()=>{
  getMovies('movie',setmovies);
  getMovies('tv',setTv);
  getMovies('person',setPerson);
  

},[])




    return <MediaContext.Provider value={{movies,tv,Isloading,person}}>
        {props.children}
    </MediaContext.Provider>
}