import { useContext, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"

import "../PageCSS/Home.css"
import { AuthContext } from "../../Providers/Authproviders";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
const Profile = () => {
    const { user} = useContext(AuthContext)
    const [userinfo , Setuserinfo] = useState([])
    axiosSecure.get(`/users/${user.email}`)
    .then(res => Setuserinfo(res.data))


    console.log(userinfo);
    return (
        <div className='backgrnd'>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white border-4 border-sky-300">
                    {/* // avatar */}
                    <div className="relative group">
                        <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="profile img" />
                        <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                        <span className="h-5 w-5 bg-pink-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
                    </div>
                    {/* // name & designation */}
                    <div className="text-center space-y-1">
                        <h1 className="text-2xl text-gray-700">{user.displayName}</h1>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                    <div className="flex justify-between w-full py-2">
                        <div className="text-center space-y-1">
                            <p className="text-gray-500">User Role</p>
                            <p className="text-xl font-mono text-gray-700">{userinfo[0]?.userRole}</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-gray-500">Points</p>
                            <p className="text-xl font-mono text-gray-700">{userinfo[0]?.userPoints}</p>
                        </div>
                        <div className="text-center space-y-1 ">
                            <p className="text-gray-500">goldcoins</p>
                            <p className="text-xl font-mono text-gray-700">{userinfo[0]?.goldcoins}</p>
                        </div>
                    </div>
                    {/* // bio */}
                    <p className="text-center font-semibold text-sm text-black font-mono pb-2">Level up your gaming experience with us - where every click counts, every victory matters, and every quest leads to epic adventures. Welcome to the ultimate gaming community where gamers unite and friendships forge in the fires of virtual battlegrounds.</p>
                    <button className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Redeem Points</button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;