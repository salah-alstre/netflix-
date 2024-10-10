import React, { useEffect, useRef, useState } from 'react'
import './TitileCards.css'
import cards_data from '../../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitileCards = ({title, category}) => {
const [apiData , setApiData ] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWY5MWE2NDllZTdjODQzYjJhYThkMThkYzQ4ODBkYyIsIm5iZiI6MTcyODQ1ODA1My41NTQxNTgsInN1YiI6IjY3MDYyYzAzZGM1NGYyOWQwZWFiNTA2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPGLPZp0YbOXM5RbZD-CP1mFZlKutVCIVuX9YMVZKgk'
    }
  };
  

  const cardsRef = useRef ();
const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <div className='titile-cards'>
      
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, indx)=>{
          return <Link to={`/player/${card.id}`} className="card" key= {indx}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>

        })}
      </div>
    </div>
  )
}

export default TitileCards
