import Shimmer from "./Shimmer";
const Subscribe=({info,ids})=>{
    console.log(ids);
    if(info.length===0){ 
        return <Shimmer/>
    }
    return(
        <div>
        <h1 className="m-3 text-xl font-bold">{info.find((infos)=>(
          infos.id===ids
        )).snippet.title}</h1>
        <div className="flex gap-6 m-3 p-2">
        <h2 className="font-bold">{info.find((infos)=>(
            infos.id===ids
        )).snippet.channelTitle}
        </h2>
        <div className="flex gap-4">
            <button className="bg-gray-200 px-2 py-1 w-14 rounded-xl ">Join</button>
            <button className="bg-black w-24 text-white  rounded-xl">Subscribe</button>

        </div>
        </div>
        
        </div>

    )
}
export default Subscribe;