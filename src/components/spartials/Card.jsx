import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-screen h-screen p-5">
      {data.map((d, i) => (
        <div key={i} className='min-w-[15vw] h-[30vh] rounded-md border-gray-100 bg-zinc-900 '>

          <img className=' ' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path}` || "https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"} ></img>
          <div className="text-xl font-medium">{d.name || d.title || d.original_name}  </div>
          <p className='text-xl w-[90%] p-x-1'> {d.overview.slice(0, 30)}... <Link className="text-blue-300  ">more</Link> </p>
        </div>
       ))}

        </div>
      );
};

      export default Card;
