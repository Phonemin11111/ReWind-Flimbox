import React from 'react'
import "../style/Signboard.css"

const SignboardMovie = ({ title, backdrop_path }) => {
  return (
    <div className=' w-[40%]'>
       <div className=" flex">
      <div className=' moAni'>
        {/* <p className="text-xs">{title}</p> */}
        <img
          className=" rounded-md"
          src={"https://image.tmdb.org/t/p/w300" + backdrop_path}
          alt=""
        />
      </div>
    </div>
    </div>
  )
}

export default SignboardMovie;
