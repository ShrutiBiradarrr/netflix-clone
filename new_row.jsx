import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Request";
import Movie from "./Movie";
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'

function Row({ title, fetchURL ,rowID }) {
  const [movies, setMovies] = useState([]);
  console.log(title, fetchURL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(fetchURL);
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log("error in featching the data", error.message);
      }
    };
    fetchData();
  }, [fetchURL]);
  const sliderLeft=()=>{
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const sliderRight=()=>{
    var slider = document.getElementById('slider' + rowID)
    slider.scrollRight = slider.scrollRight + 500;
  }

  return (
    <>
      <h2 className="text-white font-extrabold md:text-xl p-5">{title}</h2>
      <div className="overflow-x-scroll scrollbar-hide item-center  ">
        {/* <MdChevronLeft 
        onClick={sliderLeft} className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-20  group-hover:block" size={40} /> */}
        <div id={"slider" + rowID} className=" w-fit flex ">
          {movies.map((ele, index) => (
            
             <Movie key={index} ele={ele}/>
           
            // if Element is null then src is empty
            //ele===null? "":ele ///orr//ele?.ele
          ))}
        </div>
        {/* <MdChevronRight 
        onClick={sliderRight} className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-20  group-hover:block" size={40}/> */}
      </div>
    </>
  );
}

export default Row;
