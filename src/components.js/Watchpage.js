import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closemenu } from "./utils/appslice";
import Comments from "./Comments";
import Subscribe from "./Subscribe";
import { youtubeapi } from "./utils/constant";

const Watchpage = () => {
  const [videos, setvideos] = useState([]);
  
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closemenu());
  }, []);


  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(youtubeapi);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  };
  return (
    <>
      <div className="px-5 mx-10">
        <iframe
          width="1000"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <Subscribe info={videos} />

        <Comments />
      </div>
    </>
  );
};

export default Watchpage;
