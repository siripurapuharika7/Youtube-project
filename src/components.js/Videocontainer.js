import { useEffect,useState } from "react";
import { youtubeapi } from "./utils/constant";
import Videocard from "../components.js/Videocard";
import { Link } from "react-router-dom";




const Videocontainer=()=>{

  const[videos,setvideos]=useState([]);

  useEffect(()=>{
    getvideos();
  },[]);

  const getvideos=async ()=>{

    const data=await fetch(youtubeapi);
    const json=await data.json();
    console.log(json.items);
    setvideos(json.items);


  }

    return(
        <div className="flex flex-wrap">
          {
            videos.map((video)=>(
          <Link to={"watch?v="+video.id} key={video.id}  ><Videocard  info={video}/></Link> 
            ))
          }
          
          
            
        </div>
    );
};
export default Videocontainer;
