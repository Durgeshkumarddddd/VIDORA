import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import DropdownFilter from "./DropdownFilter";

export default function HorizontalCards({ data }) {

    return (
        <div className=" w-full ">
            {/* <div className="flex  m-5 justify-between">
                <div className="text-white text-3xl flex  "> Trending  </div>
                <div>
                    <DropdownFilter title={"filter"} options={[ 'All', 'tv','movies', 'web Series', ]} />

                </div>

            </div> */}


            <div className="w-[100%] flex gap-3 overflow-auto m-3 text-white ">

                {data.map((d, i) => (
                    <div key={i} className='min-w-[15vw] h-[30vh] rounded-md border-gray-100 bg-zinc-900 '>

                        <img className=' ' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path}` || "https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"} ></img>
                        <div className="text-xl font-medium">{d.name || d.title || d.original_name}  </div>
                        <p className='text-xl w-[90%] p-x-1'> {d.overview.slice(0, 30)}... <Link className="text-blue-300  ">more</Link> </p>
                    </div>)
                )
                }
            </div>

        </div>
    );
}