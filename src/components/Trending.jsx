import React,{useState} from "react";
import Topbar from "./spartials/Topbar";
import {useNavigate} from "react-router-dom"
import DropdownFilter from "./spartials/DropdownFilter";
import { useEffect } from "react";
import Card from "./spartials/Card";

const Trending = () => {
   const Navigate = useNavigate();
   const [trending, setTrending] = useState("")
   const [category, setCategory] = useState("");
   const [duration, setDuration] = useState("");

   const getTrending = async () => {
    try {
        const { data } = await axios.get(`/trending/${category}/${duration}`)
        setTrending(data.results);
    } catch (error) {
        console.log("Error is", error)
    }
}
console.log("Card data is",category)

   useEffect(()=> {
    getTrending();
   },[category,duration])

    return(
        <div className="p-[3%] w-screen h-screen">
          <div className="w-full flex items-center">
          <h1 className="font-semibold text-zinc-400"> 
                <i onClick={()=> Navigate(-1)} className="text-xl hover:text-[#6556CD]  ri-arrow-left-line flex">{" "} Trending </i>
         </h1>

            <Topbar />

            <DropdownFilter title={"Category"} fun={(e)=>setCategory(e.target.value)} options={["All", "Tv", "movies", "show"]} />
            <DropdownFilter title={"Duration"} fun={(e)=> setDuration(e.target.value)} options={["All", "day", "week", "month"]} />

          </div>
          <Card data={trending} />
        </div>
    );
}

export default Trending ;

