import React from "react";
import { Link } from 'react-router-dom';
import axios from "../utils/axios";

import { useEffect } from "react";
export default function Sidebar() {
   


  return (
    <div className="w-[18%] h-screen border-r-2 border-zinc-400 ml-6 p-1 ai-style-change-2 overflow-y-hidden overflow-x-hidden">

      <h1 className="mt-8 mb-6">
        <i className="text-[#6556CD]  ri-clapperboard-ai-fill text-xl mt-12 "></i>
        <span className="text-xl text-white font-bold"> Durgesh </span>
      </h1>


      <nav className="text-zinc-400 flex flex-col mr-2">
        <h1 className=" text-xl  text-white  mt-4 mb-4 font-semibold"> New Feeds </h1>

        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl  "> <i className="ri-fire-fill m-1"></i>  Trending </Link>
        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl  "> <i className="ri-sparkling-2-fill m-1"></i> Popular </Link>
        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl  "> <i className="ri-video-ai-line m-1"></i> Movies </Link>
        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl  "> <i className="ri-tv-line m-1"></i> Tv Show </Link>
        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl  "> <i className="ri-team-line m-1"></i>  People </Link>

        <hr className="border-none h-[1px] bg-zinc-400 mt-3"></hr>
        <h1 className="text-white mt-4 text-xl font-semibold"> Website information </h1>
        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl "> <i className="ri-information-fill m-2"></i>About Us</Link>
        <Link className="text-xl p-5 hover:bg-[#6556CD] hover:text-white hover:rounded-xl "><i className="ri-phone-fill m-2"></i>  Contact Us</Link>
      </nav>
    </div>
  );
}
