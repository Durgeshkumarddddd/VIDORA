import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from '../utils/axios';

export default function Header({ data }) {
    console.log(data);
    return (
        <header >
            <div
                style={{
                    background: `linear-gradient( rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path})`,
                    backgroundPosition: "top 10%",
                    backgroundSize: "cover",   // cover
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "50vh",
                    overflow: "hidden",

                }}
                className="w-full h-[50vh] text-white flex flex-col justify-end p-4"
             > <div className='flex flex-col mb-8'>
                    <h1 className='text-white text-4xl w-[70%]'> {data.name || data.original_name || data.title} </h1>
                    <p className='text-xl mt-2  w-[70%]'> {data.overview.slice(0, 150)}... <Link className="text-blue-400 " >more</Link> </p>
                    <p> <i className="ri-megaphone-fill text-amber-300 "></i> {" "}  {data.release_date  || "No information"  }
                     <i className="ri-movie-2-line text-amber-400 ml-6"></i>{" "} {data.media_type } 
                     </p>

                     <Link className='text-black mt-2 bg-blue-400 p-2 w-[10%]'>{" "} Watch Trailer</Link>
                  

                </div>
            </div>

        </header>
    );
}