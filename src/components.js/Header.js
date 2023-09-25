import { useDispatch } from "react-redux";
import { togglemenu } from "./utils/appslice";
import { useState,useEffect } from "react";
import { youtubesearchapi } from "./utils/constant";

const Header=()=>{

  const[searchquery,setsearchquery]=useState("");
//   console.log(searchquery);

const[suggestions,setsuggestions]=useState([]);

const[showsuggestions,setshowsuggestions]=useState(false);

  useEffect(()=>{
    getsearchsuggestions();
  },[searchquery]);

  const getsearchsuggestions = async ()=>{
    const data=await fetch(youtubesearchapi+searchquery);
    const json=await data.json();
    console.log(json);
    setsuggestions(json[1]);
}

//
const disptach=useDispatch();

const togglemenuhandler=()=>{
  disptach(togglemenu());
};

  
    return(
        
        <div className="grid grid-flow-col p-4 m-4 shadow-lg ">

            <div className="flex col-span-1">
                
                <img onClick={()=>togglemenuhandler()}  className="h-8 cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
               <a href="/">
                <img className="h-8 mx-4" src="https://www.iconpacks.net/icons/1/free-youtube-icon-141-thumb.png"/>
                </a>
                
            </div>

            <div className="col-span-10 px-10 ">
              <div>

                <input className="w-1/2 p-2 border border-gray-400 rounded-l-full" type="text"
                value={searchquery} onChange={(e)=>setsearchquery(e.target.value)}
                onFocus={()=>(setshowsuggestions(true))}
                onBlur={()=>(setshowsuggestions(false))}

                 />

                <button className="border p-2 border-gray-400 rounded-r-full">search</button>
                </div>

                {showsuggestions &&
                (<div className="absolute px-2 py-2 bg-white w-[34rem] rounded-lg shadow-lg border-gray-400 " >
                  <ul>
                    {suggestions.map((s)=> <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100 "> {s} </li>)}
                    
                  
                    
                   
                 </ul>
                </div>)}


            </div>

            <div className="col-span-1">
                <img className="h-8" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
            </div>

        </div>
    );
};
export default Header;