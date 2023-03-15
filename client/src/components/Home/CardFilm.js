import React from 'react'

export const CardFilm = ({title,urlPoster,time,rating}) => {
  return (
      <div className='divFilms'>
       <p className='tiFilmRo'>{title}</p> 
        
        <img src={urlPoster} className="imgFilm" alt='imagen del Poster'></img>

       <p className='pTime'>Duración: {time}</p> 

       <p className='pPunt'>Puntuación: {rating}</p> 


      </div>
  )
}
