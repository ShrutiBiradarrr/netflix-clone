import React, {useState, useEffect} from 'react'
import axios from 'axios';
import requests from '../Request';


function Row({ title, featchURL}) {

    const [movies, setMovies] = useState([])
    console.log(title);
    useEffect(() => {
     const fetchData = async()=>{
        try {
            const {data} = await axios.get(featchURL)
            console.log(data);
            setMovies(data.results);
        } catch (error) {
            console.log("error in featching the data", error.message);

        }
     };
     fetchData();
    }, [featchURL])

    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex item-center' >
            <div id={'slider'}>
                  {movies.map((ele,index)=>{
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${ele?.backdrop_path}`}  alt='' /> 
                    </div>
                    // if Element is null then src is empty
                    //ele===null? "":ele ///orr//ele?.ele
                  })}
            </div>
        </div>
        </>
    )
}

export default Row;
