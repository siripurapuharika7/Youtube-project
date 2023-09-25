

const Videocard=({info})=>{

    // const{snippet}=info;
    // const{thumbnails}=snippet;
    // console.log("1234",info);
    return(
        <div className="w-72 m-5 p-2 shadow-lg">
         <img alt="thumbnail" className="rounded-lg" src={info.snippet.thumbnails.medium.url} />
         <ul>
            <li className="font-bold">{info.snippet.title}</li>
            <li className="">{info.snippet.channelTitle}</li>
            <li>{info.statistics.viewCount} views</li>
         </ul>
        </div>
    );
};

export default Videocard;