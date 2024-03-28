import bannerimage from "../../assets/RETROBanner.png"
import Navbar from "../Navbar/Navbar";
import "./Banner.css"
const Banner = () => {
    return (
        <div>

            <div className=" min-h-screen h-auto w-full banner mb-4" style={{ backgroundImage: `url(${bannerimage})` }}>
                <div className="">
                    <Navbar></Navbar>
                </div>
                <div className="hero hero-overlay bg-opacity-25 md:bg-opacity-5 mt-5 "></div>
                <div className=" text-left text-neutral-content mt-11 lg:mt-10  pt-8 lg:pt-7  pb-4 lg:pb-2 ml-8 ">
                    <div className="max-w-6xl px-4 ">
                        <h1 className="mb-5 text-5xl font-bold uppercase">Rediscover Retro</h1>
                        <p className="mb-5 w-full md:w-2/5">Your Passport to Gaming Nostalgia! Dive into a world where classics never age, and every pixel tells a story. Join us in celebrating the timeless joy of retro gaming today</p>
                        <button className="group relative flex gap-1 w-32 md:w-36 items-center rounded-lg border-2 border-pink-400 p-4 text-sky-300 "><span className="text-sm ">JOIN NOW </span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-pink-500 duration-300 group-hover:w-5/6 "><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;