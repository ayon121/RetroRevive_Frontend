import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center ">
                <div role="tablist" className="tabs tabs-boxed text-center text-[#3fb43b] font-bold gap-3 ">
                    <Link to="/dashboard/addgame"><a role="tab" className="tab bg-[#3fb43b] text-white px-7">ADD GAME</a></Link>
                    <Link to="/dashboard/deletereviews"><a role="tab" className="tab bg-[#3fb43b] text-white px-7">DELETE REVIEWS</a></Link>
                </div>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Layout;