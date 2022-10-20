import axios from 'axios'
// import { Button } from 'bootstrap'
import React, { useState, useEffect } from 'react'
import requests from '../Request'

function Main() {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => { //data runs atleast one time not render again and again
        const getMovies = async () => {
            try {
                const { data } = await axios.get(requests.requestsTopRated); //in search of data and wait in backgorund and after getting data it continus to exicute
                console.log(data);
                setMovies(data.results);//state updated

            } catch (error) {
                console.log("error in featching ", error.message);
            }

        };

        getMovies();
    }, [])
    return (
        <>
            <div className='w-full h-[550px] text-white'>
                <div className='w-full h-full'>
                    <div className="absolute w-full h-[500px] bg-gradient-to-r from-black"></div>
                    <img className='w-full h-[500px] object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
                    
                    <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold '>{movie?.title}</h1>
                    <div className='mt-4'>
                       
                        <button className='border bg-gray-300 text-black py-2 px-5 border-gray-300 '>Play</button>
                        <button className='border border-gray-300 text-white py-2 px-5 ml-4'>Watch Later</button>
                        
                    </div>
                    <p className='text-gray-400  text-sm mt-2'>Release:{movie?.release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]   text-gray-200'>{movie?.overview}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;