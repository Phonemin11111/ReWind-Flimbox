import React from 'react'

const Movie = ({ title, backdrop_path }) => {
  return (
    <div>
       <div className=" flex">
      <div>
        <p className="text-xs">{title}</p>
        <img
          className="rounded"
          src={"https://image.tmdb.org/t/p/w300" + backdrop_path}
          alt=""
        />
      </div>
    </div>
    </div>
  )
}

export default Movie
