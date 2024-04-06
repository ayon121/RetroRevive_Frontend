import { Link, Outlet } from "react-router-dom";
import "../PageCSS/Home.css"
import cat from "../../../src/assets/retrorevivecat.png"

const Layout = () => {
    return (
        <div className="backgrnd">
            <div className="">
                <div className=" h-screen fixed px-3 border-r-2 border-sky-300 flex flex-col pt-5 justify-start bg-gradient-to-r from-pink-800/40  via-purple-950 to-sky-950/80">
                    <img className="w-full  h-40" src={cat} alt="cat" />
                    <Link> <button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Dashboard</button></Link>
                    <Link to="/dashboard/addgame"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Add Game</button></Link>
                    <Link><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Add Product</button></Link>
                    <Link to="/dashboard/deletereviews"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Delete Reviews</button></Link>
                    <Link><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Home</button></Link>
                    {/* <div role="tablist" className="tabs tabs-boxed text-center text-[#3fb43b] font-bold gap-3 ">
                    <Link to="/dashboard/addgame"><a role="tab" className="tab bg-[#3fb43b] text-white px-7">ADD GAME</a></Link>
                    <Link to="/dashboard/deletereviews"><a role="tab" className="tab bg-[#3fb43b] text-white px-7">DELETE REVIEWS</a></Link>
                </div> */}
                </div>
                <div className="min-h-screen relative md:ml-52">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Layout;