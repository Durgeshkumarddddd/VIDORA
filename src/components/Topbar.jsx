import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
export default function Topbar() {
  const [query, setQuery] = useState("");
  const [searches, setSearch] = useState([]);
 
  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (err) {
      console.log("Error", err)
    }
  }
  useEffect(() => {
    getSearch();
  }, [query])

return (

    <div className='relative w-full h-[12vh] text-white flex justify-start items-center ml-[15%]'>

      <i className="ri-search-line mr-2 text-zinc-400"></i>
      <input onChange={(e) => setQuery(e.target.value)} value={query} className='text-xl w-[50%] mx-10 p-4 text-zinc-200 outline-none bg-transparent' type='text' placeholder='Search Movies...' />

      {query.length > 0 && (<i onClick={() => setQuery("")} className="cursor-pointer text-zinc-400  ri-close-large-line">  </i>)
      }

      <div className='absolute top-[90%] w-[50%] max-h-[50vh] m-auto bg-zinc-100 text-black overflow-auto rounded ml-[5%]'>
        {searches.map((s, i) => (<Link key={i} className='mb-2 duration-300 inline-block w-full text-xl p-5 bg-zinc-200 hover:bg-red-100 hover:font-semibold border-zinc-200 '> 
       <div className='flex items-center'>
       <img className='w-[10vw] h-[12vh] mr-6 object-cover shadow-lg ' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path}` || "https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"} ></img>
       {s.name || s.title || s.original_name}
       </div>
        </Link>)
        )
        }

      </div>
 </div>
  );
}

