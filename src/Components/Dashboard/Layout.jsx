import { Link, Outlet } from "react-router-dom";
import "../PageCSS/Home.css"
import cat from "../../../src/assets/retrorevivecat.png"

const Layout = () => {
    return (
        <div className="backgrnd">
            <div className="flex gap-4 ">
                <div className=" px-4 border-r-2 border-sky-300 flex flex-col pt-5 justify-center bg-gradient-to-r from-pink-800/40  via-purple-950 to-sky-950/80">
                    <img className="w-full h-40 px-3" src={cat} alt="cat" />
                    <Link> <button className="btn w-full  my-3">Dashboard</button></Link>
                    <Link><button className="btn  w-full my-3">Add Game</button></Link>
                    <Link><button className="btn w-full my-3">Add Product</button></Link>
                    <Link><button className="btn w-full my-3">Delete Reviews</button></Link>
                    <Link><button className="btn w-full my-3">Home</button></Link>
                    {/* <div role="tablist" className="tabs tabs-boxed text-center text-[#3fb43b] font-bold gap-3 ">
                    <Link to="/dashboard/addgame"><a role="tab" className="tab bg-[#3fb43b] text-white px-7">ADD GAME</a></Link>
                    <Link to="/dashboard/deletereviews"><a role="tab" className="tab bg-[#3fb43b] text-white px-7">DELETE REVIEWS</a></Link>
                </div> */}
                </div>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Layout;