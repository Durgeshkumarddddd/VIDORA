import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Header from "./Header";
import axios from "../utils/axios";
import HorizontalCards from "./HorizontalCards";
import DropdownFilter from "./DropdownFilter";

export default function Home() {
    document.title = "New Movies Hub";

    const [wallpaper, setWallpaper] = useState("");

    const [trending, setTrending] = useState("");
    const [category, setCategory] = useState("all");

    async function getHeaderWallepaper() {
        try {
            const { data } = await axios.get(`/trending/all/day`)
            const randomdata = data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomdata);
        }
        catch (error) {
            console.log("error is", error);
        }
    }

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`)
            setTrending(data.results);
        } catch (error) {
            console.log("Error is", error)
        }
    }

    useEffect(() => {
        !wallpaper && getHeaderWallepaper();
         getTrending();
          
    }, [category])


    return wallpaper ? (
        <div className="w-full h-full flex overflow-auto overflow-x-hidden">
            <Sidebar />
            <div className="w-[82%] h-full overflow-auto overflow-x-hidden">
                <Topbar />
                <Header data={wallpaper} />

                <div className="flex  m-5 justify-between">
                    <div className="text-white text-3xl flex  "> Trending  </div>
                    <div>
                        <DropdownFilter fun={(e)=>{ setCategory(e.target.value)}} title={"Filter"} options={['All', 'tv', 'movie', 'web Series',]} />
                        
                    </div>

                </div>

                <HorizontalCards data={trending} />

            </div>
        </div>
    ) : <h1 className="text-3xl w-full h-full flex justify-center items-center text-white"> Loading... </h1>;
} 