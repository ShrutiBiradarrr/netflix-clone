import React ,{useState} from 'react'
import {FaHeart , FaRegHeart} from 'react-icons/fa';

function Movie({ele}) {
    const [Like, setLike] = useState(false);

    return (
        <>
         <div className=" inline-block h-[200px] w-[250px] cursor-pointer relative p-2">
                {/* <h1 className="text-white">{ele && ele.title}</h1> */}
                <img className="object-cover h-full w-full block"
                  src={`https://image.tmdb.org/t/p/original/${
                    ele && ele.backdrop_path
                  }`}
                  alt={ele.name}
                 
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {ele && ele.title}
                  </p>
                  <p>
                    {Like ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300"/>}
                  </p>
                </div>
              </div>
        </>
    )
}

export default Movie
