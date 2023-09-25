import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar=()=>{

    const ismenuopen=useSelector((store)=>store.app.ismenuopen);

    if(!ismenuopen) return null;

    return(
        <div className="shadow-lg m-2 p-10 w-48">
            <h1 className="font-bold ">subscription</h1>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li>shorts</li>
                <li>videos</li>
                <li>live</li>
            </ul>
            <h1 className="font-bold pt-4">History</h1>
            <ul>
                <li>music</li>
                <li>sports</li>
                <li>games</li>
                <li>movies</li>
            </ul>
            <h1 className="font-bold pt-4">Library</h1>
            <ul>
                <li>music</li>
                <li>sports</li>
                <li>games</li>
                <li>movies</li>
            </ul>
        </div>
    );
};
export default Sidebar;